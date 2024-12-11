"use client";

// import Link from "next/link";
import CoolButton from "./CoolButton";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <CoolButton text="Click Me" onClick={() => alert("Button clicked!")} />
    </div>
  );
};

export default Header;
