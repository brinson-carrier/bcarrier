"use client";

import React, { useState } from "react";
import Header from "@/components/Header";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Menu Button */}
      <Header isOpen={isMenuOpen} onToggle={toggleMenu} />

      {/* Main Content */}
      <main
        className={`transition-opacity duration-300 ${
          isMenuOpen ? "opacity-50 pointer-events-none" : "opacity-100"
        }`}
      >
        <p>Main area testing</p>
      </main>
    </div>
  );
}