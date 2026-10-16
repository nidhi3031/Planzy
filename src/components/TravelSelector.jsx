import { travelOptions } from "../data/mockData";

export default function TravelSelector({ value, onChange }) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-bold text-[#38322f]">
        How far are you willing to go?
      </legend>
      <div className="flex flex-wrap gap-2">
        {travelOptions.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={value === option}
            onClick={() => onChange(option)}
            className={`min-h-10 rounded-full px-4 py-2 text-xs font-bold transition ${value === option ? "bg-[#ffd88a] text-[#493813]" : "bg-[#f5f0eb] text-[#615a55] hover:bg-[#ece4dc]"}`}
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
