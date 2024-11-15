"use client";
import Link from "next/link";
const NavbarFunc = () => {
  return (
    <div
      className="w-full flex items-center py-4 px-6 md:px-12 bg-slate-950 justify-between fixed top-0 left-0 z-50"
    >
      <Link href="/">
        <em className="block-inline font-bold lg:text-3xl text-2xl">MY PORTFOLIO</em>
        <em className="lg:text-sm pl-2">BY MUHAMMAD ANUS AHMED</em>
      </Link>

      <div
        className="font-light flex gap-8 md:text-lg list-none"
      >
        <Link
          href="/"
          className="hover:bg-slate-100/50 hover:rounded-lg px-4 py-2"
        >
          Home
        </Link>
        <Link
          href="/resume"
          className="cursor-pointer hover:bg-slate-100/50 hover:rounded-lg px-4 py-2"
        >
          Resume
        </Link>
        <Link
          href="/#experience" 
          className="hover:bg-slate-100/50 hover:rounded-lg px-4 py-2 "
        >
          Experience
        </Link>
        <Link
          href="/about"
          className="cursor-pointer hover:bg-slate-100/50 hover:rounded-lg px-4 py-2"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="cursor-pointer hover:bg-slate-100/50 hover:rounded-lg px-4 py-2"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavbarFunc;
