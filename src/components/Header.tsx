"use client";

import React from "react";

interface HeaderProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ isOpen, onToggle }) => {
  return (
    <div className="flex items-center justify-between w-full h-[15vw] max-h-[100px] bg-gray-800 text-white px-4">
      {/* Hamburger/Close Button */}
      <button
        className="flex items-center justify-center bg-gray-700 rounded-full"
        onClick={onToggle}
        aria-label="Toggle Menu"
        style={{
          width: "15vw", // 15% of the viewport width
          height: "15vw", // Keep the button square
          maxWidth: "100px", // Cap the maximum size
          maxHeight: "100px", // Cap the maximum size
        }}
      >
        {isOpen ? (
          <span style={{ fontSize: "10vw", maxWidth: "60px" }}>✖</span> // X Icon
        ) : (
          <span style={{ fontSize: "10vw", maxWidth: "60px" }}>☰</span> // Hamburger Icon
        )}
      </button>

      {/* Name */}
      <h1 className="text-xl sm:text-2xl font-bold flex-grow text-right">
        Your Name
      </h1>
    </div>
  );
};

export default Header;

