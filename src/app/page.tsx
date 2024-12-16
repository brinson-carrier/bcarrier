"use client";

import Header from "@/components/Header";
import SlidingMenu from "@/components/SlidingMenu";
import { useState } from "react";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
<div className="relative overflow-hidden h-screen">
  {/* Sliding Menu */}
  <SlidingMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

  {/* Page Layout */}
  <div 
    className={`flex flex-col h-screen transform transition-transform duration-300 ${menuOpen ? 'translate-x-64' : ''}`}
  >
    {/* Header */}
    <header className="flex items-center min-h-[50px] max-h-[115px] h-[10vh] bg-blue-500 shadow-md">
      <Header name={"first last"} onMenuClick={ toggleMenu }/>
      <h1 className="text-white text-xl font-bold ml-4">My Page</h1>
    </header>

    {/* Main Content */}
    <main className="flex-1 bg-gray-200 overflow-hidden text-black">
      <p>content</p>
    </main>
  </div>
</div>

  );
}