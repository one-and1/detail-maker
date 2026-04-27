export default function Header() {
    return (
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-medium text-zinc-500">1인용 상세페이지 작업 툴</p>
            <h1 className="text-lg font-semibold text-zinc-900">Detail Maker MVP</h1>
          </div>
        </div>
      </header>
    );
  }