"use client";
import React, { useState, useRef, useCallback } from "react";
import { Textarea } from "../ui/textarea";
import AttachementIcon from "../../../public/icons/AttachementIcon";
import { Send } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Laptop, Cable, ChevronRight, X } from "lucide-react";
import { ChatInputProps } from "@/types/chat";
// import { ACCEPTED_FILE_TYPES } from "@/constants/chat";
import { getFileTypeLabel } from "@/utils/chat";

function ChatInput({ onSendMessage, isLoading = false }: ChatInputProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  // const [closePopOver, setClosePopOver] = useState<Boolean>(false);
  // const [message, setMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback((files: FileList | null) => {
    if (files) {
      setSelectedFiles((prev) => [...prev, ...Array.from(files)]);
    }
  }, []);

  const handleFileClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        setSelectedFiles((prev) => [...prev, ...Array.from(files)]);
      }
    },
    []
  );

  const removeFile = useCallback(
    (index: number) => {
      setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
      if (fileInputRef.current && selectedFiles.length === 1) {
        fileInputRef.current.value = "";
      }
    },
    [selectedFiles.length]
  );

  // const handleSend = useCallback(() => {
  //   if (message.trim() || selectedFiles.length > 0) {
  //     onSendMessage({
  //       text: message.trim(),
  //       files: selectedFiles.length > 0 ? selectedFiles : undefined,
  //     });
  //     setMessage("");
  //     setSelectedFiles([]);
  //     if (fileInputRef.current) {
  //       fileInputRef.current.value = "";
  //     }
  //   }
  // }, [message, selectedFiles, onSendMessage]);

  // const handleKeyPress = useCallback(
  //   (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
  //     if (e.key === "Enter" && !e.shiftKey) {
  //       e.preventDefault();
  //       handleSend();
  //     }
  //   },
  //   [handleSend]
  // );

  return (
    <div className="rounded-2xl border border-[#CBD5E0] flex flex-col">
      {selectedFiles.length > 0 && (
        <div className="px-4 pt-3">
          <div className="flex flex-col gap-2">
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-2 w-fit"
              >
                <div className="flex items-center gap-2">
                  <div className="text-xs font-medium bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                    {getFileTypeLabel(file.name)}
                  </div>
                  <span className="text-sm truncate max-w-[200px]">
                    {file.name}
                  </span>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex-1 h-full">
        <Textarea
          placeholder="Type your message here..."
          className="h-full w-full resize-none border-0 focus:ring-0 focus-visible:ring-0 focus:border-0 text-gray-900 dark:text-white focus-visible:border-0 focus:outline-none bg-transparent shadow-none"
        />
      </div>
      <div className="flex flex-row items-center gap-6 flex-shrink-0 p-4">
        <Popover>
          <PopoverTrigger>
            <AttachementIcon onFileSelect={handleFileSelect} />
          </PopoverTrigger>
          <PopoverContent className="p-2">
            <div className="container rounded-md flex flex-col gap-4">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx,.txt,.json,.xml"
                multiple
              />
              <div
                onClick={handleFileClick}
                className="flex flex-row gap-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-md p-2 items-center"
              >
                <Laptop size={20} />
                <p className="text-xs">Add from computer</p>
              </div>
              <div className="flex flex-row justify-between items-center p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-md">
                <div className="flex flex-row gap-2  items-center ">
                  <Cable size={20} />
                  <p className="text-xs">Connect your apps</p>
                </div>
                <ChevronRight size={20} />
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <button className="hover:opacity-70 transition-opacity hover:cursor-pointer">
          <Send />
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
