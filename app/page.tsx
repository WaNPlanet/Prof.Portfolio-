'use client';

import { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

export default function VeloraPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="w-full h-screen bg-[#e4e4e4] font-sans text-black overflow-hidden">
      <div className="flex flex-col h-full">
        {/* Navigation */}
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
            <a href="#" className="hover:underline">Blog</a>
          </div>

          {/* Logo */}
          <div className="text-lg md:text-xl font-semibold">OFOSUHENE</div>

          {/* Right links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Account</a>
            <a href="#" className="hover:underline">Cart</a>
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

        {/* Main Section */}
        <section className="flex-1 px-4 py-4 flex flex-col justify-between w-full max-w-7xl mx-auto">
          {/* Title + Socials */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <h1 className="text-3xl md:text-5xl font-bold">PORTFOLIO</h1>
            <div className="flex gap-4 text-gray-600 text-sm md:text-base">
              <a href="#" aria-label="Facebook" className="hover:text-black">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-black">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-black">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-black">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Description + Button */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed md:max-w-xl text-center md:text-left">
              Owning fewer — but better — clothes is revolutionary. A capsule wardrobe isn&apos;t just about style; it&apos;s about clarity.
            </p>
            <button className="bg-black text-white px-6 py-2 text-sm md:text-base rounded hover:bg-gray-800 transition">
              Explore Now
            </button>
          </div>

          {/* Hero Image */}
          <div className="w-full mt-4">
            <Image
              src="/hero.png"
              alt="Minimal Style"
              width={1000}
              height={400}
              className="rounded-xl w-full object-cover h-[160px] md:h-[270px]"
              priority
            />
          </div>
        </section>
      </div>
    </main>
  );
}
