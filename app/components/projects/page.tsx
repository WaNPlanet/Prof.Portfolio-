'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from "../navbar/page";
import Link from "next/link";
import Modal from 'react-modal';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  hoverImage: string;
  link: string;
  category: 'frontend' | 'cad' | 'arduino' | 'fullstack' | 'UI';
  extraImages?: string[];
}

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeMedia, setActiveMedia] = useState<string | null>(null);
  const [isModalAppElementSet, setIsModalAppElementSet] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Modal.setAppElement(document.body);
      setIsModalAppElementSet(true);
    }
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Template',
      description: 'This platform serves as a dynamic portfolio showcasing a diverse collection of original projects.',
      image: '/projects/portfolio (1).png',
      hoverImage: '/projects/portfolio (2).png',
      link: 'https://wanplanet.github.io/Portfolio/',
      category: 'frontend'
    },
    {
      id: 2,
      title: 'Art Shop Platform',
      description: 'This platform showcases an eclectic collection of original artworks, prints, and handmade crafts, all presented in a visually stunning layout. Users can navigate through various categories, view artist profiles, and purchase unique pieces with ease.',
      image: '/projects/art.png',
      hoverImage: '/projects/ecommerce-hover.png',
      link: 'https://wanplanet.github.io/art-shop/',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'Energy Website',
      description: 'An innovative front-end website dedicated to promoting sustainable energy solutions.',
      image: '/projects/energy.png',
      hoverImage: '/projects/portfolio-hover.png',
      link: 'https://energy-six.vercel.app/',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'Planet Speaks',
      description: 'Discover the art of web development with WebDesign Pro, a cutting-edge front-end website that showcases the power of design and functionality. This platform emphasizes clean aesthetics, intuitive navigation, and responsive layouts, ensuring an optimal user experience across all devices.',
      image: '/projects/planetSpeaks.png',
      hoverImage: '/projects/mobile-hover.png',
      link: 'https://main-site-murex-psi.vercel.app/',
      category: 'frontend'
    },
    {
      id: 5,
      title: 'Thy Homes',
      description: 'An elegantly designed front-end website that redefines real estate exploration. This platform combines stunning visuals with intuitive navigation, allowing users to effortlessly discover their dream homes.',
      image: '/projects/homes.webp',
      hoverImage: '/projects/homes-hover.webp',
      link: 'https://wanplanet.github.io/ThyHomes/',
      category: 'frontend'
    },
    {
      id: 6,
      title: 'Arduino Programming',
      description: 'Expertly programmed using Arduino. This innovative project harnesses the power of microcontroller technology to provide precise and responsive control of motors, enabling a wide range of applications from robotics to DIY projects.',
      image: '/projects/Arduino.jpg',
      hoverImage: '/projects/Arduino-Hover.mp4',
      extraImages: ['/projects/Arduino.jpg', '/projects/Arduino-3.png'],
      link: '#',
      category: 'arduino'
    },
    {
      id: 7,
      title: 'CAD Design',
      description: 'Meticulously crafted in Onshape. This state-of-the-art machine combines cutting-edge technology with a sleek, modern design, making it an essential tool for makers, hobbyists, and professionals alike.',
      image: '/projects/3d-Printer.jpg',
      hoverImage: '/projects/3d-Printer-Hover.jpg',
      extraImages: ['/projects/3d-Printer.jpg', '/projects/3dPrinter-2.png'],
      link: '#',
      category: 'cad'
    },
    {
      id: 8,
      title: 'CAD Design',
      description: 'Crafted in Fusion 360, this stunning piece features smooth, flowing lines that effortlessly enhance any living space. ',
      image: '/projects/Sofa.png',
      hoverImage: '/projects/Sofa-Hover.png',
      extraImages: ['/projects/Sofa.png', '/projects/P19D.png'],
      link: '#',
      category: 'cad'
    },
    {
      id: 9,
      title: 'UI',
      description: 'A professional logo and branding package crafted with Adobe Illustrator and Photoshop. This project emphasizes clean lines, bold typography, and versatile design suitable for modern businesses.',
      image: '/projects/T.F.png',
      hoverImage: '/projects/TFH.png',
      extraImages: ['/projects/logo.png', '/projects/branding-guide.png'],
      link: '#',
      category: 'UI'
    },
     {
      id: 10,
      title: 'UI',
      description: 'A professional logo and branding package crafted with Adobe Illustrator and Photoshop. This project emphasizes clean lines, bold typography, and versatile design suitable for modern businesses.',
      image: '/projects/SKA.png',
      hoverImage: '/projects/SKAH.png',
      extraImages: ['/projects/logo.png', '/projects/branding-guide.png'],
      link: '#',
      category: 'UI'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Fullstack' },
    { id: 'cad', name: 'CAD' },
    { id: 'arduino', name: 'Arduino' },
    { id: 'UI', name: 'UI' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setActiveMedia(project.hoverImage);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
    setActiveMedia(null);
  };

  const handleProjectClick = (project: Project) => {
    if (project.category === 'frontend' || project.category === 'fullstack') return;
    openModal(project);
  };

  const renderProjectLink = (project: Project) => {
    if (project.category === 'frontend' || project.category === 'fullstack') {
      return (
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col h-full"
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          {renderProjectContent(project)}
        </Link>
      );
    } else {
      return (
        <div
          onClick={() => handleProjectClick(project)}
          className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col h-full cursor-pointer"
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          {renderProjectContent(project)}
        </div>
      );
    }
  };

  const renderProjectContent = (project: Project) => (
    <>
      <div className="relative w-full h-48 md:h-64 aspect-video">
        <Image
          src={hoveredProject === project.id ? project.hoverImage : project.image}
          alt={project.title}
          fill
          className="object-contain transition-all duration-300 bg-gray-100 p-2"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 flex-1">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors self-start">
            {project.category === 'frontend' || project.category === 'fullstack' ? 'View details →' : 'View project →'}
          </span>
          <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">
            {project.category}
          </span>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans text-black">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col justify-between w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-6">
          <h1 className="text-3xl md:text-5xl font-bold">PROJECTS</h1>
          <div className="text-base md:text-lg text-gray-700">Explore our innovative solutions</div>
        </div>

       <div className="mb-8">
  <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-3">
    {categories.map((category) => (
      <button
        key={category.id}
        onClick={() => setActiveCategory(category.id)}
        className={`
          px-3 py-1.5 md:px-4 md:py-2 
          rounded-full 
          text-xs sm:text-sm md:text-base 
          transition-all duration-200
          whitespace-nowrap
          ${
            activeCategory === category.id
              ? 'bg-black text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
          }
        `}
      >
        {category.name}
      </button>
    ))}
  </div>
</div>
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id}>{renderProjectLink(project)}</div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

      {isModalAppElementSet && selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Project Modal"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="w-screen h-screen p-4 flex flex-col bg-white overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-grow overflow-hidden">
              {activeMedia?.endsWith('.mp4') ? (
                <video
                  src={activeMedia}
                  controls
                  autoPlay
                  loop
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image
                  src={activeMedia || ''}
                  alt={selectedProject.title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {selectedProject.extraImages && (
              <div className="flex gap-4 mt-4 overflow-x-auto">
                {selectedProject.extraImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="w-24 h-24 cursor-pointer border border-gray-300 hover:border-indigo-600 rounded overflow-hidden"
                    onClick={() => setActiveMedia(img)}
                  >
                    <Image
                      src={img}
                      alt={`Extra view ${idx + 1}`}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4">
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      <style jsx global>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: white;
          padding: 0;
          border: none;
          outline: none;
          overflow: hidden;
          width: 100vw;
          height: 100vh;
          z-index: 1001;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          z-index: 1000;
        }
      `}</style>
    </div>
  );
}
