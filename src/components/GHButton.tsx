"use client";

import React from "react";
import Image from "next/image";
import GitHubLogo from "/public/images/github-mark-white.png"

interface GHButtonProps {
  url: string;
}

const GHButton: React.FC<GHButtonProps> = ({ url }) => {
  return (
    <button>
        <a href={url} target="_blank" rel="noopener noreferrer" >
          <Image 
            src={GitHubLogo}
            alt="GitHub" 
            width={24} 
            height={24} 
            className="w-16 h-14" 
          />
          </a>
    </button>
  );
};

export default GHButton;