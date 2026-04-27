import Card from "@/components/ui/Card";
import { SectionItem, StyleResult } from "@/lib/types";

export default function PreviewCanvas({
  brandName,
  productName,
  hooking,
  style,
  sections,
}: {
  brandName: string;
  productName: string;
  hooking: string[];
  style: StyleResult;
  sections: SectionItem[];
}) {
  return (
    <Card title="미리보기">
      <div className="mx-auto max-w-[420px] overflow-hidden rounded-[28px] border border-zinc-200 bg-white">
        <div className="px-6 py-8" style={{ backgroundColor: style.mainColor }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">{brandName || "BRAND"}</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-zinc-900">{hooking[0] || productName || "상세페이지 제목"}</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">{productName || "상품명"}</p>
        </div>

        <div className="space-y-4 bg-white p-4">
          {sections.map((section) => (
            <section key={section.id} className="rounded-2xl border border-zinc-100 p-4 shadow-sm">
              <p className="text-xs font-semibold text-zinc-500">{section.title}</p>
              <div className="mt-2 whitespace-pre-line text-sm leading-6 text-zinc-800">{section.body}</div>
            </section>
          ))}
        </div>

        <div className="px-4 pb-4">
          <button
            className="w-full rounded-2xl px-4 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: style.accentColor }}
          >
            지금 선택하기
          </button>
        </div>
      </div>
    </Card>
  );
}