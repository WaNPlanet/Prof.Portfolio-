'use client';
import { useState, useCallback } from "react";
import { HiMenu } from "react-icons/hi";
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback((id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleNavClick = (path: string, id?: string) => {
    setMenuOpen(false);
    if (window.location.pathname === '/') {
      // If on homepage, scroll to section
      if (id) handleScroll(id);
    } else {
      // If on another page, navigate to homepage with hash
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-gray-300 text-sm md:text-base relative">
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          <HiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Desktop Navigation - Left */}
      <div className="hidden md:flex space-x-4">
        <button 
          onClick={() => handleNavClick('/', '#about')} 
          className="hover:underline px-2 py-1"
        >
          About
        </button>
        <Link href="/components/blog" className="hover:underline px-2 py-1">
          Blog
        </Link>
      </div>

      {/* Logo */}
      <button 
        onClick={() => handleNavClick('/', 'home')} 
        className="text-lg md:text-xl font-semibold px-2 py-1"
      >
        OFOSUHENE
      </button>

      {/* Desktop Navigation - Right */}
      <div className="flex space-x-4">
        <Link href="/components/projects" className="hover:underline px-2 py-1">
          Projects
        </Link>
        <button 
          onClick={() => handleNavClick('/', '#contact')} 
          className="hover:underline px-2 py-1"
        >
          Contact
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-10 md:hidden">
          <div className="flex flex-col px-4 py-2 space-y-2 border-t border-gray-300">
            <button 
              onClick={() => handleNavClick('/', 'about')} 
              className="hover:underline text-left px-2 py-1"
            >
              About
            </button>
            <Link 
              href="/components/blog" 
              className="hover:underline text-left px-2 py-1"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}