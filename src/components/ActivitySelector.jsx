import { activities } from "../data/mockData";

export default function ActivitySelector({ value, onChange }) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-bold text-[#38322f]">
        What's already on your plan?
      </legend>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {activities.map((activity) => {
          const selected = value === activity.label;
          return (
            <button
              key={activity.label}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(activity.label)}
              className={`flex min-h-12 items-center gap-2 rounded-2xl px-3 py-2 text-left text-sm font-semibold transition hover:-translate-y-0.5 ${selected ? "bg-[#292522] text-white shadow-md" : "bg-[#fff7f1] text-[#504944] hover:bg-[#ffe9df]"}`}
            >
              <span aria-hidden="true" className="text-lg">
                {activity.icon}
              </span>
              {activity.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
