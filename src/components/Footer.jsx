import { ArrowUpRight, Camera, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Explore", to: "/#examples" },
  { label: "Saved Plans", to: "/saved" },
  { label: "How it works", to: "/how-it-works" },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#292522] px-5 pb-8 pt-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-10 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xl font-extrabold"
          >
            <span className="grid size-9 place-items-center rounded-full bg-[#ff7f6e]">
              <Sparkles size={17} />
            </span>
            AfterPlan ✦
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
            Turn one plan into an entire day worth remembering.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#ffd88a]">
            Find your next stop
          </h2>
          <div className="mt-4 flex flex-col items-start gap-3">
            {footerLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#ffd88a]">
            The little details
          </h2>
          <div className="mt-4 flex flex-col items-start gap-3">
            <span className="text-sm text-white/50">Privacy</span>
            <span className="text-sm text-white/50">Terms</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
            >
              <Camera size={15} /> Follow along <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-7xl text-xs text-white/40">
        Made for the plans that turn into stories. © {new Date().getFullYear()}{" "}
        AfterPlan
      </p>
    </footer>
  );
}
