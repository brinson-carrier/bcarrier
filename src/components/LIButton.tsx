"use client";

import React from "react";
import Image from "next/image";
import LinkedInIcon from "/public/images/LI-In-Bug.png";

interface LIButtonProps {
  url: string;
}

const LIButton: React.FC<LIButtonProps> = ({ url }) => {
  return (
    <button>
        <a href={url} target="_blank" rel="noopener noreferrer" >
          <Image 
            src={LinkedInIcon}
            alt="LinkedIn" 
            className="w-full max-w-[64px] min-w-[40px] h-auto"

          />
          </a>
    </button>
  );
};

export default LIButton;
