import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import NotFound from "./pages/NotFound";
import PlanDetails from "./pages/PlanDetails";
import Results from "./pages/Results";
import SavedPlans from "./pages/SavedPlans";

function App() {
  const [savedPlanIds, setSavedPlanIds] = useState(() => {
    try {
      const stored = JSON.parse(
        window.localStorage.getItem("afterplan:saved") || "[]",
      );
      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(
      "afterplan:saved",
      JSON.stringify(savedPlanIds),
    );
  }, [savedPlanIds]);

  const toggleSavedPlan = (plan) => {
    setSavedPlanIds((current) =>
      current.includes(plan.id)
        ? current.filter((id) => id !== plan.id)
        : [...current, plan.id],
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home savedPlanIds={savedPlanIds} onToggleSaved={toggleSavedPlan} />
          }
        />
        <Route
          path="/results"
          element={
            <Results
              savedPlanIds={savedPlanIds}
              onToggleSaved={toggleSavedPlan}
            />
          }
        />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route
          path="/plans/:id"
          element={
            <PlanDetails
              savedPlanIds={savedPlanIds}
              onToggleSaved={toggleSavedPlan}
            />
          }
        />
        <Route
          path="/saved"
          element={
            <SavedPlans
              savedPlanIds={savedPlanIds}
              onToggleSaved={toggleSavedPlan}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
