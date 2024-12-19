"use client";

import React from "react";

interface CoolButtonProps {
  isOpen: boolean;
  onClick?: () => void;
}

const CoolButton: React.FC<CoolButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="relative flex-shrink-0 
        w-[64px] 
        h-[64px] 
        flex 
        flex-col 
        justify-center 
        items-center 
        bg-transparent 
        focus:outline-none"
    >
      <div 
        className={`absolute 
          bg-white 
          mt-1 
          mb-1 
          h-1 
          w-8 
          rounded 
          transition-transform 
          duration-900 
          ${isOpen ? 'rotate-45' : '-translate-y-2'}`}
        style={{ transformOrigin: 'center' }}
      ></div>
      <div 
        className={`absolute 
          bg-white 
          mt-1 
          mb-1 
          h-1 
          w-8 
          rounded 
          transition-opacity 
          duration-900 
          ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      ></div>
      <div 
        className={`absolute 
          bg-white 
          mt-1 
          mb-1 
          h-1 
          w-8 
          rounded 
          transition-transform 
          duration-900 
          ${isOpen ? '-rotate-45' : 'translate-y-2'}`}
        style={{ transformOrigin: 'center' }}
      ></div>
    </button>
  );
};

export default CoolButton;
