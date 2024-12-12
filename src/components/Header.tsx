"use client";

// import Link from "next/link";
import CoolButton from "./CoolButton";

const Header = () => {
  return (
    <div className="flex flex-wrap w-full gap-4">
      <div className="flex-1 min-w-[150px]">
        <CoolButton text="Button 1" onClick={() => console.log("Button 1 clicked")} />
      </div>
      <div className="flex-1 min-w-[150px]">
        <CoolButton text="Button 2" onClick={() => console.log("Button 2 clicked")} />
      </div>
      <div className="flex-1 min-w-[150px]">
        <CoolButton text="Button 3" onClick={() => console.log("Button 3 clicked")} />
      </div>
    </div>
  );
};

export default Header;
