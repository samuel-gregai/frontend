import { FILE_TYPE_LABELS } from "@/constants/chat";

export const getFileTypeLabel = (fileName: string): string => {
  const extension = fileName.split(".").pop()?.toLowerCase();
  return extension ? FILE_TYPE_LABELS[extension as keyof typeof FILE_TYPE_LABELS] || "FILE" : "FILE";
};
