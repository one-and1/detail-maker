import Card from "@/components/ui/Card";
import { StrategyResult } from "@/lib/types";

export default function StrategyPanel({ value }: { value: StrategyResult }) {
  return (
    <Card title="전략 제안">
      <p className="text-sm leading-6 text-zinc-700">{value.summary}</p>

      <div className="mt-4">
        <p className="mb-2 text-xs font-semibold text-zinc-500">강조 포인트</p>
        <div className="flex flex-wrap gap-2">
          {value.emphasisPoints.map((item) => (
            <span key={item} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <p className="mb-2 text-xs font-semibold text-zinc-500">추천 흐름</p>
        <ol className="space-y-1 text-sm text-zinc-700">
          {value.recommendedFlow.map((item, index) => (
            <li key={item}>{index + 1}. {item}</li>
          ))}
        </ol>
      </div>
    </Card>
  );
}