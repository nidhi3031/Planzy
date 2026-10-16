import { vibes } from "../data/mockData";

const filters = [
  { label: "All", icon: "" },
  ...vibes.filter(({ label }) =>
    [
      "Aesthetic",
      "Photo-worthy",
      "Foodie",
      "Budget",
      "Date",
      "Night Out",
      "Hidden Gems",
    ].includes(label),
  ),
];

export default function FilterChips({ value, onChange }) {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]"
      role="group"
      aria-label="Filter outing ideas"
    >
      {filters.map(({ label, icon }) => (
        <button
          key={label}
          type="button"
          aria-pressed={value === label}
          onClick={() => onChange(label)}
          className={`min-h-10 shrink-0 rounded-full px-4 text-xs font-extrabold transition ${value === label ? "bg-[#ff7f6e] text-white shadow-[0_6px_18px_rgba(255,127,110,0.24)]" : "bg-white text-[#6d625b] hover:bg-[#fff0e9]"}`}
        >
          {icon && <span aria-hidden="true">{icon} </span>}
          {label}
        </button>
      ))}
    </div>
  );
}
