import { ArrowRight, MapPin, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PlanOutingModal from "../components/PlanOutingModal";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Start with a location",
    description:
      "Tell us where you're going. Enter a location in the quick planner, or add your activity and outing details on the home page.",
    color: "bg-[#ffe7df] text-[#e96f5e]",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Make it yours",
    description:
      "Use the home page planner to choose a vibe and budget, along with your date, time and preferred travel time.",
    color: "bg-[#eee8ff] text-[#8069c4]",
  },
  {
    number: "03",
    icon: Search,
    title: "Explore nearby places",
    description:
      "Browse places near your location and use the vibe filters to discover ideas for the rest of your day.",
    color: "bg-[#fff0ce] text-[#a57925]",
  },
];

export default function HowItWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eee8ff] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#8069c4]">
              <Sparkles size={14} /> Easy as one, two, yay
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
              One plan is all you need.
              <span className="block text-[#ff7f6e]">We'll help with the rest.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#746a63] sm:text-lg">
              From your starting point to nearby places worth exploring, here's
              how to find a little more for your day.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {steps.map(({ number, icon: Icon, title, description, color }) => (
              <article
                key={number}
                className="rounded-[28px] bg-white p-7 shadow-[0_10px_36px_rgba(73,49,34,0.06)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-extrabold text-[#dfd4cc]">{number}</span>
                  <span className={`grid size-14 place-items-center rounded-[20px] ${color}`}>
                    <Icon size={24} />
                  </span>
                </div>
                <h2 className="mt-8 text-xl font-extrabold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#777]">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 pb-8 sm:px-8">
          <div className="mx-auto max-w-7xl rounded-[34px] bg-[#b8a4ff] px-6 py-12 text-center sm:px-12 sm:py-16">
            <p className="text-xs font-extrabold uppercase tracking-[0.17em] text-[#51457e]">
              Ready for your next good day?
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#29203f] sm:text-4xl">
              Let's start with a location.
            </h2>
            <p className="mt-4 text-sm text-[#554b79] sm:text-base">
              Find a few ideas for wherever you're headed.
            </p>
            <Button
              variant="secondary"
              className="mt-7"
              onClick={() => setIsModalOpen(true)}
            >
              Build My Outing <ArrowRight size={16} />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <PlanOutingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
