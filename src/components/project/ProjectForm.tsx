import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Select from "@/components/ui/Select";
import { CATEGORIES } from "@/lib/constants";
import { ProjectMeta } from "@/lib/types";

interface Props {
  value: ProjectMeta;
  onChange: (value: ProjectMeta) => void;
}

export default function ProjectForm({ value, onChange }: Props) {
  return (
    <Card title="기본 정보">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label>프로젝트 제목</Label>
          <Input
            value={value.title}
            onChange={(e) => onChange({ ...value, title: e.target.value })}
            placeholder="예: 봄 여성 니트 상세페이지"
          />
        </div>
        <div>
          <Label>클라이언트명</Label>
          <Input
            value={value.clientName}
            onChange={(e) => onChange({ ...value, clientName: e.target.value })}
            placeholder="예: OO컴퍼니"
          />
        </div>
        <div>
          <Label>브랜드명</Label>
          <Input
            value={value.brandName}
            onChange={(e) => onChange({ ...value, brandName: e.target.value })}
            placeholder="예: Daily Mood"
          />
        </div>
        <div>
          <Label>카테고리</Label>
          <Select
            value={value.category}
            onChange={(e) => onChange({ ...value, category: e.target.value as ProjectMeta["category"] })}
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </div>
      </div>
    </Card>
  );
}