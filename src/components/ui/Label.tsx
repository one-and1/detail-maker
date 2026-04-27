import { ReactNode } from "react";

export default function Label({ children }: { children: ReactNode }) {
  return <label className="mb-1.5 block text-xs font-medium text-zinc-600">{children}</label>;
}