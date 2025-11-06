"use client";

import { useEffect, useState } from "react";
import BlinkingMascot from "@/entities/mascot/ui/BlinkingMascot";
import SectionHeader from "./SectionHeader";
import SummaryCard from "./SummaryCard";
import { ChevronLeft } from "lucide-react";

export default function UploadSummaryLayout() {
  const [easyText, setEasyText] = useState<string | null>(null);

  const handleBack = () => window.history.back();

  useEffect(() => {
    const raw = sessionStorage.getItem("summary");
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setEasyText(parsed.easy_text); // easy_text만 추출
      } catch {
        setEasyText(raw); // 혹시 JSON 파싱 실패 시 그대로 사용
      }
    }
  }, []);

  return (
    <section className="mt-[-40px] mx-auto max-w-[1200px] px-6">
      <div className="flex items-center gap-2">
        <ChevronLeft onClick={handleBack} className="m-0 p-0" />
        <SectionHeader title="요약 결과" />
      </div>
      <div className="mt-4 relative">
        <div className="w-full">
          <SummaryCard data={easyText} />
        </div>
        <div className="absolute right-0 bottom-[-100px]">
          <BlinkingMascot width={220} />
        </div>
      </div>
    </section>
  );
}