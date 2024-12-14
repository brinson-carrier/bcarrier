"use client";

import Header from "@/components/Header";
import MenuButton from "@/components/MenuButton";

export default function Home() {

  return (
    <div>
      <div className="relative">
        <Header name={"first last"} onMenuClick={() => {
          console.error('Menu button clicked but not implemented.');
        } } />
      </div>
      <main className="pt-[10vh] min-h-screen"> {/* Push main content below the fixed header */}
        <p>Page calling menu button</p>
        <MenuButton />
      </main>
    </div>
  );
}