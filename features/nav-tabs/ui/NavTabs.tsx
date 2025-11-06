"use client";
import type { NavKey } from "../model/types";

const tabs: { key: NavKey; label: string }[] = [
  { key: "upload", label: "파일 업로드" },
  { key: "ai", label: "AI 상담" },
];

export default function NavTabs({
  value,
  onChange,
}: {
  value: NavKey;
  onChange: (k: NavKey) => void;
}) {
  return (
    <nav className="relative">
      <ul className="flex gap-10">
        {tabs.map((t) => (
          <li key={t.key}>
            <button
              onClick={() => onChange(t.key)}
              className={`relative pb-1 text-lg transition-colors
                ${
                  value === t.key
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
            >
              {t.label}
              {/* underline */}
              <span
                className={`absolute left-0 -bottom-[4px] h-[2px] bg-white transition-all
                  ${value === t.key ? "w-full opacity-100" : "w-0 opacity-0"}`}
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
