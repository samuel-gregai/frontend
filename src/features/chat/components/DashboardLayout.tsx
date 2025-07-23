import React from "react";
import { navlinks } from "@/features/constants/navlinks";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-40 flex flex-row justify-between h-screen bg-gray-400 p-4">
      <nav>
        <ul className="mt-40">
          {navlinks.map((link) => (
            <li key={link.label}>
              <a href={link.link}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default DashboardLayout;
