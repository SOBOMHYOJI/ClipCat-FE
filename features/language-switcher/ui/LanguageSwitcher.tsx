"use client";
import { useState } from "react";
import { Language, LANGUAGES } from "../model/languages";

type Props = {
  value?: Language;
  onChange?: (lang: Language) => void;
};

export default function LanguageSwitcher({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Language>(value ?? LANGUAGES[0]);

  const handleSelect = (l: Language) => {
    setLang(l);
    onChange?.(l);
    setOpen(false);
  };
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 min-w-48 rounded-lg bg-white px-4 py-2 text-gray-900
                   hover:bg-gray-100 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
        >
          <path
            d="M19 9l-7 7-7-7"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <span>{lang}</span>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 mt-2 w-64 rounded-lg bg-white py-2 shadow-xl z-50"
        >
          {LANGUAGES.map((l) => (
            <button
              key={l}
              role="option"
              aria-selected={lang === l}
              onClick={() => {
                handleSelect(l);
              }}
              className={`w-full text-left px-4 py-3 transition-colors
                ${
                  lang === l
                    ? "bg-gray-100 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
