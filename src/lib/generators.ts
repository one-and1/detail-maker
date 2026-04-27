import { CATEGORY_SECTION_MAP, SECTION_LABELS } from "./constants";
import {
  Category,
  HookingType,
  ProductInfo,
  ProjectMeta,
  SectionItem,
  SectionType,
  StrategyResult,
  StyleResult,
  ToneMode,
} from "./types";
import { splitLines, uid } from "./utils";

export function generateStrategy(
  category: Category,
  product: ProductInfo
): StrategyResult {
  const map: Record<Category, StrategyResult> = {
    여성의류: {
      summary: "첫인상과 핏을 강조하는 흐름이 적합합니다.",
      emphasisPoints: ["핏/실루엣", "소재감", "코디 활용도"],
      recommendedFlow: ["첫인상 후킹", "착용 인상", "디테일", "소재", "사이즈", "CTA"],
    },
    남성의류: {
      summary: "활용도와 실루엣 중심 설계가 적합합니다.",
      emphasisPoints: ["활용도", "실루엣", "소재 내구성"],
      recommendedFlow: ["후킹", "스타일 포인트", "디테일", "소재", "사이즈", "CTA"],
    },
    이너웨어: {
      summary: "착용감과 체형 보정 포인트를 중심으로 풀어야 합니다.",
      emphasisPoints: ["착용감", "보정력", "일상 활용"],
      recommendedFlow: ["문제 공감", "해결 포인트", "디테일", "사이즈", "후기", "CTA"],
    },
    "신발/가방": {
      summary: "디자인 포인트와 활용 장면 제시가 중요합니다.",
      emphasisPoints: ["디자인", "수납/기능", "코디 활용"],
      recommendedFlow: ["후킹", "스타일 연출", "기능", "디테일", "후기", "CTA"],
    },
    주얼리: {
      summary: "감성 표현과 디테일 강조가 핵심입니다.",
      emphasisPoints: ["무드", "광택/디테일", "선물 포인트"],
      recommendedFlow: ["감성 후킹", "디자인 설명", "디테일", "추천 상황", "CTA"],
    },
    스킨케어: {
      summary: "피부 고민과 해결 포인트를 자연스럽게 연결해야 합니다.",
      emphasisPoints: ["피부 고민", "성분", "사용감"],
      recommendedFlow: ["고민 공감", "핵심 성분", "효과 설명", "사용감", "FAQ", "CTA"],
    },
    메이크업: {
      summary: "발색/지속력/표현력 중심 설계가 적합합니다.",
      emphasisPoints: ["발색", "지속력", "연출 포인트"],
      recommendedFlow: ["후킹", "표현 포인트", "사용 장면", "후기", "FAQ", "CTA"],
    },
    "헤어/바디": {
      summary: "사용감과 루틴 변화를 강조하는 흐름이 좋습니다.",
      emphasisPoints: ["사용감", "향/질감", "루틴 변화"],
      recommendedFlow: ["문제 공감", "솔루션", "사용감", "성분", "후기", "CTA"],
    },
    건강식품: {
      summary: "일상 고민과 섭취 편의성을 함께 보여줘야 합니다.",
      emphasisPoints: ["일상 필요성", "원료", "섭취 편의성"],
      recommendedFlow: ["문제 공감", "핵심 기능", "원료 설명", "섭취법", "FAQ", "CTA"],
    },
    생활용품: {
      summary: "생활 속 불편 해결과 즉각적인 체감 포인트가 중요합니다.",
      emphasisPoints: ["불편 해결", "사용 편의성", "관리 용이성"],
      recommendedFlow: ["문제 제기", "해결 포인트", "상세 기능", "추천 상황", "FAQ", "CTA"],
    },
  };

  const result = map[category];
  const features = splitLines(product.features);

  if (features.length > 0) {
    return {
      ...result,
      emphasisPoints: [...new Set([...result.emphasisPoints, ...features.slice(0, 2)])],
    };
  }

  return result;
}

export function generateHooking(
  productName: string,
  category: Category,
  type: HookingType
): string[] {
  const base: Record<HookingType, string[]> = {
    문제형: [
      `${productName}, 왜 지금 필요한지 바로 느껴질 거예요`,
      `매일 반복되는 불편함, ${productName}로 정리해 보세요`,
      `아직도 비슷한 제품만 찾고 있다면 ${productName}를 보셔야 합니다`,
    ],
    공감형: [
      `${category} 고를 때 가장 많이 고민하는 포인트, 이 제품에 담았습니다`,
      `처음 써도 바로 납득되는 ${productName}의 이유`,
      `이런 점이 아쉬웠다면 ${productName}가 더 잘 맞습니다`,
    ],
    비교형: [
      `비슷해 보여도 결과는 다릅니다, ${productName}`,
      `기본은 넘기고 차이가 보이는 ${productName}`,
      `고를수록 기준이 달라지는 ${productName}`,
    ],
    후기형: [
      `실제로 많이 언급된 포인트를 담은 ${productName}`,
      `쓰고 나서 다시 찾게 되는 이유, ${productName}`,
      `후기에서 반복된 장점을 먼저 보여드립니다`,
    ],
    감성형: [
      `하루의 분위기를 바꾸는 작은 차이, ${productName}`,
      `과하지 않게 오래 남는 인상, ${productName}`,
      `처음보다 자꾸 더 좋아지는 ${productName}`,
    ],
    숫자형: [
      `구매 전 꼭 봐야 할 ${productName} 핵심 포인트 3가지`,
      `${productName}를 고를 때 기준이 되는 3가지`,
      `실사용에서 먼저 체감되는 ${productName}의 포인트 3가지`,
    ],
  };

  return [
    ...base[type],
    `${productName} 하나로 달라지는 ${category} 선택 기준`,
    `${productName}, 지금 가장 먼저 보여드릴 이유가 있습니다`,
  ];
}

export function recommendStyle(category: Category, tone: ToneMode): StyleResult {
  const styleMap: Record<Category, Omit<StyleResult, "tone">> = {
    여성의류: {
      mainColor: "#F5EFE6",
      subColor: "#B08968",
      accentColor: "#6B4F4F",
      direction: "부드럽고 감성적인 무드, 여백을 살린 스타일",
    },
    남성의류: {
      mainColor: "#F4F4F5",
      subColor: "#52525B",
      accentColor: "#18181B",
      direction: "정돈된 인상, 실용성과 깔끔함 중심",
    },
    이너웨어: {
      mainColor: "#FFF7F3",
      subColor: "#D97757",
      accentColor: "#7C2D12",
      direction: "편안함과 바디라인 강조를 함께 가져가는 스타일",
    },
    "신발/가방": {
      mainColor: "#F8F5F2",
      subColor: "#8B5E3C",
      accentColor: "#2C1810",
      direction: "스타일 포인트가 살아나는 고급형 레이아웃",
    },
    주얼리: {
      mainColor: "#FAF7F2",
      subColor: "#C6A969",
      accentColor: "#4A3B2F",
      direction: "미니멀하고 은은한 프리미엄 무드",
    },
    스킨케어: {
      mainColor: "#F8FBF8",
      subColor: "#8AA399",
      accentColor: "#486357",
      direction: "클린하고 신뢰감 있는 뷰티 무드",
    },
    메이크업: {
      mainColor: "#FFF6FA",
      subColor: "#C08497",
      accentColor: "#831843",
      direction: "발색과 트렌디함을 살리는 스타일",
    },
    "헤어/바디": {
      mainColor: "#F7FAFC",
      subColor: "#7AA5B7",
      accentColor: "#1E3A5F",
      direction: "청결감과 사용감을 강조하는 스타일",
    },
    건강식품: {
      mainColor: "#FCFBF5",
      subColor: "#9CA35D",
      accentColor: "#4D5B20",
      direction: "건강함과 신뢰감을 주는 정보형 스타일",
    },
    생활용품: {
      mainColor: "#F9FAFB",
      subColor: "#6B7280",
      accentColor: "#111827",
      direction: "문제 해결형, 실용성이 보이는 구조",
    },
  };

  return {
    tone,
    ...styleMap[category],
  };
}

function createBodyByType(
  type: SectionType,
  meta: ProjectMeta,
  product: ProductInfo
): string {
  const featureList = splitLines(product.features);

  switch (type) {
    case "hero":
      return `${product.oneLiner || product.productName || "상품의 첫인상을 한 문장으로 정리하세요"}\n${meta.brandName || "브랜드"}의 ${product.productName || "상품"}로 첫 인상부터 분명하게 보여주세요.`;

    case "problem":
      return `${product.targetCustomer || "고객"}이 자주 느끼는 불편을 먼저 짚고, 왜 이 제품이 필요한지 연결합니다.`;

    case "benefit":
      return featureList.length > 0
        ? featureList.map((item, index) => `${index + 1}. ${item}`).join("\n")
        : "핵심 장점을 3가지 정도로 나누어 보여주세요.";

    case "detail":
      return `${product.productName || "상품"}의 특징을 사용 장면 중심으로 풀어 설명합니다.`;

    case "material":
      return product.materialsOrIngredients || "소재/성분의 장점과 선택 이유를 정리합니다.";

    case "review":
      return product.reviewKeywords || "후기에서 자주 나올 법한 표현을 신뢰감 있게 정리합니다.";

    case "faq":
      return product.faqSeed || "고객이 가장 궁금해할 질문 3~5개를 구성합니다.";

    case "size":
      return product.optionsOrSize || "옵션/사이즈 정보를 보기 쉽게 정리합니다.";

    case "cta":
      return `지금 ${product.productName || "이 상품"}를 선택할 이유를 한 줄로 압축해 구매를 유도합니다.`;

    case "notice":
      return product.caution || "배송/교환/주의사항을 마지막에 정리합니다.";

    default:
      return "내용을 입력하세요.";
  }
}

export function generateSections(
  meta: ProjectMeta,
  product: ProductInfo
): SectionItem[] {
  const sectionTypes = CATEGORY_SECTION_MAP[meta.category];

  return sectionTypes.map((type) => ({
    id: uid(),
    type,
    title: SECTION_LABELS[type],
    body: createBodyByType(type, meta, product),
  }));
}