import { Category, HookingType, SectionType, ToneMode } from "./types";

export const CATEGORIES: Category[] = [
  "여성의류",
  "남성의류",
  "이너웨어",
  "신발/가방",
  "주얼리",
  "스킨케어",
  "메이크업",
  "헤어/바디",
  "건강식품",
  "생활용품",
];

export const HOOKING_TYPES: HookingType[] = [
  "문제형",
  "공감형",
  "비교형",
  "후기형",
  "감성형",
  "숫자형",
];

export const TONE_MODES: ToneMode[] = [
  "감성형",
  "고급형",
  "트렌디",
  "전문형",
  "마켓형",
  "러블리",
];

export const CATEGORY_SECTION_MAP: Record<Category, SectionType[]> = {
  여성의류: ["hero", "benefit", "detail", "material", "size", "review", "cta", "notice"],
  남성의류: ["hero", "benefit", "detail", "material", "size", "review", "cta", "notice"],
  이너웨어: ["hero", "problem", "benefit", "detail", "size", "review", "cta", "notice"],
  "신발/가방": ["hero", "benefit", "detail", "material", "review", "cta", "notice"],
  주얼리: ["hero", "benefit", "detail", "material", "review", "cta", "notice"],
  스킨케어: ["hero", "problem", "benefit", "material", "detail", "faq", "review", "cta", "notice"],
  메이크업: ["hero", "problem", "benefit", "detail", "review", "faq", "cta", "notice"],
  "헤어/바디": ["hero", "problem", "benefit", "material", "detail", "review", "cta", "notice"],
  건강식품: ["hero", "problem", "benefit", "material", "detail", "faq", "cta", "notice"],
  생활용품: ["hero", "problem", "benefit", "detail", "review", "faq", "cta", "notice"],
};

export const SECTION_LABELS: Record<SectionType, string> = {
  hero: "상단 배너",
  problem: "문제 제기",
  benefit: "핵심 장점",
  detail: "상세 설명",
  material: "소재/성분",
  review: "리뷰/추천 포인트",
  faq: "FAQ",
  size: "사이즈/옵션",
  cta: "구매 유도",
  notice: "안내 사항",
};