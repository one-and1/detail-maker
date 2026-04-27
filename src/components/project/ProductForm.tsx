import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Textarea from "@/components/ui/Textarea";
import { ProductInfo } from "@/lib/types";

interface Props {
  value: ProductInfo;
  onChange: (value: ProductInfo) => void;
}

export default function ProductForm({ value, onChange }: Props) {
  const update = (key: keyof ProductInfo, next: string) => {
    onChange({ ...value, [key]: next });
  };

  return (
    <Card title="상품 입력">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label>상품명</Label>
          <Input value={value.productName} onChange={(e) => update("productName", e.target.value)} />
        </div>
        <div>
          <Label>한 줄 설명</Label>
          <Input value={value.oneLiner} onChange={(e) => update("oneLiner", e.target.value)} />
        </div>
        <div>
          <Label>타깃 고객</Label>
          <Input value={value.targetCustomer} onChange={(e) => update("targetCustomer", e.target.value)} />
        </div>
        <div>
          <Label>가격대</Label>
          <Input value={value.priceRange} onChange={(e) => update("priceRange", e.target.value)} />
        </div>
        <div className="md:col-span-2">
          <Label>핵심 장점 (줄바꿈으로 구분)</Label>
          <Textarea value={value.features} onChange={(e) => update("features", e.target.value)} />
        </div>
        <div>
          <Label>소재/성분</Label>
          <Textarea value={value.materialsOrIngredients} onChange={(e) => update("materialsOrIngredients", e.target.value)} />
        </div>
        <div>
          <Label>옵션/사이즈</Label>
          <Textarea value={value.optionsOrSize} onChange={(e) => update("optionsOrSize", e.target.value)} />
        </div>
        <div>
          <Label>사용 방법</Label>
          <Textarea value={value.usage} onChange={(e) => update("usage", e.target.value)} />
        </div>
        <div>
          <Label>주의사항</Label>
          <Textarea value={value.caution} onChange={(e) => update("caution", e.target.value)} />
        </div>
        <div>
          <Label>FAQ 소재</Label>
          <Textarea value={value.faqSeed} onChange={(e) => update("faqSeed", e.target.value)} />
        </div>
        <div>
          <Label>후기 키워드</Label>
          <Textarea value={value.reviewKeywords} onChange={(e) => update("reviewKeywords", e.target.value)} />
        </div>
        <div className="md:col-span-2">
          <Label>참고 링크</Label>
          <Textarea value={value.referenceLinks} onChange={(e) => update("referenceLinks", e.target.value)} />
        </div>
      </div>
    </Card>
  );
}