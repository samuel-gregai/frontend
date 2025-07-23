"use client";
import React, { useState } from "react";

const ChatInput = ({ onSend }: { onSend: (message: string) => void }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const trimmed = message.trim();
    if (!trimmed) return;

    onSend(trimmed);
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent new line
      handleSubmit();
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full">
      <div className="flex items-end gap-2 bg-gray-800 rounded-2xl px-4 py-3 shadow-sm">
        <textarea
          className="flex-1 text-white bg-transparent outline-none border-none text-base p-0 m-0 resize-none min-h-[44px] max-h-[150px] overflow-y-auto scroll-thin scroll-smooth placeholder-gray-400"
          placeholder="Send a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="ml-2 p-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50"
          aria-label="Send message"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-7.5-15-7.5v6l10 1.5-10 1.5v6z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
