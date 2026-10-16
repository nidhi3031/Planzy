import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-[#FF7F6E] text-white shadow-[0_10px_24px_rgba(255,127,110,0.22)] hover:bg-[#f36f60]",
  secondary:
    "bg-white text-[#252525] shadow-[0_8px_24px_rgba(60,41,30,0.08)] hover:bg-[#fff0e9]",
  ghost: "bg-transparent text-[#5b554f] hover:bg-[#fff0e9]",
};

export default function Button({
  children,
  variant = "primary",
  to,
  className = "",
  type = "button",
  ...props
}) {
  const styles = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`;
  if (to)
    return (
      <Link className={styles} to={to} {...props}>
        {children}
      </Link>
    );
  return (
    <button className={styles} type={type} {...props}>
      {children}
    </button>
  );
}
