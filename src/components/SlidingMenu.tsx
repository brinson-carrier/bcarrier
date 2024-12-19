"use client";

import React from 'react';

interface SlidingMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSectionSelect: (section: string) => void;
}

const SlidingMenu: React.FC<SlidingMenuProps> = ({ isOpen, onClose, onSectionSelect }) => {
  const handleClick = (section: string) => {
    onSectionSelect(section); // Tell the parent which section was selected
    onClose(); // Close the sliding menu
  };
  return (
    <aside 
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <ul className="mt-16 space-y-4 px-6">
        <li><button 
          className="w-full text-left py-2 hover:bg-gray-700"
          onClick={() => handleClick('resume')}>
            Resume
        </button></li>
        <li><button 
        className="w-full text-left py-2 hover:bg-gray-700"
        onClick={() => handleClick('about me')}>
          About Me
        </button></li>
        {/* <li><button className="w-full text-left py-2 hover:bg-gray-700"
        onClick={() => handleClick('education')}>
          Education</button></li> */}
      </ul>
    </aside>
  );
};

export default SlidingMenu;
