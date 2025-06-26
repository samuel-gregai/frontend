"use client";
import React, { useState } from "react";
import { Attachment } from "../images";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface AttachementIconProps {
  onFileSelect?: (files: FileList | null) => void;
}

function AttachementIcon({ onFileSelect }: AttachementIconProps) {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setSelectedFiles(files);
    if (onFileSelect) {
      onFileSelect(files);
    }
  };

  return (
    <div className="relative cursor-pointer">
      <Label htmlFor="file-input" className="cursor-pointer">
        <Image
          src={Attachment}
          alt="attachment-icon"
          className={`transition-opacity ${selectedFiles ? "opacity-70" : "opacity-100"}`}
        />
      </Label>
    </div>
  );
}

export default AttachementIcon;
