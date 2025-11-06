import React from "react";
import { cleanText } from "./format";

export function formatEasyText(text: string): React.ReactNode {
  const cleaned = cleanText(text);
  const lines = cleaned.split("\n");

  return lines.map((line, lineIdx) => {
    if (line.trim() === "") {
      return <div key={`empty-${lineIdx}`}>&nbsp;</div>;
    }

    // **강조** 처리
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const content = parts.map((part, partIdx) => {
      if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
        return <strong key={partIdx}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });

    return <div key={lineIdx}>{content}</div>;
  });
}
