import { useState } from "react";
import {
  ArrowRight,
  CarFront,
  Clock3,
  Heart,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const accentStyles = {
  coral: "bg-[#ffe2d8] text-[#95493d]",
  lavender: "bg-[#eee8ff] text-[#62519b]",
  yellow: "bg-[#fff0c8] text-[#765820]",
};

const categoryIcons = {
  Movie: "🎬",
  Café: "☕",
  Restaurant: "🍝",
  "Photo Spot": "📸",
  Park: "🌙",
  Dessert: "🍰",
  Viewpoint: "🌊",
  Nightlife: "✨",
  Activity: "🎮",
  Shopping: "🛍️",
};

export default function PlanCard({ plan, isSaved = false, onSave = () => {} }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <article className="group overflow-hidden rounded-[28px] bg-white shadow-[0_12px_42px_rgba(73,49,34,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(73,49,34,0.13)]">
      <Link
        to={`/plans/${plan.id}`}
        className="relative block aspect-[1.85/1] overflow-hidden bg-[#efe5dc]"
      >
        <img
          src={plan.image}
          alt=""
          onLoad={() => setImageLoaded(true)}
          className={`size-full object-cover transition duration-700 group-hover:scale-105 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#f5d8c9] via-[#e4d8ef] to-[#f3e5bd]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
        <div className="absolute inset-x-5 bottom-4 flex items-end justify-between gap-3 text-white">
          <div>
            <span
              className={`mb-2 inline-flex rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${accentStyles[plan.accent] || accentStyles.coral}`}
            >
              {plan.vibe[0]}
            </span>
            <h3 className="text-xl font-extrabold leading-tight sm:text-2xl">
              {plan.title} {plan.emoji}
            </h3>
          </div>
          <span className="mb-1 grid size-10 shrink-0 place-items-center rounded-full bg-white/20 backdrop-blur">
            <ArrowRight size={18} />
          </span>
        </div>
      </Link>
      <div className="p-5 sm:p-6">
        <p className="line-clamp-2 min-h-10 text-sm leading-5 text-[#777]">
          {plan.description}
        </p>
        <div className="my-5 flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          {plan.places.map((place, index) => (
            <div
              key={`${place.id}-${index}`}
              className="flex shrink-0 items-center gap-2"
            >
              {index > 0 && <span className="text-[#c7bcb3]">·</span>}
              <span className="rounded-full bg-[#faf5f0] px-3 py-2 text-[11px] font-bold text-[#554d47]">
                {categoryIcons[place.category] || "✨"}{" "}
                {place.category === "Movie" ? "Movie" : place.name}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-y-3 border-t border-[#f1ebe5] pt-4 text-[11px] font-semibold text-[#777] sm:grid-cols-4">
          <span className="flex items-center gap-1.5">
            <Clock3 size={14} className="text-[#ff7f6e]" />
            {plan.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <CarFront size={14} className="text-[#8c75d2]" />
            {plan.travelTime}
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles size={14} className="text-[#d4a536]" />
            {plan.price}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-[#75a78a]" />
            {plan.stops} stops
          </span>
        </div>
        <div className="mt-5 flex items-center gap-2">
          <Link
            to={`/plans/${plan.id}`}
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#292522] px-4 text-xs font-extrabold text-white transition hover:bg-[#443b36]"
          >
            View outing <ArrowRight size={14} />
          </Link>
          <button
            type="button"
            onClick={() => onSave(plan)}
            aria-label={
              isSaved
                ? `Remove ${plan.title} from saved plans`
                : `Save ${plan.title}`
            }
            aria-pressed={isSaved}
            className={`grid size-11 shrink-0 place-items-center rounded-full transition ${isSaved ? "bg-[#ffe3df] text-[#e66759]" : "bg-[#f7f2ed] text-[#625a54] hover:bg-[#ffe3df] hover:text-[#e66759]"}`}
          >
            <Heart size={18} fill={isSaved ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
    </article>
  );
}
