"use client";

import React from "react";
import Image from "next/image";
import LinkedInIcon from "/public/images/email-icon.png";

interface EmailButtonProps {
  email: string;
}

const EmailButton: React.FC<EmailButtonProps> = ({ email }) => {
  return (
    <button>
        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" >
          <Image 
            src={LinkedInIcon}
            alt="BrinsonCarrier@gmail.com" 
            className="w-full max-w-[64px] min-w-[40px] h-auto"
          />
          </a>
    </button>
  );
};

export default EmailButton;
