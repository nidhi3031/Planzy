import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlannerCard = () => {
  const navigate = useNavigate();
  const [location, setlocation] = React.useState("PVR Kurla");
  const [activity, setActivity] = React.useState("Movie");
  const [date, setDate] = React.useState("2026-10-13");
  const [time, setTime] = React.useState("18:00");
  const [selectedVibes, setSelectedVibes] = useState(["Aesthetic"]);
  const [travelTime, setTravelTime] = React.useState("30 mins");
  const [budget, setBudget] = React.useState("$$");
  const handleSubmit = () => {
    const plannerData = {
      location,
      activity,
      date,
      time,
      vibe: selectedVibes[0] || "All",
      travelTime,
      budget,
    };
    navigate("/results", {
      state: { planner: plannerData },
    });
  };

  const toggleVibe = (vibe) => {
    if (selectedVibes.includes(vibe)) {
      setSelectedVibes((currentVibes) =>
        currentVibes.filter((item) => item !== vibe),
      );
    } else if (selectedVibes.length < 3) {
      setSelectedVibes((currentVibes) => [...currentVibes, vibe]);
    }
  };

  return (
    <section
      id="planner-card"
      className="scroll-mt-28 rounded-[30px] bg-white p-5 shadow-[0_20px_70px_rgba(83,55,39,0.09)] sm:p-8"
    >
      {/* Heading */}
      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-[#ff7f6e]">
            ✨ YOUR STARTING POINT
          </p>

          <h2 className="text-2xl font-extrabold text-[#38322f] sm:text-3xl">
            What's already on your plan?
          </h2>

          <p className="mt-2 text-sm text-[#777]">
            Give us one plan. We'll figure out the rest.
          </p>
        </div>

        <span className="hidden rounded-2xl bg-[#fff0e9] p-4 text-2xl sm:grid">
          🗓️
        </span>
      </div>

      <form className="space-y-6">
        {/* Activity */}
        <div>
          <label className="mb-2 block text-sm font-bold text-[#38322f]">
            Activity
          </label>

          <select
            className="h-12 w-full rounded-2xl border border-[#f1ebe5] bg-[#fff7f1] px-4 text-sm outline-none focus:ring-2 focus:ring-[#ffb8a9]"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          >
            <option>Movie</option>
            <option>Shopping</option>
            <option>Restaurant</option>
            <option>Concert</option>
            <option>Other</option>
          </select>
        </div>

        {/* Location, Date and Time */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <label className="mb-2 block text-sm font-bold text-[#38322f]">
              Location
            </label>
            <input
              type="text"
              placeholder="📍 Enter a place"
              value={location}
              onChange={(e) => setlocation(e.target.value)}
              className="h-12 w-full rounded-2xl border border-[#f1ebe5] bg-[#fff7f1] px-4 text-sm outline-none focus:ring-2 focus:ring-[#ffb8a9]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#38322f]">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="h-12 w-full min-w-0 rounded-2xl border border-[#f1ebe5] bg-[#fff7f1] px-3 text-sm outline-none focus:ring-2 focus:ring-[#ffb8a9]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#38322f]">
              Time
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="h-12 w-full min-w-0 rounded-2xl border border-[#f1ebe5] bg-[#fff7f1] px-3 text-sm outline-none focus:ring-2 focus:ring-[#ffb8a9]"
            />
          </div>
        </div>

        {/* Vibe */}
        <fieldset>
          <legend className="mb-3 text-sm font-bold text-[#38322f]">
            Vibe
          </legend>

          <div className="flex flex-wrap gap-2">
            {["Aesthetic", "Chill", "Fun", "Romantic", "Adventurous"].map(
              (vibe, index) => (
                <label
                  key={vibe}
                  className={`cursor-pointer rounded-full border px-4 py-3 text-sm ${
                    selectedVibes.includes(vibe)
                      ? "border-[#ff7f6e] bg-[#ff7f6e] text-white"
                      : "border-[#f1ebe5] bg-white text-[#38322f] hover:bg-[#fff7f1]"
                  }`}
                >
                  <input
                    type="checkbox"
                    value={vibe}
                    checked={selectedVibes.includes(vibe)}
                    onChange={() => toggleVibe(vibe)}
                    className="sr-only"
                  />
                  {vibe}
                </label>
              ),
            )}
          </div>
        </fieldset>

        {/* Travel and Budget */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-[#38322f]">
              Travel time
            </label>

            <select
              value={travelTime}
              onChange={(e) => setTravelTime(e.target.value)}
              className="h-12 w-full rounded-2xl border border-[#f1ebe5] bg-[#fff7f1] px-4 text-sm outline-none focus:ring-2 focus:ring-[#ffb8a9]"
            >
              <option>15 min</option>
              <option>30 min</option>
              <option>45 min</option>
              <option>60 min</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#38322f]">
              Budget
            </label>

            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="h-12 w-full rounded-2xl border border-[#f1ebe5] bg-[#fff7f1] px-4 text-sm outline-none focus:ring-2 focus:ring-[#ffb8a9]"
            >
              <option value="₹">₹ (₹100–₹500)</option>
              <option value="₹₹">₹₹ (₹500–₹1,200)</option>
              <option value="₹₹₹">₹₹₹ (₹1,200–₹2,500)</option>
              <option value="₹₹₹₹">₹₹₹₹ (₹2,500+)</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <div className="flex flex-col gap-3 border-t border-[#f1ebe5] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#8a817a]">
            A few good options, made around your plan.
          </p>

          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#ff7f6e] px-6 py-3 font-bold text-white transition hover:bg-[#f36e5e]"
          >
            ✨ Build My Outing
          </button>
        </div>
      </form>
    </section>
  );
};

export default PlannerCard;
