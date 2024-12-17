"use client";

import React from "react";
import Image from "next/image";

interface LIButtonProps {
  url: string;
}

const LIButton: React.FC<LIButtonProps> = ({ url }) => {
  return (
    <button>
        <a href={url} target="_blank" rel="noopener noreferrer" >
          <Image 
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/LI-In-Bug.png`} 
            alt="LinkedIn" 
            width={24} 
            height={24} 
            className="w-16 h-14" 
          />
          </a>
    </button>
  );
};

export default LIButton;
