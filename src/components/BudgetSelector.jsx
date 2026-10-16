import { budgets } from "../data/mockData";

export default function BudgetSelector({ value, onChange }) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-bold text-[#38322f]">
        What's your budget?
      </legend>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {budgets.map((budget) => (
          <button
            key={budget.value}
            type="button"
            aria-pressed={value === budget.value}
            onClick={() => onChange(budget.value)}
            className={`rounded-2xl px-3 py-3 text-left transition ${value === budget.value ? "bg-[#ffe7df] text-[#8b3f35] ring-1 ring-[#ffb8a9]" : "bg-[#fff7f1] text-[#504944] hover:bg-[#fff0e9]"}`}
          >
            <span className="block font-extrabold">{budget.value}</span>
            <span className="mt-1 block text-[10px] font-medium opacity-75">
              {budget.description}
            </span>
          </button>
        ))}
      </div>
    </fieldset>
  );
}
