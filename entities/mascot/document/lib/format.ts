// 데이터를 보여주기 전에 정리하거나 후처리하는 함수들
// 문자열에 있는 불필요한 공백 / 줄바꿈 등을 정리
export function cleanText(text: string): string {
  return text
    .trim()
    .replace(/\\n/g, "\n") // 문자열 "\n"을 실제 줄바꿈으로 변환
    .replace(/\r\n|\r/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/(\*\*[^*]+\*\*)/g, "\n\n$1\n")
}

// 문서 객체를 안전하게 초기화
import type { DocumentSummary } from "../model/types";

export function normalizeDocument(
  data: Partial<DocumentSummary>
): DocumentSummary {
  return {
    title: data.title || "제목 없음",
    body: data.body ? cleanText(data.body) : "",
    id: data.id,
    createdAt: data.createdAt || new Date().toISOString(),
  };
}