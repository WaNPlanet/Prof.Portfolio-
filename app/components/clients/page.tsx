'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';

// Import only motion.div dynamically
const MotionDiv = dynamic(() =>
  import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

const DEFAULT_LOGO = '/clients/default-logo.png';

const team = [ 
  {
    name: "Samuel Quaye",
    image: "SOQ.jpg", 
    description: "Experienced Business Analyst with 5 years of experience", 
    role: "Business Analyst",
  },
  {
    name: "Kodjo Kumi",
    image: "kumi.jpeg",
    description: "Auditing specializing in accessibility",
    role: "Senior Auditor",
  },
  {
    name: "Mike Johnson",
    image: "h2.jpg",
    description: "Project manager with agile methodology expertise",
    role: "Project Manager",
  },
  {
    name: "John Williams",
    image: "h3.jpg",
    description: "Frontend developer focused on React and Next.js",
    role: "Frontend Developer",
  },
].map(t => ({
  ...t,
  image: t.image || DEFAULT_LOGO
}));

export default function TeamSection() {
  return (
    <div className="min-h-screen bg-[#0f1b2b] text-white font-sans py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-8">
          <h1 className="text-3xl md:text-5xl font-bold">TESTIMONIALS</h1>
          <div className="text-base md:text-lg text-white">
             What client&apos;s have to say
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {team.map((member, index) => (
            <MotionDiv
              key={index}
              className="bg-[#16212f] p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col md:flex-row gap-4"
              whileHover={{ y: -5 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-xl object-cover w-40 h-40"
                unoptimized
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-lg text-gray-300 mb-3">{member.role}</p>
                <p className="text-lg text-gray-400 mb-4 line-clamp-4">{member.description}</p>
                <div className="flex gap-3">
                  <a href="#" className="text-white hover:text-gray-400">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-white hover:text-gray-400">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                  <a href="#" className="text-white hover:text-gray-400">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-white hover:text-gray-400">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
}