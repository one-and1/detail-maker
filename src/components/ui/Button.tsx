import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50";

  const styles = {
    primary: "bg-zinc-900 text-white hover:bg-zinc-800",
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
    ghost: "bg-transparent text-zinc-700 hover:bg-zinc-100",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}