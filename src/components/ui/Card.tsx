import { ReactNode } from "react";

export default function Card({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      {title ? <h3 className="mb-4 text-sm font-semibold text-zinc-900">{title}</h3> : null}
      {children}
    </section>
  );
}