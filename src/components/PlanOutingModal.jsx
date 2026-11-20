import { ArrowRight, MapPin, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlanOutingModal({ isOpen, onClose, onPlanSubmit }) {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      navigate("/results", {
        state: {
          planner: {
            location: location.trim(),
            activity: "Browse",
            vibe: "All",
            time: "Now",
          },
        },
      });
      setLocation("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-md rounded-[32px] bg-white p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-1 hover:bg-[#f1ebe5] rounded-full"
        >
          <X size={20} className="text-[#999]" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-[#292522]">
            Plan Your Outing
          </h2>
          <p className="mt-2 text-sm text-[#777]">
            Tell us where you are, and we'll find amazing places nearby.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label className="block text-xs font-bold text-[#5a514b] mb-2">
              Your Location
            </label>
            <div className="flex items-center rounded-full border-2 border-[#f1ebe5] bg-white px-4 py-3 focus-within:border-[#ff7f6e]">
              <MapPin size={18} className="text-[#ff7f6e]" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Bandra, Mumbai"
                className="ml-3 w-full bg-transparent text-sm font-medium outline-none placeholder:text-[#bbb]"
                autoFocus
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!location.trim()}
            className="mt-6 w-full flex items-center justify-center gap-2 rounded-full bg-[#292522] px-6 py-3 text-sm font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3d2c27]"
          >
            Find Places <ArrowRight size={16} />
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-[#999]">
          🎉 Perfect spots are waiting for you!
        </p>
      </div>
    </div>
  );
}
