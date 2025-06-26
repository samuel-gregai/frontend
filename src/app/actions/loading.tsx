import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-4 border-gray-200 dark:border-gray-700 border-t-blue-500 rounded-full animate-spin" />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Loading chat interface...
        </p>
      </div>
    </div>
  );
}
