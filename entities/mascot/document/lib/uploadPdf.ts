// lib/useUpload.ts
"use client";

import axios from "axios";
import { useState } from "react";

export interface UploadResponse {
  original_text: string;
  easy_text: string;
}

export default function useUpload() {
  const [uploading, setUploading] = useState(false);

  const upload = async (file: File): Promise<boolean> => {
    if (file.type !== "application/pdf") {
      alert("PDF 파일만 업로드 가능합니다.");
      return false;
    }

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    try {
      const res = await axios.post<UploadResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND_UFL}/easy-korean/pdf`,
        formData
      );

      if (!res.data) {
        throw new Error("파일 업로드 실패");
      }

      const data: UploadResponse = {
        original_text: res.data.original_text,
        easy_text: res.data.easy_text,
      };

      sessionStorage.setItem("summary", JSON.stringify(data));
      return true;
    } catch (err: any) {
      console.error(err);
      alert(err.message || "업로드 중 오류 발생");
      return false;
    } finally {
      setUploading(false);
    }
  };

  return { uploading, upload };
}
