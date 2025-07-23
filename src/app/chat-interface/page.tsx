"use client";
import React, { useState } from "react";
import ChatWrapper from "@/components/chat/ChatWrapper";

export default function Page() {
  const [isFloating, setIsFloating] = useState(false);

  return (
    <>
      <ChatWrapper
        isFloating={isFloating}
        onFirstMessage={() => setIsFloating(true)}
      />
    </>
  );
}
