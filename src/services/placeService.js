import { apiCache, apiClientWithRetry } from "../utils/apiclients";

const NOMINATIM_URL = "https://nominatim.openstreetmap.org";
const GEOAPIFY_URL = "https://api.geoapify.com/v2/places";
const GEOAPIFY_API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

export const getLocationCoordinates = async (location) => {
    if(!location?.trim()){
        throw new Error("Please enter a Location");
    }

    const cacheKey = `location:${location.toLowerCase()}`;
    const cached = apiCache.get(cacheKey);
    if(cached) return cached;

    const url = `${NOMINATIM_URL}/search?format=jsonv2&limit=1&q=${encodeURIComponent(location)}`;

    let data;
    try {
        data = await apiClientWithRetry(url, { maxRetries: 1 });
    } catch (error) {
        throw new Error("Location lookup is unavailable. Please try again shortly.", { cause: error });
    }

    if(!data.length){
        throw new Error("Location not found");
    }

    const coordinates = {
        lat: data[0].lat,
        lon: data[0].lon
    };

    apiCache.set(cacheKey, coordinates);
    return coordinates;
};

export const getNearbyPlaces = async (lat, lon, radius = 3000) => {
    if (!GEOAPIFY_API_KEY) {
        throw new Error("Geoapify API key is missing");
    }

    const cacheKey = `places:${lat}:${lon}:${radius}`;
    const cached = apiCache.get(cacheKey);
    if (cached) return cached;

    const categories = [
        "catering",
        "entertainment",
        "leisure",
        "tourism",
        "sport",
        "beach",
        "commercial",
    ].join(",");

    const url = `${GEOAPIFY_URL}?categories=${categories}&lon=${lon}&lat=${lat}&radius=${radius}&limit=50&apiKey=${GEOAPIFY_API_KEY}`;

    const data = await apiClientWithRetry(url, {
        timeout: 20000,
        maxRetries: 1,
    });

    if (!data.features?.length) {
        throw new Error("No nearby places found.");
    }

    apiCache.set(cacheKey, data.features);
    return data.features;
};

// Estimate price range based on place category
const getPriceCategoryFromCategories = (categories = []) => {
    const categoryMap = {
        'catering.restaurant': '₹₹₹', // 1200-2500
        'catering.cafe': '₹₹', // 500-1200
        'catering.fast_food': '₹', // 100-500
        'catering': '₹₹', // 500-1200
        'entertainment': '₹₹', // 500-1200
        'leisure': '₹₹', // 500-1200
        'tourism.sights': 'Free', // 0
        'tourism': '₹', // 100-500
        'beach': 'Free', // 0
        'sport': '₹₹', // 500-1200
        'shopping': '₹₹', // 500-1200
    };

    for (const category of categories) {
        if (categoryMap[category]) {
            return categoryMap[category];
        }
        for (const key in categoryMap) {
            if (category.startsWith(key)) {
                return categoryMap[key];
            }
        }
    }
    return '₹₹'; // Default
};

const getPriceRangeDescription = (priceSymbol) => {
    const ranges = {
        '₹': '₹100–₹500',
        '₹₹': '₹500–₹1,200',
        '₹₹₹': '₹1,200–₹2,500',
        '₹₹₹₹': '₹2,500+',
        'Free': 'Free'
    };
    return ranges[priceSymbol] || '₹₹';
};

export const getPlacePrice = (categories = []) => {
    const symbol = getPriceCategoryFromCategories(categories);
    return {
        symbol,
        range: getPriceRangeDescription(symbol)
    };
};

// Fetch real photo of the exact place from Wikimedia Commons or Wikipedia
export const getPlacePhoto = async (placeName, city = "Mumbai") => {
    try {
        // Build search term: "Place Name, City"
        const searchTerm = `${placeName}, ${city}`;
        
        // First try Wikimedia Commons
        const commonsUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchTerm)}&format=json&origin=*`;
        const commonsResponse = await fetch(commonsUrl);
        
        if (!commonsResponse.ok) return null;
        
        const commonsData = await commonsResponse.json();
        
        if (commonsData.query?.search?.length > 0) {
            // Get the first result from Commons
            const pageTitle = commonsData.query.search[0].title;
            
            // Fetch the page to get image URL
            const pageUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=imageinfo&iiprop=url&format=json&origin=*`;
            const pageResponse = await fetch(pageUrl);
            
            if (!pageResponse.ok) return null;
            
            const pageData = await pageResponse.json();
            const page = Object.values(pageData.query.pages)[0];
            if (page?.imageinfo?.[0]?.url) {
                return page.imageinfo[0].url;
            }
        }

        // Fallback: Try Wikipedia with just place name
        const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(placeName)}&format=json&origin=*`;
        const wikiResponse = await fetch(wikiUrl);
        
        if (!wikiResponse.ok) return null;
        
        const wikiData = await wikiResponse.json();
        
        if (wikiData.query?.search?.length > 0) {
            const pageTitle = wikiData.query.search[0].title;
            const imgUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=pageimages&pithumbsize=600&format=json&origin=*`;
            const imgResponse = await fetch(imgUrl);
            
            if (!imgResponse.ok) return null;
            
            const imgData = await imgResponse.json();
            const page = Object.values(imgData.query.pages)[0];
            if (page?.thumbnail?.source) {
                return page.thumbnail.source;
            }
        }

        return null;
    } catch (error) {
        // Silently fail and return null for fallback image
        return null;
    }
};

export const transformPlaces = (rawPlaces) => {
    return rawPlaces
        .filter((place) => place.properties?.name)
        .map((place) => {
            const properties = place.properties;
            const categories = properties.categories || [];

            let category = "place";
            let vibes = [];

            const has = (value) => categories.includes(value) || categories.some(cat => cat.startsWith(value + "."));

            // Place category
            if (has("catering")) category = "cafe";
            else if (has("leisure")) category = "park";
            else if (has("tourism")) category = "attraction";
            else if (has("entertainment")) category = "entertainment";

            // Aesthetic
            if (
                has("catering") ||
                has("tourism") ||
                has("entertainment")
            ) {
                vibes.push("Aesthetic");
            }

            // Chill
            if (
                has("leisure") ||
                has("catering")
            ) {
                vibes.push("Chill");
            }

            // Romantic
            if (
                has("catering") ||
                has("tourism") ||
                has("beach")
            ) {
                vibes.push("Romantic");
            }

            // Fun
            if (
                has("entertainment") ||
                has("beach")
            ) {
                vibes.push("Fun");
            }

            // Adventurous
            if (
                has("sport") ||
                has("beach") ||
                has("tourism") ||
                has("leisure")
            ) {
                vibes.push("Adventurous");
            }

            // Remove duplicates
            vibes = [...new Set(vibes)];

            if (vibes.length === 0) {
                vibes.push("Chill");
            }

            const id = properties.place_id;
            const placeName = properties.name;
            
            // Get real price based on category
            const priceInfo = getPlacePrice(categories);

            return {
                id,
                title: placeName,
                description: `Nearby ${category}`,
                image: null, // Will be fetched in Results.jsx
                vibe: vibes,
                places: [
                    {
                        id,
                        name: placeName,
                    },
                ],
                duration: "Flexible",
                travelTime: "Within 3 km",
                budget: priceInfo.range,
                price: priceInfo.symbol,
                stops: 1,
            };
        });
};

export const searchPlaces = async (location) => {
    const { lat, lon } = await getLocationCoordinates(location);
    const rawPlaces = await getNearbyPlaces(lat, lon);
    return transformPlaces(rawPlaces);
};
