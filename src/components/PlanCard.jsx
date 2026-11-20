import { ArrowRight, Clock3, CarFront, Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function PlanCard({ plan, isSaved = false, onSave = () => {} }) {
  return (
    <article className="overflow-hidden rounded-[28px] bg-white shadow-lg">
      <div className="relative">
        <img
          src={plan.image}
          alt={plan.title}
          className="h-52 w-full object-cover"
        />

        <span className="absolute bottom-4 left-4 rounded-full bg-[#ffe2d8] px-3 py-1 text-xs font-bold text-[#95493d]">
          {plan.vibe.join(" . ")}
        </span>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-extrabold text-[#292522]">{plan.title}</h2>

        <p className="mt-2 text-sm text-[#777]">{plan.description}</p>

        <div className="my-5 flex flex-wrap gap-2">
          {(plan.places || []).slice(0, 3).map((places) => (
            <span
              key={places.id}
              className="rounded-full bg-[#faf5f0] px-3 py-2 text-xs"
            >
              {places.name}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 border-t border-[#f1ebe5] py-4 text-xs text-[#777]">
          <span className="flex items-center gap-2">
            <Clock3 size={16} /> {plan.duration}
          </span>
          <span className="flex items-center gap-2">
            <CarFront size={16} /> {plan.travelTime}
          </span>
          <span className="flex items-center gap-2 font-semibold text-[#ff7f6e]">
            {plan.price || plan.budget}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> {plan.stops} stops
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={`/plans/${plan.id}`}
            className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#292522] text-sm font-bold text-white"
          >
            View outing <ArrowRight size={16} />
          </Link>

          <button
            className="grid size-11 place-items-center rounded-full bg-[#f7f2ed]"
            onClick={() => onSave(plan)}
          >
            <Heart size={18} fill={isSaved ? "red" : "none"} />
          </button>
        </div>
      </div>
    </article>
  );
}
