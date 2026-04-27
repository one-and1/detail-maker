import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Select from "@/components/ui/Select";
import { HOOKING_TYPES } from "@/lib/constants";
import { HookingResult } from "@/lib/types";

interface Props {
  value: HookingResult;
  onTypeChange: (type: HookingResult["type"]) => void;
  onRegenerate: () => void;
}

export default function HookingPanel({ value, onTypeChange, onRegenerate }: Props) {
  return (
    <Card title="후킹 생성">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <Select value={value.type} onChange={(e) => onTypeChange(e.target.value as HookingResult["type"])} className="max-w-[180px]">
          {HOOKING_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
        <Button variant="secondary" onClick={onRegenerate}>후킹 다시 생성</Button>
      </div>

      <ul className="space-y-2">
        {value.items.map((item) => (
          <li key={item} className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-sm text-zinc-700">
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}