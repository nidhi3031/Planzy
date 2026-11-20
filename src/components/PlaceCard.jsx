import { MapPin, Star } from "lucide-react";

export default function PlaceCard({ place, onClick, selected = false }) {
  const content = (
    <>
      <div className="relative aspect-[1.55/1] overflow-hidden bg-[#efe5dc]">
        <img
          src={place.image}
          alt={place.name}
          className="size-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold text-[#514943] backdrop-blur">
          {place.category}
        </span>
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1.5 text-[10px] font-extrabold text-[#514943]">
          <Star size={12} className="fill-[#f5bd50] text-[#f5bd50]" />
          {place.rating}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-extrabold text-[#292522]">{place.name}</h3>
          <span className="shrink-0 text-xs font-bold text-[#766c64]">
            {place.price}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#777]">
          {place.description}
        </p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {(place.tags || []).slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#f5f0eb] px-2.5 py-1 text-[9px] font-bold text-[#766c64]"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 text-[10px] font-semibold text-[#8b8179]">
            <MapPin size={12} />
            {place.distance}
          </span>
        </div>
      </div>
    </>
  );

  if (onClick)
    return (
      <button
        type="button"
        aria-pressed={selected}
        onClick={() => onClick(place)}
        className={`group block w-full overflow-hidden rounded-[22px] bg-white text-left shadow-[0_8px_30px_rgba(73,49,34,0.08)] transition hover:-translate-y-1 ${selected ? "ring-2 ring-[#ff7f6e]" : ""}`}
      >
        {content}
      </button>
    );
  return (
    <article className="group overflow-hidden rounded-[22px] bg-white shadow-[0_8px_30px_rgba(73,49,34,0.08)] transition hover:-translate-y-1">
      {content}
    </article>
  );
}
