import Card from "@/components/ui/Card";
import Select from "@/components/ui/Select";
import { TONE_MODES } from "@/lib/constants";
import { StyleResult } from "@/lib/types";

interface Props {
  value: StyleResult;
  onToneChange: (tone: StyleResult["tone"]) => void;
}

function ColorChip({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-zinc-200 p-3">
      <div className="h-8 w-8 rounded-full border border-zinc-200" style={{ backgroundColor: color }} />
      <div>
        <p className="text-xs font-medium text-zinc-500">{label}</p>
        <p className="text-sm text-zinc-800">{color}</p>
      </div>
    </div>
  );
}

export default function StylePanel({ value, onToneChange }: Props) {
  return (
    <Card title="톤앤무드 / 컬러 추천">
      <div className="mb-4 max-w-[220px]">
        <Select value={value.tone} onChange={(e) => onToneChange(e.target.value as StyleResult["tone"])}>
          {TONE_MODES.map((tone) => (
            <option key={tone} value={tone}>{tone}</option>
          ))}
        </Select>
      </div>

      <p className="mb-4 text-sm leading-6 text-zinc-700">{value.direction}</p>

      <div className="grid gap-3 md:grid-cols-3">
        <ColorChip label="메인 컬러" color={value.mainColor} />
        <ColorChip label="서브 컬러" color={value.subColor} />
        <ColorChip label="강조 컬러" color={value.accentColor} />
      </div>
    </Card>
  );
}