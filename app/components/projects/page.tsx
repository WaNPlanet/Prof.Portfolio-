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
  category: 'frontend' | 'cad' | 'arduino' | 'fullstack';
}

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A modern online shopping experience with seamless checkout and product discovery',
      image: '/projects/art.png',
      hoverImage: '/projects/ecommerce-hover.png',
      link: 'https://wanplanet.github.io/art-shop/',
      category: 'frontend'
    },
    {
      id: 2,
      title: 'Energy Website',
      description: 'Elegant showcase for creative professionals and agencies',
      image: '/projects/energy.png',
      hoverImage: '/projects/portfolio-hover.png',
      link: 'https://energy-six.vercel.app/',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'Mobile App',
      description: 'Cross-platform application for iOS and Android with native performance',
      image: '/projects/planetSpeaks.png',
      hoverImage: '/projects/mobile-hover.png',
      link: 'https://main-site-murex-psi.vercel.app/',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'Thy Homes',
      description: 'Cross-platform application for iOS and Android for real estate',
      image: '/projects/homes.webp',
      hoverImage: '/projects/homes-hover.webp',
      link: 'https://wanplanet.github.io/ThyHomes/',
      category: 'frontend'
    },
    {
      id: 5,
      title: 'CAD Design',
      description: 'Precision engineering design for mechanical components',
      image: '/projects/Arduino.jpg',
      hoverImage: '/projects/Arduino-Hover.mp4',
      link: '#',
      category: 'arduino'
    },
    {
      id: 6,
      title: 'CAM Simulation',
      description: 'Manufacturing process simulation and optimization',
      image: '/projects/3d-Printer.jpg',
      hoverImage: '/projects/3d-Printer-Hover.jpg',
      link: '#',
      category: 'cad'
    },
        {
      id: 7,
      title: 'CAM Simulation',
      description: 'Manufacturing process simulation and optimization',
      image: '/projects/Sofa.png',
      hoverImage: '/projects/Sofa-Hover.png',
      link: '#',
      category: 'cad'
    },
        {
      id: 8,
      title: 'CAM Simulation',
      description: 'Manufacturing process simulation and optimization',
      image: '/projects/cam1.jpg',
      hoverImage: '/projects/cam1-hover.jpg',
      link: '#',
      category: 'cad'
    },
        {
      id: 9,
      title: 'CAM Simulation',
      description: 'Manufacturing process simulation and optimization',
      image: '/projects/cam1.jpg',
      hoverImage: '/projects/cam1-hover.jpg',
      link: '#',
      category: 'cad'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Fullstack' },
    { id: 'cad', name: 'CAD' },
    { id: 'arduino', name: 'Arduino' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
        
        {/* Category Filter */}
        <div className="mb-8 align-middle">
          <div className="flex justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-black text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link 
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image Container */}
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
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors self-start cursor-pointer">
                      View details →
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">
                      {project.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}