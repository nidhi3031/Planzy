import { Compass } from "lucide-react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="grid min-h-[60vh] place-items-center px-5 py-16 text-center">
        <section className="max-w-lg">
          <span className="mx-auto grid size-20 place-items-center rounded-[28px] bg-[#eee8ff] text-[#6f5bb1]">
            <Compass size={38} />
          </span>
          <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.18em] text-[#ff7f6e]">
            A tiny detour
          </p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Oops! We took a wrong turn. 🗺️
          </h1>
          <p className="mt-3 text-sm text-[#777]">
            Let's get you back to your plans.
          </p>
          <Button to="/" className="mt-6">
            Back Home
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
