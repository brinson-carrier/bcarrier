"use client";

import React from "react";

interface CoolButtonProps {
  text: string;
  onClick?: () => void;
}

const CoolButton: React.FC<CoolButtonProps> = ({ text, onClick }) => {
  return (
    <button 
        onClick={onClick} 
        className="flex-shrink-0 
        min-w-[40px] 
        max-w-[60px]
        w-[10vw]
        min-h-[40px]
        max-h-[60px]
        h-[10vh]
        flex 
        items-center 
        justify-center 
        bg-white 
        text-black 
        hover:bg-gray-200
        font-bold pl-4"
      >
        {text}
      </button>
  );
};

export default CoolButton;
