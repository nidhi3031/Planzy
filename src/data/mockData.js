const image = (photo, width = 900) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`

export const activities = [
  { label: 'Movie', icon: '🎬' },
  { label: 'Shopping', icon: '🛍️' },
  { label: 'Café', icon: '☕' },
  { label: 'Restaurant', icon: '🍽️' },
  { label: 'Event', icon: '🎉' },
  { label: 'Attraction', icon: '📍' },
  { label: 'Friends', icon: '👯' },
  { label: 'Other', icon: '✨' },
]

export const vibes = [
  { label: 'Aesthetic', icon: '✨' },
  { label: 'Photo-worthy', icon: '📸' },
  { label: 'Foodie', icon: '🍝' },
  { label: 'Night Out', icon: '🌙' },
  { label: 'Date', icon: '💕' },
  { label: 'Relaxing', icon: '🌿' },
  { label: 'Fun', icon: '🎉' },
  { label: 'Budget', icon: '💸' },
  { label: 'Hidden Gems', icon: '💎' },
]

export const travelOptions = ['Nearby', '15 min', '30 min', '45 min', '60 min']

export const budgets = [
  { value: '₹', description: 'Under ₹500' },
  { value: '₹₹', description: '₹500–₹1,000' },
  { value: '₹₹₹', description: '₹1,000–₹2,000' },
  { value: '₹₹₹₹', description: '₹2,000+' },
]

export const places = [
  {
    id: 'pvr-kurla', name: 'PVR Kurla', category: 'Movie', rating: 4.4, price: '₹₹', distance: 'Starting point',
    tags: ['Movie', 'Friends'], image: image('photo-1489599849927-2ee91cede3ba'),
    description: 'Settle in for the film that starts your evening.',
  },
  {
    id: 'cozy-corner', name: 'The Cozy Corner', category: 'Café', rating: 4.5, price: '₹₹', distance: '1.2 km',
    tags: ['Aesthetic', 'Date'], image: image('photo-1554118811-1e0d58224f24'),
    description: 'A sunlit little café with beautiful coffee and even better cake.',
  },
  {
    id: 'monsoon-room', name: 'The Monsoon Room', category: 'Café', rating: 4.7, price: '₹₹', distance: '2.4 km',
    tags: ['Aesthetic', 'Hidden Gem'], image: image('photo-1445116572660-236099ec97a0'),
    description: 'Warm lights, leafy corners and a menu made for slow evenings.',
  },
  {
    id: 'pali-village', name: 'Pali Village Café', category: 'Restaurant', rating: 4.6, price: '₹₹₹', distance: '5.8 km',
    tags: ['Date', 'Foodie'], image: image('photo-1414235077428-338989a2e8c0'),
    description: 'An intimate neighbourhood favourite tucked into Bandra.',
  },
  {
    id: 'bandra-fort', name: 'Bandra Fort', category: 'Photo Spot', rating: 4.6, price: 'Free', distance: '7.1 km',
    tags: ['Photo-worthy', 'Sunset'], image: image('photo-1500530855697-b586d89ba3ee'),
    description: 'Sea breeze, old stone arches and a very good golden-hour view.',
  },
  {
    id: 'carter-road', name: 'Carter Road Promenade', category: 'Park', rating: 4.5, price: 'Free', distance: '7.8 km',
    tags: ['Night Out', 'Relaxing'], image: image('photo-1519608487953-e999c86e7455'),
    description: 'A breezy seaside walk with plenty of little places to stop.',
  },
  {
    id: 'sobo-dessert', name: 'Sobo Dessert Club', category: 'Dessert', rating: 4.8, price: '₹₹', distance: '3.2 km',
    tags: ['Aesthetic', 'Sweet Treat'], image: image('photo-1488477181946-6428a0291777'),
    description: 'Small-batch desserts worth saving a little room for.',
  },
  {
    id: 'khau-gully', name: 'Khau Gully', category: 'Restaurant', rating: 4.4, price: '₹', distance: '1.9 km',
    tags: ['Budget', 'Foodie'], image: image('photo-1555939594-58d7cb561ad1'),
    description: 'A cheerful street-food crawl with something delicious at every turn.',
  },
  {
    id: 'bombay-canteen', name: 'The Bombay Canteen', category: 'Restaurant', rating: 4.7, price: '₹₹₹', distance: '4.6 km',
    tags: ['Foodie', 'Hidden Gem'], image: image('photo-1517248135467-4c7edcad34c4'),
    description: 'Playful local flavours in a lively, design-forward room.',
  },
  {
    id: 'bkc-garden', name: 'BKC Garden Walk', category: 'Park', rating: 4.3, price: 'Free', distance: '2.7 km',
    tags: ['Relaxing', 'Night Out'], image: image('photo-1470252649378-9c29740c9fa8'),
    description: 'A green little pause before the city lights take over.',
  },
  {
    id: 'mini-seashore', name: 'Mini Seashore', category: 'Viewpoint', rating: 4.5, price: 'Free', distance: '9.4 km',
    tags: ['Scenic', 'Photo-worthy'], image: image('photo-1500375592092-40eb2168fd21'),
    description: 'A peaceful waterfront detour with a wide-open evening sky.',
  },
  {
    id: 'jwd', name: 'Jio World Drive', category: 'Shopping', rating: 4.5, price: '₹₹₹', distance: '2.1 km',
    tags: ['Fun', 'Aesthetic'], image: image('photo-1441986300917-64674bd600d8'),
    description: 'A polished mix of independent shops, food and pop-up experiences.',
  },
  {
    id: 'smaaash', name: 'Smaaash Social', category: 'Activity', rating: 4.3, price: '₹₹', distance: '2.5 km',
    tags: ['Fun', 'Friends'], image: image('photo-1511512578047-dfb367046420'),
    description: 'Arcades, friendly competition and one more round before dinner.',
  },
  {
    id: 'khar-social', name: 'Khar Social', category: 'Nightlife', rating: 4.5, price: '₹₹', distance: '6.2 km',
    tags: ['Night Out', 'Friends'], image: image('photo-1514933651103-005eec06c04b'),
    description: 'A buzzing late-night hangout for snacks, music and good company.',
  },
  {
    id: 'paper-moon', name: 'Paper Moon Café', category: 'Café', rating: 4.6, price: '₹₹', distance: '2.8 km',
    tags: ['Aesthetic', 'Quiet'], image: image('photo-1495474472287-4d71bcdd2085'),
    description: 'A softly lit coffee nook with a bookshop feel and flaky morning buns.',
  },
  {
    id: 'maison-petal', name: 'Maison Petal', category: 'Café', rating: 4.7, price: '₹₹', distance: '3.6 km',
    tags: ['Date', 'Aesthetic'], image: image('photo-1559925393-8be0ec4767c8'),
    description: 'A pretty neighbourhood café for long chats and excellent iced coffee.',
  },
  {
    id: 'kala-ghoda-arches', name: 'Kala Ghoda Arches', category: 'Photo Spot', rating: 4.5, price: 'Free', distance: '3.9 km',
    tags: ['Photo-worthy', 'Hidden Gem'], image: image('photo-1519608487953-e999c86e7455'),
    description: 'A walkable heritage pocket with colourful doors and little galleries.',
  },
  {
    id: 'bandstand-steps', name: 'Bandstand Steps', category: 'Photo Spot', rating: 4.4, price: 'Free', distance: '7.5 km',
    tags: ['Scenic', 'Photo-worthy'], image: image('photo-1501785888041-af3ef285b470'),
    description: 'A seaside perch with room to sit, watch the water and catch the light.',
  },
  {
    id: 'matunga-steps', name: 'Matunga Flower Steps', category: 'Photo Spot', rating: 4.5, price: 'Free', distance: '5.1 km',
    tags: ['Aesthetic', 'Hidden Gem'], image: image('photo-1490750967868-88aa4486c946'),
    description: 'A cheerful lane of old façades, tiny shops and blooms in the windows.',
  },
  {
    id: 'little-easy', name: 'The Little Easy', category: 'Nightlife', rating: 4.6, price: '₹₹₹', distance: '6.8 km',
    tags: ['Night Out', 'Date'], image: image('photo-1514362545857-3bc16c4c7d1b'),
    description: 'A tucked-away cocktail bar with mellow music and a cosy late-night mood.',
  },
  {
    id: 'olive-bar', name: 'Olive Bar & Kitchen', category: 'Nightlife', rating: 4.5, price: '₹₹₹', distance: '7.2 km',
    tags: ['Date', 'Night Out'], image: image('photo-1514933651103-005eec06c04b'),
    description: 'An airy courtyard for an unhurried drink beneath the evening sky.',
  },
  {
    id: 'petit-cake', name: 'Petit Cake Studio', category: 'Dessert', rating: 4.7, price: '₹₹', distance: '2.9 km',
    tags: ['Aesthetic', 'Sweet Treat'], image: image('photo-1578985545062-69928b1d9587'),
    description: 'Tiny celebration cakes and a rotating case of delicate pastries.',
  },
  {
    id: 'cream-story', name: 'Cream Story', category: 'Dessert', rating: 4.6, price: '₹', distance: '1.8 km',
    tags: ['Budget', 'Sweet Treat'], image: image('photo-1497034825429-c343d7c6a68f'),
    description: 'A friendly scoop shop with nostalgic flavours and generous toppings.',
  },
  {
    id: 'cloud-nine', name: 'Cloud Nine Patisserie', category: 'Dessert', rating: 4.8, price: '₹₹', distance: '4.1 km',
    tags: ['Date', 'Aesthetic'], image: image('photo-1488477181946-6428a0291777'),
    description: 'A French-inspired pastry counter for one last little treat.',
  },
  {
    id: 'sunset-point', name: 'Sunset Point', category: 'Viewpoint', rating: 4.5, price: 'Free', distance: '8.2 km',
    tags: ['Scenic', 'Photo-worthy'], image: image('photo-1470770841072-f978cf4d019e'),
    description: 'An open overlook with a clear view as the city slips into evening.',
  },
  {
    id: 'skyline-terrace', name: 'Skyline Terrace', category: 'Viewpoint', rating: 4.6, price: '₹₹', distance: '5.6 km',
    tags: ['Date', 'Scenic'], image: image('photo-1519608487953-e999c86e7455'),
    description: 'A rooftop corner for a quiet drink and a view across the city.',
  },
  {
    id: 'copper-table', name: 'Copper Table', category: 'Restaurant', rating: 4.5, price: '₹₹', distance: '3.4 km',
    tags: ['Foodie', 'Friends'], image: image('photo-1414235077428-338989a2e8c0'),
    description: 'Seasonal comfort food served family-style in a warm, busy room.',
  },
  {
    id: 'aarey-trail', name: 'Aarey Green Trail', category: 'Park', rating: 4.6, price: 'Free', distance: '8.7 km',
    tags: ['Relaxing', 'Hidden Gem'], image: image('photo-1448375240586-882707db888b'),
    description: 'A leafy reset when you want the evening to move a little slower.',
  },
  {
    id: 'sky-high', name: 'Sky High Lounge', category: 'Viewpoint', rating: 4.6, price: '₹₹₹', distance: '6.5 km',
    tags: ['Date', 'Scenic'], image: image('photo-1514362545857-3bc16c4c7d1b'),
    description: 'City views, a glowing skyline and a table worth lingering at.',
  },
]

const placeById = Object.fromEntries(places.map((place) => [place.id, place]))
const stop = (id, time, travelBefore = '') => ({ ...placeById[id], time, travelBefore })

export const plans = [
  {
    id: 'easy-evening', title: 'Easy Evening', emoji: '☁️', description: 'A lovely low-effort evening, with good coffee and a dinner worth lingering over.',
    vibe: ['Relaxing', 'Foodie'], duration: '4h 20m', travelTime: '22 min', price: '₹800–₹1,200', stops: 3,
    image: image('photo-1517248135467-4c7edcad34c4'), accent: 'coral',
    places: [stop('pvr-kurla', '6:00 PM'), stop('cozy-corner', '8:30 PM', '15 min'), stop('bombay-canteen', '9:40 PM', '7 min')],
  },
  {
    id: 'main-character', title: 'Main Character Evening', emoji: '📸', description: 'A little exploring, a little food and plenty of photo-worthy moments.',
    vibe: ['Aesthetic', 'Photo-worthy', 'Hidden Gems'], duration: '4h 20m', travelTime: '35 min', price: '₹900–₹1,300', stops: 4,
    image: image('photo-1500530855697-b586d89ba3ee'), accent: 'lavender',
    places: [stop('pvr-kurla', '6:00 PM'), stop('bandra-fort', '8:30 PM', '15 min'), stop('monsoon-room', '9:15 PM', '10 min'), stop('sobo-dessert', '10:20 PM', '8 min')],
  },
  {
    id: 'foodie-evening', title: 'Foodie Evening', emoji: '🍝', description: 'Come hungry. This one is all about local flavours and a sweet finish.',
    vibe: ['Foodie', 'Fun'], duration: '4h 10m', travelTime: '28 min', price: '₹1,000–₹1,600', stops: 4,
    image: image('photo-1555939594-58d7cb561ad1'), accent: 'yellow',
    places: [stop('pvr-kurla', '6:00 PM'), stop('khau-gully', '8:20 PM', '12 min'), stop('bombay-canteen', '9:15 PM', '8 min'), stop('sobo-dessert', '10:15 PM', '8 min')],
  },
  {
    id: 'budget-evening', title: 'Budget Evening', emoji: '💸', description: 'Big evening energy, little evening spend. The best bits are free.',
    vibe: ['Budget', 'Relaxing'], duration: '3h 45m', travelTime: '18 min', price: '₹300–₹600', stops: 3,
    image: image('photo-1470252649378-9c29740c9fa8'), accent: 'yellow',
    places: [stop('pvr-kurla', '6:00 PM'), stop('khau-gully', '8:20 PM', '10 min'), stop('bkc-garden', '9:25 PM', '8 min')],
  },
  {
    id: 'date-night', title: 'Date Night', emoji: '💕', description: 'Golden-hour views, a cosy table and just enough time for dessert.',
    vibe: ['Date', 'Photo-worthy'], duration: '4h 45m', travelTime: '42 min', price: '₹1,400–₹2,200', stops: 4,
    image: image('photo-1519608487953-e999c86e7455'), accent: 'coral',
    places: [stop('pvr-kurla', '6:00 PM'), stop('bandra-fort', '8:30 PM', '18 min'), stop('pali-village', '9:20 PM', '12 min'), stop('sobo-dessert', '10:35 PM', '12 min')],
  },
  {
    id: 'night-out', title: 'Night Out', emoji: '🌙', description: 'Keep the night going with city lights, tasty bites and a lively last stop.',
    vibe: ['Night Out', 'Fun'], duration: '5h', travelTime: '36 min', price: '₹1,200–₹2,000', stops: 4,
    image: image('photo-1514933651103-005eec06c04b'), accent: 'lavender',
    places: [stop('pvr-kurla', '6:00 PM'), stop('bkc-garden', '8:30 PM', '12 min'), stop('khau-gully', '9:15 PM', '10 min'), stop('khar-social', '10:15 PM', '14 min')],
  },
  {
    id: 'hidden-gems', title: 'Hidden Gems', emoji: '💎', description: 'Skip the obvious route for leafy corners, small cafés and a slower stroll.',
    vibe: ['Hidden Gems', 'Aesthetic', 'Relaxing'], duration: '4h 35m', travelTime: '31 min', price: '₹700–₹1,200', stops: 4,
    image: image('photo-1448375240586-882707db888b'), accent: 'lavender',
    places: [stop('pvr-kurla', '6:00 PM'), stop('aarey-trail', '8:25 PM', '14 min'), stop('monsoon-room', '9:20 PM', '9 min'), stop('cozy-corner', '10:20 PM', '8 min')],
  },
  {
    id: 'worth-the-travel', title: 'Worth The Travel', emoji: '🌊', description: 'Trade the usual route for a big sky, a breezy walk and a memorable meal.',
    vibe: ['Scenic', 'Photo-worthy', 'Date'], duration: '5h 15m', travelTime: '58 min', price: '₹1,500–₹2,400', stops: 4,
    image: image('photo-1500375592092-40eb2168fd21'), accent: 'coral',
    places: [stop('pvr-kurla', '6:00 PM'), stop('mini-seashore', '8:35 PM', '22 min'), stop('sky-high', '9:30 PM', '18 min'), stop('carter-road', '10:45 PM', '18 min')],
  },
]

export const findPlan = (id) => plans.find((plan) => plan.id === id)