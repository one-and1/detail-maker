import { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-500 ${props.className ?? ""}`}
    />
  );
}