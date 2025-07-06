
import Image from 'next/image';
import { motion } from 'framer-motion';


const DEFAULT_LOGO = '/clients/default-logo.png';

interface Testimonial {
  name: string;
  logo?: string;
  quote: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Acme Corp",
    logo: "/SOQ.jpg",
    quote: "Their attention to detail transformed our digital presence completely.",
    role: "Chief Marketing Officer",
  },
  {
    name: "Stellar Designs",
    logo: "/kumi.jpeg",
    quote: "Exceptional work that exceeded all our expectations and deadlines.",
    role: "Accountant",
  },
  {
    name: "Bright Tech",
    logo: "/h2.jpg",
    quote: "They delivered ahead of time and nailed every requirement.",
    role: "Head of Product",
  },
  {
    name: "Neo Solutions",
    logo: "/h3.jpg",
    quote: "Reliable, smart, and efficient. Highly recommended!",
    role: "CTO",
  },
].map(t => ({
  ...t,
  logo: t.logo || DEFAULT_LOGO
}));

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans text-black">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col justify-between w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-12">
          <h1 className="text-3xl md:text-5xl font-bold">CLIENTS</h1>
          <p className="text-base md:text-lg text-gray-700">
            Trusted by innovative brands worldwide
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="flex flex-col gap-12">
          {[0, 2].map((start, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {testimonials.slice(start, start + 2).map((t, i) => (
                <motion.div
                  key={`${t.name}-${i + start}`}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col justify-between h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-5">
                    {/* Enlarged logo */}
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-xl flex items-center justify-center p-2">
                     <Image
  src={t.logo || DEFAULT_LOGO} 
  alt={`${t.name} logo`}
  width={96}
  height={96}
  className="object-contain w-full h-full"
  onError={(e) => {
    (e.target as HTMLImageElement).src = DEFAULT_LOGO;
  }}
/>
</div>

                    {/* Text */}
                    <div className="flex-1">
                      <p className="text-base italic text-gray-700 mb-3 line-clamp-4">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="border-t pt-2 border-gray-200">
                        <p className="text-base font-semibold text-gray-800">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
