import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CarFront,
  Clock3,
  Heart,
  MapPin,
  Share2,
  Sparkles,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PlaceCard from "../components/PlaceCard";
import ReplaceStopModal from "../components/ReplaceStopModal";
import Timeline from "../components/Timeline";
import { findPlan, places } from "../data/mockData";

export default function PlanDetails({ savedPlanIds, onToggleSaved }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const originalPlan = findPlan(id);
  const [itinerary, setItinerary] = useState(originalPlan?.places || []);
  const [modalStop, setModalStop] = useState(null);
  const [shareMessage, setShareMessage] = useState("");

  if (!originalPlan)
    return (
      <>
        <Navbar />
        <main className="mx-auto min-h-[55vh] max-w-7xl px-5 py-20 text-center">
          <p className="text-5xl">🧭</p>
          <h1 className="mt-4 text-3xl font-extrabold">
            That outing wandered off.
          </h1>
          <Button to="/results" className="mt-6">
            Back to ideas
          </Button>
        </main>
        <Footer />
      </>
    );

  const isSaved = savedPlanIds.includes(originalPlan.id);
  const alternatives = modalStop
    ? places
        .filter(
          (place) =>
            place.category === modalStop.category && place.id !== modalStop.id,
        )
        .slice(0, 3)
    : [];
  const replacePlace = (replacement) =>
    setItinerary((current) =>
      current.map((place) =>
        place.id === modalStop.id
          ? {
              ...replacement,
              time: place.time,
              travelBefore: place.travelBefore,
            }
          : place,
      ),
    );
  const sharePlan = async () => {
    const shareData = {
      title: `AfterPlan · ${originalPlan.title}`,
      text: originalPlan.description,
      url: window.location.href,
    };
    try {
      if (navigator.share) await navigator.share(shareData);
      else {
        await navigator.clipboard.writeText(window.location.href);
        setShareMessage("Link copied!");
      }
    } catch {
      setShareMessage("Sharing is unavailable right now.");
    }
    window.setTimeout(() => setShareMessage(""), 2400);
  };

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8 sm:pt-12">
        <Link
          to="/results"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#81756d] hover:text-[#ff7f6e]"
        >
          <ArrowLeft size={15} /> Back to ideas
        </Link>
        <section className="relative mt-6 overflow-hidden rounded-4xl bg-[#e6d6ca]">
          <img
            src={originalPlan.image}
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#211b18]/80 via-[#211b18]/55 to-transparent" />
          <div className="relative max-w-3xl px-6 py-12 text-white sm:px-10 sm:py-16">
            <span className="rounded-full bg-white/20 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur">
              {originalPlan.vibe.join(" · ")}
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
              {originalPlan.title} {originalPlan.emoji}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
              {originalPlan.description}
            </p>
            <div className="mt-7 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                [<Clock3 size={15} />, originalPlan.duration],
                [<CarFront size={15} />, `${originalPlan.travelTime} travel`],
                [<Sparkles size={15} />, originalPlan.price],
                [<MapPin size={15} />, `${originalPlan.stops} stops`],
              ].map(([icon, label]) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-2xl bg-white/15 px-3 py-3 text-[11px] font-bold backdrop-blur"
                >
                  <span className="text-[#ffd88a]">{icon}</span>
                  {label}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button
                variant="secondary"
                onClick={() => onToggleSaved(originalPlan)}
              >
                <Heart size={15} fill={isSaved ? "currentColor" : "none"} />
                {isSaved ? "Saved" : "Save Plan"}
              </Button>
              <Button variant="secondary" onClick={sharePlan}>
                <Share2 size={15} />
                Share
              </Button>
            </div>
          </div>
        </section>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <section>
            <div className="mb-5 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#ff7f6e]">
                  The evening, step by step
                </p>
                <h2 className="mt-2 text-2xl font-extrabold">
                  Your little itinerary
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setModalStop(itinerary[1] || itinerary[0])}
                className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full bg-[#eee8ff] px-4 text-xs font-extrabold text-[#5f4a9f] transition hover:bg-[#e4dbff]"
              >
                <Sparkles size={14} /> Change a stop
              </button>
            </div>
            {shareMessage && (
              <p
                role="status"
                className="mb-3 text-xs font-bold text-[#5f4a9f]"
              >
                {shareMessage}
              </p>
            )}
            <Timeline places={itinerary} />
          </section>
          <section>
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#ff7f6e]">
              Good places, good pacing
            </p>
            <h2 className="mt-2 text-2xl font-extrabold">
              Places you'll visit
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {itinerary.slice(1).map((place, index) => (
                <div key={`${place.id}-${index}`}>
                  <PlaceCard place={place} />
                  <button
                    type="button"
                    onClick={() => setModalStop(place)}
                    className="mt-2 px-2 text-[11px] font-extrabold text-[#8d73d0] hover:text-[#6a55ab]"
                  >
                    Swap this stop <ArrowUpRight size={12} className="inline" />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-[25px] bg-[#fff0e9] p-5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#a56358]">
                Want to change something?
              </p>
              <p className="mt-2 text-sm text-[#74635d]">
                Make this outing feel a little more like you.
              </p>
              <button
                type="button"
                onClick={() => setModalStop(itinerary[1] || itinerary[0])}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-extrabold text-[#514943] shadow-sm"
              >
                <Sparkles size={14} className="text-[#ff7f6e]" /> Make It
                Different ✨
              </button>
            </div>
          </section>
        </div>
        <Link
          to="/results"
          className="mt-10 inline-flex items-center gap-2 text-sm font-extrabold text-[#766b63] hover:text-[#ff7f6e]"
        >
          <ArrowLeft size={15} /> Browse more outings
        </Link>
      </main>
      <Footer />
      <ReplaceStopModal
        isOpen={Boolean(modalStop)}
        currentPlace={modalStop}
        alternatives={alternatives}
        onClose={() => setModalStop(null)}
        onReplace={replacePlace}
      />
    </>
  );
}
