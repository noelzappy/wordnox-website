import React from "react";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 px-10">
      <div>
        <a href="/">
          <span className="border p-2 rounded-sm font-bold text-gray-800">
            WORDNOX
          </span>
        </a>
      </div>
      <div>
        <span className="text-gray-800 font-bold cursor-pointer hover:text-gray-600 underline">
          MENU
        </span>
      </div>
    </nav>
  );
}
