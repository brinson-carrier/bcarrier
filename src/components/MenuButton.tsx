"use client";
import React, { useState } from "react";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        {/* Menu Icon */}
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Expanding Menu */}
      <div
        className={`absolute top-12 left-0 w-48 bg-gray-700 text-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul>
          <li className="p-4 hover:bg-gray-600 cursor-pointer">About Me</li>
          <li className="p-4 hover:bg-gray-600 cursor-pointer">Resume</li>
          <li className="p-4 hover:bg-gray-600 cursor-pointer">Skills</li>
          <li className="p-4 hover:bg-gray-600 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuButton;
