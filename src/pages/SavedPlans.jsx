import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PlanCard from "../components/PlanCard";
import { plans } from "../data/mockData";

export default function SavedPlans({ savedPlanIds, onToggleSaved }) {
  const savedPlans = plans.filter((plan) => savedPlanIds.includes(plan.id));
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-[65vh] max-w-7xl px-5 pb-12 pt-10 sm:px-8 sm:pt-16">
        <Link
          to="/"
          className="text-xs font-bold text-[#847970] hover:text-[#ff7f6e]"
        >
          ← Back to exploring
        </Link>
        <div className="mt-7 flex items-end justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#ff7f6e]">
              <Heart size={14} /> Kept close
            </p>
            <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Your saved plans ♡
            </h1>
            <p className="mt-2 text-sm text-[#777]">
              Your future good days, all in one place.
            </p>
          </div>
          {savedPlans.length > 0 && (
            <span className="rounded-full bg-white px-4 py-2 text-xs font-extrabold text-[#7c7067] shadow-sm">
              {savedPlans.length}{" "}
              {savedPlans.length === 1 ? "outing" : "outings"}
            </span>
          )}
        </div>
        {savedPlans.length ? (
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {savedPlans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                isSaved
                onSave={onToggleSaved}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10">
            <EmptyState />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
