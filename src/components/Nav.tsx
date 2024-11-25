"use client";

import { useState } from "react";
import Link from "next/link";

const NavbarFunc = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full flex items-center py-4 px-6 bg-slate-950 justify-between fixed top-0 left-0 z-50">
      {/* Website Logo */}
      <Link href="/">
        <div>
          <p className="font-bold italic lg:text-3xl text-md text-white">MY PORTFOLIO</p>
          <p className="text-xs italic lg:text-sm text-gray-400">MUHAMMAD ANUS AHMED</p>
        </div>
      </Link>

      
      <div className="hidden lg:flex gap-8 font-light text-lg text-white">
        <Link href="/" className="hover:bg-slate-100/50 hover:rounded-lg px-4 py-2">
          Home
        </Link>
        <Link href="/resume" className="hover:bg-slate-100/50 hover:rounded-lg px-4 py-2">
          Resume
        </Link>
        <Link href="/#experience" className="hover:bg-slate-100/50 hover:rounded-lg px-4 py-2">
          Experience
        </Link>
        <Link href="/about" className="hover:bg-slate-100/50 hover:rounded-lg px-4 py-2">
          About
        </Link>
        <Link href="/contact" className="hover:bg-slate-100/50 hover:rounded-lg px-4 py-2">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        
      >
        {/* Simple Hamburger Icon */}
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-slate-950 text-white p-4">
          <ul className="flex flex-col gap-4 font-light text-lg">
            <li>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/resume" onClick={() => setIsMobileMenuOpen(false)}>
                Resume
              </Link>
            </li>
            <li>
              <Link href="/#experience" onClick={() => setIsMobileMenuOpen(false)}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarFunc;
