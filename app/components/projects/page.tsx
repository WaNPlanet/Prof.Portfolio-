'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from "../navbar/page";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  hoverImage: string;
  link: string;
}

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A modern online shopping experience with seamless checkout and product discovery',
      image: '/projects/art.png',
      hoverImage: '/projects/ecommerce-hover.png',
      link: 'https://wanplanet.github.io/art-shop/'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Elegant showcase for creative professionals and agencies',
      image: '/projects/energy.png',
      hoverImage: '/projects/portfolio-hover.jpg',
      link: 'https://energy-six.vercel.app/'
    },
    {
      id: 3,
      title: 'Mobile App',
      description: 'Cross-platform application for iOS and Android with native performance',
      image: '/projects/planetSpeaks.png',
      hoverImage: '/projects/mobile-hover.png',
      link: 'https://main-site-murex-psi.vercel.app/'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans text-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col justify-between w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-6">
          <h1 className="text-3xl md:text-5xl font-bold">PROJECTS</h1>
          <div className="text-base md:text-lg text-gray-700">
            Explore our innovative solutions
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link 
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Container - Improved aspect ratio */}
              <div className="relative w-full h-48 md:h-64 aspect-video">
                <Image
                  src={hoveredProject === project.id ? project.hoverImage : project.image}
                  alt={project.title}
                  fill
                  className="object-contain transition-all duration-300 bg-gray-100 p-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectPosition: 'center center'
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 flex-1">{project.description}</p>
                <span className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors self-start cursor-pointer">
                  View details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}