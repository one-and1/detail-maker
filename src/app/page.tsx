"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import HookingPanel from "@/components/project/HookingPanel";
import PreviewCanvas from "@/components/project/PreviewCanvas";
import ProductForm from "@/components/project/ProductForm";
import ProjectForm from "@/components/project/ProjectForm";
import SectionEditor from "@/components/project/SectionEditor";
import StrategyPanel from "@/components/project/StrategyPanel";
import StylePanel from "@/components/project/StylePanel";
import Button from "@/components/ui/Button";
import {
  generateHooking,
  generateSections,
  generateStrategy,
  recommendStyle,
} from "@/lib/generators";
import { loadProject, saveProject } from "@/lib/storage";
import {
  HookingResult,
  ProductInfo,
  ProjectData,
  ProjectMeta,
  SectionItem,
  StrategyResult,
  StyleResult,
} from "@/lib/types";
import { useEffect, useMemo, useState } from "react";

const initialMeta: ProjectMeta = {
  title: "",
  clientName: "",
  brandName: "",
  category: "여성의류",
};

const initialProduct: ProductInfo = {
  productName: "",
  oneLiner: "",
  targetCustomer: "",
  priceRange: "",
  features: "",
  materialsOrIngredients: "",
  optionsOrSize: "",
  usage: "",
  caution: "",
  faqSeed: "",
  reviewKeywords: "",
  referenceLinks: "",
};

export default function HomePage() {
  const [meta, setMeta] = useState<ProjectMeta>(initialMeta);
  const [product, setProduct] = useState<ProductInfo>(initialProduct);
  const [hookType, setHookType] = useState<HookingResult["type"]>("문제형");
  const [tone, setTone] = useState<StyleResult["tone"]>("감성형");
  const [sections, setSections] = useState<SectionItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  const strategy: StrategyResult = useMemo(
    () => generateStrategy(meta.category, product),
    [meta.category, product]
  );

  const hooking: HookingResult = useMemo(
    () => ({
      type: hookType,
      items: generateHooking(
        product.productName || "이 상품",
        meta.category,
        hookType
      ),
    }),
    [product.productName, meta.category, hookType]
  );

  const style: StyleResult = useMemo(
    () => recommendStyle(meta.category, tone),
    [meta.category, tone]
  );

  useEffect(() => {
    const saved = loadProject();

    if (saved) {
      setMeta(saved.meta);
      setProduct(saved.product);
      setHookType(saved.hooking.type);
      setTone(saved.style.tone);
      setSections(saved.sections);
    } else {
      setSections(generateSections(initialMeta, initialProduct));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    if (sections.length === 0) {
      setSections(generateSections(meta, product));
    }
  }, [loaded, sections.length, meta, product]);

  const handleRegenerateSections = () => {
    setSections(generateSections(meta, product));
  };

  const handleSave = () => {
    const data: ProjectData = {
      meta,
      product,
      strategy,
      hooking,
      style,
      sections,
      updatedAt: new Date().toISOString(),
    };

    saveProject(data);
    alert("프로젝트를 로컬에 저장했습니다.");
  };

  const handleReset = () => {
    setMeta(initialMeta);
    setProduct(initialProduct);
    setHookType("문제형");
    setTone("감성형");
    setSections(generateSections(initialMeta, initialProduct));
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />

      <main className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 px-6 py-6 xl:grid-cols-[220px_minmax(0,1fr)_420px]">
        <div className="xl:sticky xl:top-6 xl:h-fit">
          <Sidebar />
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-3">
            <Button onClick={handleSave}>저장</Button>
            <Button variant="secondary" onClick={handleRegenerateSections}>
              섹션 다시 생성
            </Button>
            <Button variant="ghost" onClick={handleReset}>
              초기화
            </Button>
          </div>

          <ProjectForm value={meta} onChange={setMeta} />
          <ProductForm value={product} onChange={setProduct} />
          <StrategyPanel value={strategy} />
          <HookingPanel
            value={hooking}
            onTypeChange={setHookType}
            onRegenerate={handleRegenerateSections}
          />
          <StylePanel value={style} onToneChange={setTone} />
          <SectionEditor sections={sections} onChange={setSections} />
        </div>

        <div className="xl:sticky xl:top-6 xl:h-fit">
          <PreviewCanvas
            brandName={meta.brandName}
            productName={product.productName}
            hooking={hooking.items}
            style={style}
            sections={sections}
          />
        </div>
      </main>
    </div>
  );
}