// app/components/navbar/Navbar.tsx
'use client';
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-gray-300 text-sm md:text-base relative">
      {/* Hamburger on small screens */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          <HiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Left links for desktop */}
      <div className="hidden md:flex space-x-4">
        <a href="#" className="hover:underline">About</a>
        <a href="./components/blog" className="hover:underline">Blog</a>
      </div>

      {/* Logo */}

<Link href="/" >

<div className="text-lg md:text-xl font-semibold">OFOSUHENE</div>
</Link>
      

      {/* Right links */}   
      <div className="flex space-x-4">
        <a href="/components/projects"  className="hover:underline" >Projects</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#e4e4e4] shadow-md z-10 md:hidden">
          <div className="flex flex-col px-4 py-2 space-y-2 border-t border-gray-300">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Blog</a>
          </div>
        </div>
      )}
    </header>
  );
}