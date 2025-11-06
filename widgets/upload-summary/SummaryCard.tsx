"use client";
import { formatEasyText } from "@/entities/mascot/document/lib/formatText";

export default function SummaryCard({ data }: { data: string | null }) {
  return (
    <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
      <div className="h-[420px] overflow-y-auto leading-7">
        {data ? (
          <>{formatEasyText(data)}</>
        ) : (
          <p className="text-gray-500">요약을 불러오는 중…</p>
        )}
      </div>
    </div>
  );
}