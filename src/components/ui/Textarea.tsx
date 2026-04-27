import { TextareaHTMLAttributes } from "react";

export default function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`min-h-[96px] w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-500 ${props.className ?? ""}`}
    />
  );
}