import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import Button from "./Button";
import PlaceCard from "./PlaceCard";

export default function ReplaceStopModal({
  isOpen,
  currentPlace,
  alternatives,
  onClose,
  onReplace,
}) {
  const [selectedPlace, setSelectedPlace] = useState(null);
  useEffect(() => {
    if (isOpen) setSelectedPlace(alternatives[0] || null);
  }, [isOpen, currentPlace?.id, alternatives]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !currentPlace) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#211b18]/45 p-0 backdrop-blur-sm sm:items-center sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="replace-title"
        className="animate-slide-up max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-[28px] bg-[#fff9f5] p-5 shadow-2xl sm:rounded-[30px] sm:p-8"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#ff7f6e]">
              A little itinerary remix
            </p>
            <h2 id="replace-title" className="mt-2 text-2xl font-extrabold">
              Let's switch this up ✨
            </h2>
            <p className="mt-2 text-sm text-[#777]">
              Replacing{" "}
              <strong className="text-[#514943]">{currentPlace.name}</strong>
            </p>
          </div>
          <button
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
            className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#514943] hover:bg-[#ffe9df]"
          >
            <X size={18} />
          </button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {alternatives.map((place) => (
            <PlaceCard
              key={place.id}
              place={place}
              selected={selectedPlace?.id === place.id}
              onClick={setSelectedPlace}
            />
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Button
            onClick={() => {
              if (selectedPlace) onReplace(selectedPlace);
              onClose();
            }}
            disabled={!selectedPlace}
            className="w-full sm:w-auto"
          >
            Replace Stop <Check size={16} />
          </Button>
        </div>
      </section>
    </div>
  );
}
