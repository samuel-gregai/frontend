"use client";
import React, { useState, useCallback } from "react";
import ChatInput from "./chat/chat-input";
import BubbleContainer from "./chat/Bubble";
import { formatDate } from "@/helpers/dateFormatter";
import { Message, ChatMessage } from "@/types/chat";
import { INITIAL_MESSAGE } from "@/constants/chat";

function Chatbox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      content: INITIAL_MESSAGE,
      type: "chatbot",
      timestamp: new Date(),
    },
  ]);
  const handleSendMessage = useCallback(async (chatMessage: ChatMessage) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content: chatMessage.text,
      type: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    // Here you would typically handle the API call to your chatbot service
    // setIsLoading(true);
    // try {
    //   const response = await chatbotService.sendMessage(chatMessage);
    //   setMessages(prev => [...prev, response]);
    // } catch (error) {
    //   console.error('Failed to send message:', error);
    // } finally {
    //   setIsLoading(false);
    // }
  }, []);
  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 h-[50dvh] w-[500px] rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
      <header className="bg-gray-50 dark:bg-gray-800 flex-shrink-0 rounded-t-lg border-b border-gray-200 dark:border-gray-700">
        <div className="py-4 px-6">
          <p className="font-medium text-gray-900 dark:text-gray-100">
            Chatbot playground
          </p>
        </div>
      </header>
      <main className="flex flex-col flex-1 overflow-hidden">
        <section className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 dark:hover:[&::-webkit-scrollbar-thumb]:bg-gray-500">
          <div className="p-4">
            {messages.map((message, index) => {
              const showDate =
                index === 0 ||
                formatDate(message.timestamp) !==
                  formatDate(messages[index - 1].timestamp);

              return (
                <React.Fragment key={message.id}>
                  {showDate && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex items-center justify-center">
                      {formatDate(message.timestamp)}
                    </div>
                  )}
                  <div className="flex flex-col gap-6 mb-6">
                    <BubbleContainer type={message.type}>
                      {message.content}
                    </BubbleContainer>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </section>
        <div className="flex-shrink-0 p-4">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </main>
    </div>
  );
}

export default Chatbox;
