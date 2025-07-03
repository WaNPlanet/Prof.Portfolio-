// app/components/hero/HeroSection.tsx
import Image from "next/image";
import SocialIcons from "../socials/page";
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex-1 px-4 py-4 flex flex-col justify-between w-full max-w-7xl mx-auto">
      {/* Title + Socials */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <h1 className="text-3xl md:text-5xl font-bold">PORTFOLIO</h1>
        <SocialIcons />
      </div>

      {/* Description + Button */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed md:max-w-xl text-center md:text-left">
          Owning fewer — but better — clothes is revolutionary. A capsule wardrobe isn&apos;t just about style; it&apos;s about clarity.
        </p>
        <Link 
          href="/components/projects" 
          className="bg-black text-white px-6 py-2 text-sm md:text-base rounded hover:bg-gray-800 transition inline-block"
        >
          Explore Now
        </Link>
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
  );
}