export const LANGUAGES = [
  "베트남어 Tiếng Việt",
  "러시아어 Русский",
  "우즈벡어 O‘zbek tili",
  "캄보디아어 ភាសាខ្មែរ",
  "몽골어 Монгол хэл",
] as const;

export type Language = (typeof LANGUAGES)[number];
