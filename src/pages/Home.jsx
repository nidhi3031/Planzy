import {
  ArrowDown,
  ArrowRight,
  Camera,
  Heart,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PlanCard from "../components/PlanCard";
import PlanOutingModal from "../components/PlanOutingModal";
import PlannerCard from "../components/PlannerCard";
import { plans } from "../data/mockData";

const photo = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

function HeroCollage() {
  return (
    <div className="relative mx-auto h-[470px] w-full max-w-[570px] sm:h-[550px]">
      <div className="absolute inset-x-7 top-5 h-[410px] rotate-[-4deg] overflow-hidden rounded-[38px] bg-[#e8d3c5] shadow-[0_25px_70px_rgba(79,50,34,0.18)] sm:inset-x-10 sm:h-[485px]">
        <img
          src={photo("photo-1533105079780-92b9be482077")}
          alt="A sunny coast waiting to be explored"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#231b19]/50 via-transparent to-white/10" />
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
            A little more than the plan
          </p>
          <p className="mt-2 text-2xl font-extrabold">Make a day of it.</p>
        </div>
      </div>
      <div className="float-soft absolute left-0 top-20 rounded-[22px] bg-white p-4 shadow-[0_16px_40px_rgba(63,42,30,0.16)] sm:left-2">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-[#ffe9df] text-xl">
            🎬
          </span>
          <div>
            <p className="text-xs font-extrabold">Movie</p>
            <p className="mt-0.5 text-[10px] text-[#888078]">
              PVR Kurla · 6:00 PM
            </p>
          </div>
        </div>
      </div>
      <div className="float-soft-delayed absolute right-0 top-[190px] rounded-[22px] bg-white p-3.5 shadow-[0_16px_40px_rgba(63,42,30,0.16)] sm:right-0">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl bg-[#eee8ff] text-xl">
            📸
          </span>
          <div>
            <p className="text-xs font-extrabold">Golden hour spot</p>
            <p className="mt-0.5 text-[10px] text-[#888078]">
              8:30 PM · 15 min away
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-4 w-[min(228px,calc(100vw-4rem))] rounded-[24px] border border-white/80 bg-[#fffdfb]/95 p-4 shadow-[0_18px_50px_rgba(63,42,30,0.17)] backdrop-blur sm:bottom-0 sm:left-10">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-extrabold">Your evening, flowing</p>
          <span className="grid size-7 place-items-center rounded-full bg-[#fff0d6] text-[#a57925]">
            <Sparkles size={14} />
          </span>
        </div>
        <div className="space-y-2.5">
          {[
            ["☕", "A tiny café break"],
            ["🍝", "Dinner worth the trip"],
          ].map(([icon, label], index) => (
            <div key={label} className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-xl bg-[#f7f1eb]">
                {icon}
              </span>
              <span className="text-[11px] font-bold text-[#5a514b]">
                {label}
              </span>
              {index === 0 && <span className="ml-auto text-[#c4b8ae">↓</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-4 top-7 grid size-14 place-items-center rounded-full bg-[#ffd88a] text-[#5d4516] shadow-lg sm:right-7">
        <Heart size={21} fill="currentColor" />
      </div>
      <span className="absolute bottom-28 right-4 grid size-12 place-items-center rounded-full bg-[#b8a4ff] text-white shadow-lg sm:bottom-24 sm:right-5">
        <Camera size={20} />
      </span>
    </div>
  );
}

export default function Home({ savedPlanIds, onToggleSaved }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-5 px-5 pb-12 pt-10 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[0.94fr_1.06fr] lg:gap-3 lg:pt-12">
          <div className="relative z-10 animate-slide-up pb-4 lg:pb-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#80736a] shadow-sm">
              <span className="size-2 rounded-full bg-[#8dbb8f]" />
              Your plans, with a little extra
            </span>
            <h1 className="mt-6 max-w-[660px] text-[2.7rem] font-extrabold leading-[1.02] text-[#292522] sm:text-[3.75rem] lg:text-[5rem]">
              You already have plans.
              <span className="mt-2 block text-[#ff7f6e]">
                We'll plan the rest.{" "}
                <span className="whitespace-nowrap">✨</span>
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#746a63] sm:text-lg sm:leading-8">
              Tell us where you're going and we'll turn one plan into an entire
              day worth remembering.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/results">
                Build My Outing <Sparkles size={16} />
              </Button>
              <Button to="#examples" variant="secondary">
                Explore Ideas <ArrowDown size={15} />
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "photo-1534528741775-53994a69daeb",
                  "photo-1500648767791-00dcc994a43e",
                  "photo-1531123897727-8f129e1688ce",
                ].map((img) => (
                  <img
                    key={img}
                    src={photo(img, 80)}
                    alt=""
                    className="size-8 rounded-full border-2 border-[#fff9f5] object-cover"
                  />
                ))}
              </div>
              <p className="text-xs font-semibold text-[#877c74]">
                Made for the “what next?” moment
              </p>
            </div>
          </div>
          <HeroCollage />
        </section>

        <section className="mx-auto max-w-7xl scroll-mt-28 px-5 py-8 sm:px-8 sm:py-14">
          <PlannerCard />
        </section>

        <section
          id="examples"
          className="scroll-mt-24 bg-[#f7efe7] px-5 py-16 sm:px-8 sm:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#ff7f6e]">
                  One starting point, many stories
                </p>
                <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
                  One plan. So many ways to spend the day.
                </h2>
                <p className="mt-3 text-sm text-[#777]">
                  Same starting point. Completely different experiences.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {/* Plan Outing CTA Card */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#ff7f6e] to-[#ff6a56] shadow-lg cursor-pointer hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="relative h-52 bg-gradient-to-t from-[#ff7f6e]/40 to-transparent flex items-center justify-center">
                  <span className="text-6xl">🗺️</span>
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-extrabold text-white">
                    Plan Your Outing
                  </h2>

                  <p className="mt-2 text-sm text-white/90">
                    Tell us your location and find amazing places nearby, personalized for you.
                  </p>

                  <div className="my-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/20 px-3 py-2 text-xs font-bold text-white">
                      📍 Your Location
                    </span>
                    <span className="rounded-full bg-white/20 px-3 py-2 text-xs font-bold text-white">
                      ✨ Real Prices
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                    <button className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-white text-sm font-bold text-[#ff7f6e]">
                      Get Started <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sample Plans */}
              {plans.slice(0, 2).map((plan) => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  isSaved={savedPlanIds.includes(plan.id)}
                  onSave={onToggleSaved}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#8f78d4]">
                Easy as one, two, yay
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                A good day takes three little steps.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  number: "01",
                  icon: "📍",
                  title: "Tell us your plan",
                  copy: "Movie, shopping, event or anything else.",
                  color: "bg-[#ffe7df]",
                },
                {
                  number: "02",
                  icon: "✨",
                  title: "Pick your vibe",
                  copy: "Aesthetic, foodie, romantic, budget or adventurous.",
                  color: "bg-[#eee8ff]",
                },
                {
                  number: "03",
                  icon: "🗺️",
                  title: "Get your whole outing",
                  copy: "We'll build multiple ways to spend the rest of your day.",
                  color: "bg-[#fff0ce]",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="rounded-[28px] bg-white p-7 shadow-[0_10px_36px_rgba(73,49,34,0.06)] transition hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-extrabold text-[#dfd4cc]">
                      {step.number}
                    </span>
                    <span
                      className={`grid size-14 place-items-center rounded-[20px] text-2xl ${step.color}`}
                    >
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-extrabold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#777]">
                    {step.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-[#b8a4ff] px-6 py-12 text-center sm:px-12 sm:py-16">
            <span className="absolute -left-9 -top-12 size-44 rounded-full border-[22px] border-white/15" />
            <span className="absolute -bottom-16 -right-7 size-56 rounded-full border-[30px] border-[#ffd88a]/40" />
            <div className="relative">
              <p className="text-xs font-extrabold uppercase tracking-[0.17em] text-[#51457e]">
                Your next good day is right here
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-[#29203f] sm:text-5xl">
                So... what's already on your plan? ✨
              </h2>
              <p className="mt-4 text-sm text-[#554b79] sm:text-base">
                Give us one plan. We'll give you the rest of the day.
              </p>
              <Button to="/results" variant="secondary" className="mt-7">
                Build My Outing <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <PlanOutingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onPlanSubmit={() => setIsModalOpen(false)}
      />
    </>
  );
}
