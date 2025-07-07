'use client';
import Image from 'next/image';

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans text-black" id='#about'>
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col justify-between w-full">
        {/* Header Section - Matches Projects page */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-8">
          <h1 className="text-3xl md:text-5xl font-bold">ABOUT</h1>
          <div className="text-base md:text-lg text-gray-700">
            Crafting digital experiences with purpose
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Profile Image */}
          <div className="w-full lg:w-1/3 relative aspect-square rounded-xl overflow-hidden shadow-md">
            <Image
              src="/Me.jpg" 
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-2/3 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Hello, I&apos;m OFOSUHENE KYERE
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              With over 5+ years in digital design and development, I specialize in creating 
              meaningful experiences that blend aesthetics with functionality. My approach combines 
              technical precision with creative vision to deliver solutions that make an impact.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">My Philosophy</h3>
              <p className="text-gray-600 leading-relaxed">
                I believe in minimal, purposeful design that serves the user first. Every pixel, 
                interaction, and line of code should have intention behind it. Less but better.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {['UI/UX Design', 'Frontend Development', 'Responsive Design', 
                  'User Research', 'Prototyping', 'Design Systems'].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      

        {/* CTA Section - Matches Projects page */}
        <div className="mt-12 flex justify-center">
          <Link href="/components/projects">
            <button className="bg-black text-white px-6 py-2  cursor-pointer
            text-sm md:text-base rounded hover:bg-gray-800 transition">
            View My Work
          </button>
          </Link>
        
         </div>
      </div>
    </div>
  );
}