"use client";
import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ChatInput from "./ChatInput";
import { motion } from "framer-motion";

interface Props {
  isFloating: boolean;
  onFirstMessage: () => void;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

const ChatWrapper = ({ isFloating, onFirstMessage }: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new message
  //   useEffect(() => {
  //     if (containerRef.current) {
  //       containerRef.current.scrollTop = containerRef.current.scrollHeight;
  //     }
  //   }, [messages]);

  const handleSend = (userText: string) => {
    const newMessages: Message[] = [
      ...messages,
      { id: crypto.randomUUID(), role: "user" as const, text: userText },
      {
        id: crypto.randomUUID(),
        role: "assistant" as const,
        text: `Greg: ${userText}`, // Replace with real LLM call later
      },
    ];
    setMessages(newMessages);

    if (messages.length === 0) {
      onFirstMessage(); // Trigger float on first send
    }
  };

  const content = (
    <motion.div
      initial={false}
      animate={{
        position: "fixed",
        bottom: isFloating ? 24 : "auto",
        right: isFloating ? 24 : "auto",
        top: isFloating ? "auto" : "50%",
        left: isFloating ? "auto" : "50%",
        transform: isFloating ? "none" : "translate(-50%, -50%)",
        width: isFloating ? "375px" : "100%",
        maxWidth: isFloating ? "375px" : "32rem",
        height: isFloating ? "600px" : "auto",
        zIndex: 50,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="rounded-2xl shadow-lg flex flex-col"
    >
      {!isFloating ? (
        <>
          <h1 className="text-2xl font-bold text-center mb-4 text-white">
            Welcome to the Chat Interface
          </h1>
          <ChatInput onSend={handleSend} />
        </>
      ) : (
        <>
          <div className="flex flex-col h-full pt-4 border border-gray-900 rounded-2xl shadow-lg">
            {/* Message history */}
            <div
              className="flex flex-col gap-2 overflow-y-auto flex-1 px-3 scroll-thin scroll-smooth"
              ref={containerRef}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-[75%] px-4 py-2 rounded-xl text-sm ${
                    msg.role === "user"
                      ? "bg-primary text-white self-end"
                      : "bg-gray-700 text-white self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-2">
              <ChatInput onSend={handleSend} />
            </div>
          </div>
        </>
      )}
    </motion.div>
  );

  return ReactDOM.createPortal(content, document.body);
};

export default ChatWrapper;
