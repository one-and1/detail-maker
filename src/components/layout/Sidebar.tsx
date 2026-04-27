const items = [
    "기본 정보",
    "상품 입력",
    "전략",
    "후킹",
    "스타일",
    "섹션",
    "미리보기",
  ];
  
  export default function Sidebar() {
    return (
      <aside className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">workflow</p>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="rounded-xl px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50">
              {item}
            </li>
          ))}
        </ul>
      </aside>
    );
  }