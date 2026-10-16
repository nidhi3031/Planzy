import { ArrowLeft, Pencil, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlanCard from "../components/PlanCard";
import { plans } from "../data/mockData";

export default function Results() {
  const [selectedVibe, setSelectedVibe] = useState("All");
  return (
    <>
      <Navbar />

      <main className="mx-auto min-h-[70vh] max-w-7xl px-5 pb-10 pt-9 sm:px-8 sm:pt-14">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#81756d] hover:text-[#ff7f6e]"
        >
          <ArrowLeft size={15} />
          Back to your plan
        </Link>

        {/* Page heading */}
        <div className="mt-7">
          <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#ff7f6e]">
            The rest of your day, sorted
          </p>

          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            We found {plans.length} ways to spend your evening ✨
          </h1>

          <p className="mt-2 text-sm text-[#777]">
            Based on your plan, vibe, budget and travel time.
          </p>
        </div>

        {/* Existing plan */}
        <section className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-[22px] bg-[#fff0e9] p-4 sm:px-5">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl bg-white text-xl">
              🎬
            </span>

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#a66b61]">
                Already on your calendar
              </p>

              <p className="mt-1 text-sm font-extrabold">
                Movie at PVR Kurla
                <span className="font-semibold text-[#796e66]"> · 18:00</span>
              </p>
            </div>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-extrabold text-[#63584f] hover:bg-[#fffaf6]"
          >
            <Pencil size={13} />
            Edit plan
          </Link>
        </section>

        {/* Vibe chips: UI only */}
        <div className="mt-7 flex flex-wrap gap-2">
          {["All", "Aesthetic", "Chill", "Fun", "Romantic", "Adventurous"].map(
            (vibe, index) => (
              <button
                key={vibe}
                type="button"
                onClick={() => setSelectedVibe(vibe)}
                className={`rounded-full border px-4 py-2 text-xs font-bold ${
                  index === 0
                    ? "border-[#292522] bg-[#292522] text-white"
                    : "border-[#f1ebe5] bg-white text-[#716963]"
                }`}
              >
                {vibe}
              </button>
            ),
          )}
        </div>

        {/* Plans heading */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs font-bold text-[#867b73]">
            {plans.length} hand-picked itineraries
          </p>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#948980]">
            <Sparkles size={13} className="text-[#d3a739]" />
            Made around your day
          </span>
        </div>

        {/* Plan cards */}
        <div className="mt-5 grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className="min-w-0 animate-slide-up"
              style={{
                animationDelay: `${index * 45}ms`,
              }}
            >
              <PlanCard plan={plan} isSaved={false} onSave={() => {}} />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
