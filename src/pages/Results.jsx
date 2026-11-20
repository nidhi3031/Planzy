import { ArrowLeft, Pencil, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlanCard from "../components/PlanCard";
import { searchPlaces, getPlacePhoto } from "../services/placeService";

export default function Results() {
  const { state } = useLocation();
  const planner = state?.planner || {};

  const [selectedVibe, setSelectedVibe] = useState(planner.vibe || "All");
  const [apiPlaces, setApiPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Helper function to convert price symbol to numeric value for comparison
  const getPriceValue = (priceSymbol) => {
    const priceMap = {
      'Free': 0,
      '₹': 1,
      '₹₹': 2,
      '₹₹₹': 3,
      '₹₹₹₹': 4,
    };
    return priceMap[priceSymbol] || 2;
  };

  // Helper function to get max price from user budget
  const getMaxPriceValue = (budget) => {
    const maxPriceMap = {
      '₹': 1,
      '₹₹': 2,
      '₹₹₹': 3,
      '₹₹₹₹': 4,
    };
    return maxPriceMap[budget] || 2;
  };

  // Fetch nearby places from the API
  useEffect(() => {
    const fetchPlaces = async () => {
      if (!planner.location?.trim()) {
        setError("Please select a location first.");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");

      try {
        const places = await searchPlaces(planner.location);
        
        // Fetch real photos for each place using Wikimedia Commons/Wikipedia
        const placesWithImages = await Promise.all(
          places.map(async (place) => {
            try {
              // Get real photo of the exact place
              const photo = await getPlacePhoto(place.title, planner.location);
              
              // Use photo if found, otherwise use a contextual fallback
              const image = photo || `https://picsum.photos/seed/${place.id}/600/400`;
              
              return {
                ...place,
                image: image
              };
            } catch (e) {
              // Silently fail and use fallback image
              return {
                ...place,
                image: `https://picsum.photos/seed/${place.id}/600/400`
              };
            }
          })
        );
        
        setApiPlaces(placesWithImages);
      } catch (err) {
        console.error("Places API error:", err);
        setError(err.message || "Unable to fetch nearby places.");
        setApiPlaces([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [planner.location]);

  // Filter API places according to selected vibe AND budget
  const filteredPlaces = apiPlaces.filter((place) => {
    // Filter by vibe
    const vibeMatches = 
      selectedVibe === "All" ||
      (place.vibe || []).some(
        (vibe) => vibe.toLowerCase() === selectedVibe.toLowerCase(),
      );

    // Filter by budget if provided
    let budgetMatches = true;
    if (planner.budget) {
      const userMaxPrice = getMaxPriceValue(planner.budget);
      const placePrice = getPriceValue(place.price);
      budgetMatches = placePrice <= userMaxPrice;
    }

    return vibeMatches && budgetMatches;
  });

  const vibes = ["All", "Aesthetic", "Chill", "Fun", "Romantic", "Adventurous"];

  return (
    <>
      <Navbar />

      <main className="mx-auto min-h-[70vh] max-w-7xl px-5 pb-10 pt-9 sm:px-8 sm:pt-14">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#81756d] hover:text-[#ff7f6e]"
        >
          <ArrowLeft size={15} />
          Back to your plan
        </Link>

        {/* Page heading */}
        <div className="mt-7">
          <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#ff7f6e]">
            The rest of your day, sorted
          </p>

          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            We found {filteredPlaces.length} nearby places ✨
          </h1>

          <p className="mt-2 text-sm text-[#777]">
            Places near {planner.location || "your location"}, based on your
            outing.
          </p>
        </div>

        {/* Existing plan */}
        <section className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-[22px] bg-[#fff0e9] p-4 sm:px-5">
          <div className="flex items-center gap-3 flex-1">
            <span className="grid size-11 place-items-center rounded-2xl bg-white text-xl">
              🎉
            </span>

            <div className="flex-1">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a66b61]">
                Your Outing Details
              </p>

              <p className="mt-1 text-sm font-extrabold">
                {planner.activity || "Your activity"} at{" "}
                {planner.location || "your location"}
              </p>

              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                {planner.vibe && planner.vibe !== "All" && (
                  <span className="rounded-full bg-white/60 px-3 py-1 font-semibold text-[#796e66]">
                    Vibe: {planner.vibe}
                  </span>
                )}
                {planner.budget && (
                  <span className="rounded-full bg-white/60 px-3 py-1 font-semibold text-[#796e66]">
                    Budget: {planner.budget}
                  </span>
                )}
                {planner.time && (
                  <span className="rounded-full bg-white/60 px-3 py-1 font-semibold text-[#796e66]">
                    {planner.time}
                  </span>
                )}
              </div>
            </div>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-extrabold text-[#63584f] hover:bg-[#fffaf6]"
          >
            <Pencil size={13} />
            Edit plan
          </Link>
        </section>

        {/* Working vibe filters */}
        <div className="mt-7 flex flex-wrap gap-2">
          {vibes.map((vibe) => (
            <button
              key={vibe}
              type="button"
              onClick={() => setSelectedVibe(vibe)}
              className={`rounded-full border px-4 py-2 text-xs font-bold ${
                selectedVibe === vibe
                  ? "border-[#292522] bg-[#292522] text-white"
                  : "border-[#f1ebe5] bg-white text-[#716963]"
              }`}
            >
              {vibe}
            </button>
          ))}
        </div>

        {/* Places heading */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs font-bold text-[#867b73]">
            {filteredPlaces.length} nearby places
          </p>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#948980]">
            <Sparkles size={13} className="text-[#d3a739]" />
            Based on your location
          </span>
        </div>

        {/* API results */}
        <div className="mt-5 grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-2">
          {loading ? (
            <p className="col-span-full py-10 text-center text-sm text-[#777]">
              Finding places near {planner.location}...
            </p>
          ) : error ? (
            <p className="col-span-full py-10 text-center text-sm text-red-500">
              {error}
            </p>
          ) : filteredPlaces.length > 0 ? (
            filteredPlaces.map((place, index) => (
              <div
                key={place.id}
                className="min-w-0 animate-slide-up"
                style={{
                  animationDelay: `${index * 45}ms`,
                }}
              >
                <PlanCard plan={place} isSaved={false} onSave={() => {}} />
              </div>
            ))
          ) : (
            <p className="col-span-full py-10 text-center text-sm text-[#777]">
              No places found for {selectedVibe}. Try another vibe.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
