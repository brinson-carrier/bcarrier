"use client";
import React from 'react';
import CoolButton from './CoolButton';

interface HeaderProps {
  name: string;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ name, onMenuClick }) => {
  return (
    <header className="flex items-center w-full min-h-[50px] max-h-[115px] h-[10vh] bg-blue-500 shadow-md fixed top-0 left-0">
      <CoolButton text={'☰'} onClick={onMenuClick}/>
      <h1 className="flex-grow text-left text-white text-xl font-bold pl-4">
        {name}
      </h1>
    </header>
  );
};

export default Header;
