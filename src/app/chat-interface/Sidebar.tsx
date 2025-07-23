import React from "react";
import { navlinks } from "@/features/constants/navlinks";

function Sidebar() {
  return (
    <aside className="h-screen w-56 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 shadow-2xl flex flex-col items-center py-10 border-r border-gray-700">
      <div className="mb-10 flex items-center gap-2">
        <span className="text-2xl font-extrabold text-white tracking-wide">
          GregAI
        </span>
      </div>
      <ul className="flex flex-col gap-4 w-full px-4">
        {navlinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.link}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-200 hover:bg-gray-600 hover:text-white transition-colors font-medium text-lg group"
            >
              {/* Optionally add an icon here if navlinks have icons */}
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-auto w-full px-4 pb-6">
        <button className="w-full py-2 rounded-xl  text-white font-semibold shadow-lg border border-gray-500 hover:cursor-pointer hover:bg-gray-600 transition-colors duration-300">
          Upgrade
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
