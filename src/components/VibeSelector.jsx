import { vibes } from "../data/mockData";

export default function VibeSelector({ value, onChange }) {
  const toggle = (vibe) =>
    onChange(
      value.includes(vibe)
        ? value.filter((item) => item !== vibe)
        : [...value, vibe],
    );
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-bold text-[#38322f]">
        What's your vibe?
      </legend>
      <div className="flex flex-wrap gap-2">
        {vibes.map(({ label, icon }) => {
          const selected = value.includes(label);
          return (
            <button
              key={label}
              type="button"
              aria-pressed={selected}
              onClick={() => toggle(label)}
              className={`min-h-10 rounded-full px-4 py-2 text-xs font-bold transition hover:-translate-y-0.5 ${selected ? "bg-[#b8a4ff] text-[#2b2146]" : "bg-[#f5f0eb] text-[#615a55] hover:bg-[#ece4dc]"}`}
            >
              <span aria-hidden="true">{icon}</span> {label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
