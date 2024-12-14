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
        min-w-[15%] 
        max-w-[100px]  
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
