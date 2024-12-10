import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-background text-foreground shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold">
          <Link href="/">
            <a>My Portfolio</a>
          </Link>
        </h1>
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <Link href="#about">
              <a className="hover:text-blue-500">About Me</a>
            </Link>
          </li>
          <li>
            <Link href="#resume">
              <a className="hover:text-blue-500">Resume</a>
            </Link>
          </li>
          <li>
            <Link href="#skills">
              <a className="hover:text-blue-500">Skills & Tools</a>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <a className="hover:text-blue-500">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
