"use client";

import React from "react";
import Image from "next/image";
import GitHubLogo from "/public/images/github-mark-white.png";

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
            className="w-full max-w-[64px] min-w-[40px] h-auto"
          />
          </a>
    </button>
  );
};

export default GHButton;