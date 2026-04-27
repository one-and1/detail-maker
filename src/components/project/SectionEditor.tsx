import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { SectionItem } from "@/lib/types";

interface Props {
  sections: SectionItem[];
  onChange: (next: SectionItem[]) => void;
}

export default function SectionEditor({ sections, onChange }: Props) {
  const updateTitle = (id: string, value: string) => {
    onChange(sections.map((section) => (section.id === id ? { ...section, title: value } : section)));
  };

  const updateBody = (id: string, value: string) => {
    onChange(sections.map((section) => (section.id === id ? { ...section, body: value } : section)));
  };

  const move = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= sections.length) return;

    const next = [...sections];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  return (
    <Card title="섹션 편집">
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={section.id} className="rounded-2xl border border-zinc-200 p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{section.type}</div>
              <div className="flex gap-2">
                <Button variant="ghost" onClick={() => move(index, -1)}>위로</Button>
                <Button variant="ghost" onClick={() => move(index, 1)}>아래로</Button>
              </div>
            </div>
            <div className="space-y-3">
              <Input value={section.title} onChange={(e) => updateTitle(section.id, e.target.value)} />
              <Textarea value={section.body} onChange={(e) => updateBody(section.id, e.target.value)} className="min-h-[120px]" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}