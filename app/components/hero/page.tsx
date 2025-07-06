import Image from "next/image";
import SocialIcons from "../socials/page";
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen px-4 py-8 flex flex-col justify-between w-full max-w-7xl mx-auto">
      
      {/* Title + Socials */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <h1 className="text-3xl md:text-5xl font-bold">PORTFOLIO</h1>
        <SocialIcons />
      </div>

      {/* Description + Button */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-6">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed md:max-w-xl text-center md:text-left">
          Simplicity is the soul of efficiency. The best way to predict the future is to invent it.
        </p>
        <Link 
          href="/components/projects" 
          className="bg-black text-white px-6 py-2 text-sm md:text-base rounded hover:bg-gray-800 transition inline-block"
        >
          Explore Now
        </Link>
      </div>

      {/* Hero Image - Resized for full screen fit */}
      <div className="w-full mt-6 h-64 md:h-80 relative">
        <Image
          src="/hero.png"
          alt="Minimal Style"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
          priority
        />
      </div>
    </section>
  );
}
