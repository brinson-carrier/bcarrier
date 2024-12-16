"use client";

import React from 'react';

interface SlidingMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SlidingMenu: React.FC<SlidingMenuProps> = ({ isOpen, onClose }) => {
  return (
    <aside 
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white hover:text-red-500"
      >
        ✕ {/* Close button */}
      </button>
      <ul className="mt-16 space-y-4 px-6">
        <li><button className="w-full text-left py-2 hover:bg-gray-700">Option 1</button></li>
        <li><button className="w-full text-left py-2 hover:bg-gray-700">Option 2</button></li>
        <li><button className="w-full text-left py-2 hover:bg-gray-700">Option 3</button></li>
        <li><button className="w-full text-left py-2 hover:bg-gray-700">Option 4</button></li>
      </ul>
    </aside>
  );
};

export default SlidingMenu;
