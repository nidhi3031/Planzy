import { Sparkles } from "lucide-react";
import Button from "./Button";

export default function EmptyState({
  title = "No saved plans yet ✨",
  description = "Let's fix that.",
  actionLabel = "Build an Outing",
}) {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center rounded-[28px] bg-white px-6 py-14 text-center shadow-[0_14px_50px_rgba(72,48,31,0.07)] sm:px-12">
      <span className="mb-5 grid size-16 place-items-center rounded-full bg-[#fff0d6] text-[#bd7e1b]">
        <Sparkles size={28} />
      </span>
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <p className="mt-2 text-sm text-[#777]">{description}</p>
      <Button to="/" className="mt-7">
        {actionLabel}
      </Button>
    </section>
  );
}
