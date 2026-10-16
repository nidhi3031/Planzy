import { CarFront, Clock3, MapPin } from "lucide-react";

const icons = {
  Movie: "🎬",
  Café: "☕",
  Restaurant: "🍝",
  "Photo Spot": "📸",
  Park: "🌿",
  Dessert: "🍰",
  Viewpoint: "🌊",
  Nightlife: "🌙",
  Activity: "🎮",
  Shopping: "🛍️",
};

export default function Timeline({ places }) {
  return (
    <ol className="relative space-y-1">
      {places.map((place, index) => (
        <li key={`${place.id}-${index}`}>
          {index > 0 && (
            <div className="ml-[22px] flex min-h-[72px] items-center gap-3 border-l-2 border-dashed border-[#e7dcd2] pl-6">
              <span className="grid size-8 place-items-center rounded-full bg-[#fff0e9] text-[#ff7f6e]">
                <CarFront size={15} />
              </span>
              <span className="text-xs font-bold text-[#8c8178]">
                {place.travelBefore || "A short ride"} travel
              </span>
            </div>
          )}
          <div className="relative flex gap-4 rounded-[24px] bg-white p-4 shadow-[0_8px_30px_rgba(73,49,34,0.06)] sm:gap-5 sm:p-5">
            <div className="relative z-10 grid size-12 shrink-0 place-items-center rounded-2xl bg-[#fff0e9] text-xl sm:size-14 sm:text-2xl">
              {icons[place.category] || "✨"}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-extrabold text-[#ff7f6e]">
                  {place.time}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#938981]">
                  <Clock3 size={12} />
                  {index === 0 ? "Your plan" : "Suggested stop"}
                </span>
              </div>
              <h3 className="mt-1 text-base font-extrabold text-[#292522] sm:text-lg">
                {place.name}
              </h3>
              <p className="mt-1 inline-flex items-center gap-1 text-xs text-[#777]">
                <MapPin size={12} />
                {place.category} · {place.distance}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
