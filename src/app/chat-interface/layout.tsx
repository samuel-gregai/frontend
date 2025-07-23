import React from "react";
import Sidebar from "./Sidebar";
function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-row min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 w-full h-screen flex items-center justify-center bg-background">
        {children}
      </main>
    </div>
  );
}

export default layout;
