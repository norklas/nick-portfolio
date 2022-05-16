import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-8 sm:flex sm:flex-row sm:items-center sm:justify-between text-mystic">
      <div className="hidden sm:flex sm:flex-row sm:gap-x-4">
        <Link href="#">
          <a className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl">
            <span className="link link-underline link-underline-black">
              Home
            </span>
          </a>
        </Link>
        <Link href="#skills">
          <a className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl">
            <span className="link link-underline link-underline-black">
              Skills
            </span>
          </a>
        </Link>
        <Link href="#projects">
          <a className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl">
            <span className="link link-underline link-underline-black">
              Projects
            </span>
          </a>
        </Link>
        <Link href="#contact">
          <a className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl">
            <span className="link link-underline link-underline-black">
              Contact
            </span>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
