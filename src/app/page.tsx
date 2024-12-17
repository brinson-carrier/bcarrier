"use client";

import Contact from "@/components/Contact";
import Header from "@/components/Header";
import SlidingMenu from "@/components/SlidingMenu";
import { useState } from "react";

export default function Home() {

  const email = "BrinsonCarrier@gmail.com";
  const LI_URL = "https://linkedin.com/in/brinson-carrier-3aa612342";

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const handleSectionSelect = (section: string) => {
    setSelectedSection(section); // Update the currently selected section
    console.log('Selected Section:', section); // For debugging purposes
  };

  return (
<div className="relative overflow-hidden h-screen">
  {/* Sliding Menu */}
  <SlidingMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} onSectionSelect={handleSectionSelect} />

  {/* Page Layout */}
  <div 
    className={`flex flex-col h-screen transform transition-transform duration-300 ${menuOpen ? 'translate-x-64' : ''}`}
  >
    {/* Header */}
    <header className="flex items-center
    min-h-[40px]
    max-h-[60px]
    h-[10vh]
    shadow-md">
      <Header name={"Brinson Carrier"} onMenuClick={ toggleMenu }/>
    </header>

    {/* Main Content */}
    <main className="flex-1 bg-gray-200 overflow-hidden text-black">
      {selectedSection === 'resume' && <p>This is the Resume Section</p>}
      {selectedSection === 'about me' && <p>This is the About Me Section</p>}
      {selectedSection === 'education' && <p>This is the Education Section</p>}
        
      {!selectedSection && <p>content</p>}
    </main>
    <Contact email={email} LI_URL={LI_URL} />
  </div>
</div>

  );
}