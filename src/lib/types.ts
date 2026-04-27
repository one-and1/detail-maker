export type Category =
  | "여성의류"
  | "남성의류"
  | "이너웨어"
  | "신발/가방"
  | "주얼리"
  | "스킨케어"
  | "메이크업"
  | "헤어/바디"
  | "건강식품"
  | "생활용품";

export type HookingType =
  | "문제형"
  | "공감형"
  | "비교형"
  | "후기형"
  | "감성형"
  | "숫자형";

export type ToneMode =
  | "감성형"
  | "고급형"
  | "트렌디"
  | "전문형"
  | "마켓형"
  | "러블리";

export type SectionType =
  | "hero"
  | "problem"
  | "benefit"
  | "detail"
  | "material"
  | "review"
  | "faq"
  | "size"
  | "cta"
  | "notice";

export interface ProjectMeta {
  title: string;
  clientName: string;
  brandName: string;
  category: Category;
}

export interface ProductInfo {
  productName: string;
  oneLiner: string;
  targetCustomer: string;
  priceRange: string;
  features: string;
  materialsOrIngredients: string;
  optionsOrSize: string;
  usage: string;
  caution: string;
  faqSeed: string;
  reviewKeywords: string;
  referenceLinks: string;
}

export interface StrategyResult {
  summary: string;
  emphasisPoints: string[];
  recommendedFlow: string[];
}

export interface HookingResult {
  type: HookingType;
  items: string[];
}

export interface StyleResult {
  tone: ToneMode;
  mainColor: string;
  subColor: string;
  accentColor: string;
  direction: string;
}

export interface SectionItem {
  id: string;
  type: SectionType;
  title: string;
  body: string;
}

export interface ProjectData {
  meta: ProjectMeta;
  product: ProductInfo;
  strategy: StrategyResult;
  hooking: HookingResult;
  style: StyleResult;
  sections: SectionItem[];
  updatedAt: string;
}