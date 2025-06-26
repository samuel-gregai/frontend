import React from "react";
import { cn } from "@/lib/utils";
import { BubbleProps } from "@/types/chat";

function BubbleContainer({ children, className, type }: BubbleProps) {
  return (
    <div
      className={cn(
        `${
          type === "user"
            ? "bg-blue-600 text-base text-gray-50 rounded-tl-4xl rounded-tr-2xl rounded-br-sm rounded-bl-4xl self-end"
            : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-tl-2xl rounded-tr-2xl rounded-bl rounded-br-2xl"
        } p-4 shadow-lightFallback w-max max-w-[400px] break-words`,
        className
      )}
    >
      <p>{children}</p>
    </div>
  );
}

export default BubbleContainer;
