'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Acme Corp",
    logo: "/clients/acme-logo.png",
    quote: "Their attention to detail transformed our digital presence completely.",
    role: "Chief Marketing Officer",
  },
  {
    name: "Stellar Designs",
    logo: "/clients/stellar-logo.png",
    quote: "Exceptional work that exceeded all our expectations and deadlines.",
    role: "Product Director",
  },
  {
    name: "Novatech",
    logo: "/clients/novatech-logo.png",
    quote: "The perfect blend of creativity and technical expertise we needed.",
    role: "CEO",
  },
  {
    name: "Quantum",
    logo: "/clients/quantum-logo.png",
    quote: "Delivered exactly what we envisioned, only better.",
    role: "CTO",
  },
  {
    name: "Horizon",
    logo: "/clients/horizon-logo.png",
    quote: "Consistently impressive work across multiple projects.",
    role: "Creative Director",
  },
  {
    name: "Aurora",
    logo: "/clients/aurora-logo.png",
    quote: "Brought fresh perspective to our digital strategy.",
    role: "Head of Digital",
  }
];

export default function ClientsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Show only one card on mobile, two on desktop
  const visibleTestimonials = isMobile 
    ? [testimonials[currentIndex]] 
    : [testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]];

  return (
    <div className="min-h-screen bg-[#e4e4e4] font-sans text-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-8 px-4">
          <h1 className="text-3xl md:text-5xl font-bold">CLIENTS</h1>
          <div className="text-base md:text-lg text-gray-700 text-center md:text-left">
            Trusted by innovative brands worldwide
          </div>
        </div>

        {/* Testimonial Cards Container */}
        <div className={`relative ${isMobile ? 'h-[420px]' : 'h-[380px]'} overflow-hidden px-4`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute w-full h-full"
              initial={{ opacity: 0, x: isMobile ? 50 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isMobile ? -50 : -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-6 h-full`}>
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.name}-${index}`}
                    className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col"
                    whileHover={{ y: isMobile ? 0 : -5 }} // Disable hover effect on mobile
                  >
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start flex-1">
                      <div className="w-20 h-20 md:w-24 md:h-24 relative bg-gray-50 rounded-lg flex items-center justify-center p-2 md:p-3 mx-auto md:mx-0">
                        <Image
                          src={testimonial.logo}
                          alt={testimonial.name}
                          width={isMobile ? 80 : 96}
                          height={isMobile ? 80 : 96}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <blockquote className="text-base md:text-lg italic text-gray-600 mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="mt-auto">
                          <p className="font-medium text-gray-800">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2 px-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}