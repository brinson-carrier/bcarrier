"use client";
import React from "react";

interface MenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onToggle }) => {
  return (
    <div>
      {/* Hamburger/Close Button */}
      <button
        className="absolute top-4 left-4 z-20 flex items-center justify-center bg-gray-800 text-white rounded-full"
        onClick={onToggle}
        aria-label="Toggle Menu"
        style={{
          width: "15vw",
          height: "15vw",
          maxWidth: "100px",
          maxHeight: "100px",
        }}
      >
          {isOpen ? (
            <span className="font-bold" style={{ fontSize: "max(10vw, 16px)", maxWidth: "60px" }}>✖</span>
          ) : (
            <span className="font-bold" style={{ fontSize: "max(10vw, 16px)", maxWidth: "60px" }}>☰</span>
          )}
      </button>

      {/* Menu Overlay */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 text-white z-10 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="text-2xl py-4 hover:text-blue-400"
            onClick={onToggle}
          >
            About Me
          </a>
          <a
            href="#resume"
            className="text-2xl py-4 hover:text-blue-400"
            onClick={onToggle}
          >
            Resume
          </a>
          <a
            href="#skills"
            className="text-2xl py-4 hover:text-blue-400"
            onClick={onToggle}
          >
            Skills & Tools
          </a>
          <a
            href="#contact"
            className="text-2xl py-4 hover:text-blue-400"
            onClick={onToggle}
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default MenuButton;

