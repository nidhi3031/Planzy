import { MapPin } from "lucide-react";

export default function LocationInput({ value, onChange }) {
  return (
    <label
      className="block text-sm font-bold text-[#38322f]"
      htmlFor="plan-location"
    >
      Where are you going?
      <span className="mt-2 flex h-12 items-center gap-3 rounded-2xl bg-[#fff7f1] px-4 text-[#ff7f6e] transition focus-within:ring-2 focus-within:ring-[#ffb8a9]">
        <MapPin size={18} aria-hidden="true" />
        <input
          id="plan-location"
          className="min-w-0 flex-1 bg-transparent text-sm font-medium text-[#252525] outline-none placeholder:text-[#a49a92]"
          placeholder="PVR Kurla"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required
        />
      </span>
    </label>
  );
}
