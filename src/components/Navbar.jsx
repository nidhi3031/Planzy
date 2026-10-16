import { useState } from "react";
import { Heart, Menu, Sparkles, UserRound, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Explore", to: "/#examples" },
  { label: "How it works", to: "/#how-it-works" },
  { label: "Saved", to: "/saved" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 px-4 pt-3 sm:px-7">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/80 bg-[#fffaf6]/90 px-4 py-2.5 shadow-[0_8px_30px_rgba(70,47,34,0.07)] backdrop-blur-xl sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-extrabold text-[#292522]"
          aria-label="AfterPlan home"
        >
          <span className="grid size-9 place-items-center rounded-full bg-[#ff7f6e] text-white">
            <Sparkles size={17} fill="currentColor" />
          </span>
          AfterPlan<span className="text-[#ff7f6e]">✦</span>
        </Link>
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className="text-sm font-semibold text-[#716963] transition hover:text-[#ff7565]"
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/saved"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-[#514943] transition hover:bg-[#fff0e9]"
          >
            <Heart size={16} /> Saved
          </Link>
          <button
            type="button"
            aria-label="Profile"
            className="grid size-10 place-items-center rounded-full bg-[#eee8ff] text-[#6954ae] transition hover:scale-105"
          >
            <UserRound size={18} />
          </button>
        </div>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid size-10 place-items-center rounded-full bg-[#fff0e9] text-[#403934] md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <nav
          className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-[24px] bg-white p-3 shadow-xl md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-bold text-[#514943] hover:bg-[#fff5ef]"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/saved"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold text-[#514943] hover:bg-[#fff5ef]"
          >
            <Heart size={16} /> Saved plans
          </Link>
        </nav>
      )}
    </header>
  );
}
