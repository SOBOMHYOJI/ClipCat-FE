"use client";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("베트남어 Tiếng Việt");

  const languages = [
    "베트남어 Tiếng Việt",
    "러시아어 Русский",
    "우즈벡어 O‘zbek tili",
    "캄보디아어 ភាសាខ្មែរ",
    "몽골어 Монгол хэл",
  ];

  const handleLangSelect = (lang:string) => {
    setSelectedLang(lang);
    setIsLangOpen(false);
  };

  return (
    <div className="flex w-full items-center justify-between bg-foreground px-30 py-4 fixed top-0 left-0 z-50">
      <Image
        src={"/clipcat_logo.svg"}
        alt="ClipCat Logo"
        width={160}
        height={34}
      />

      <nav className="flex items-center gap-8">
        <button
          onClick={() => setActiveTab("upload")}
          className={`pb-1 transition-all ${
            activeTab === "upload"
              ? "text-white border-b-2 border-white font-bold"
              : "text-gray-300 hover:text-white font-normal"
          }`}
        >
          파일 업로드
        </button>
        <button
          onClick={() => setActiveTab("ai")}
          className={`pb-1 transition-all ${
            activeTab === "ai"
              ? "text-white border-b-2 border-white font-bold"
              : "text-gray-300 hover:text-white font-normal"
          }`}
        >
          AI 상담
        </button>
      </nav>

         <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center justify-between bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors min-w-48"
            >
              <span>{selectedLang}</span>
              <svg 
                className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 py-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLangSelect(lang)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors ${
                      selectedLang === lang ? 'bg-gray-100 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
    </div>
  );
};

export default Header;
