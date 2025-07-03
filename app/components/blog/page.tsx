'use client';
import Image from 'next/image';
import Navbar from "../navbar/page";
import { motion } from 'framer-motion';
import { FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi';
import { useState } from 'react';
import Link from "next/link";

const BlogPage = () => {
  const categories = ['All', 'Design', 'Development', 'Case Studies'];
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredPost = {
    id: 0,
    title: "Redefining Digital Experiences Through Thoughtful Design",
    excerpt: "How we're pushing boundaries in user experience by combining minimalist aesthetics with cutting-edge functionality.",
    category: "Design",
    date: "June 2, 2024",
    readTime: "6 min read",
    image: "/blog/featured-post.jpg"
  };

  const blogPosts = [
    {
      id: 1,
      title: "The Psychology of Space in Digital Interfaces",
      excerpt: "Exploring how negative space influences user perception and engagement.",
      category: "Design",
      date: "May 28, 2024",
      readTime: "5 min read",
      image: "/blog/psychology-space.jpg"
    },
    // ... (other posts from previous example)
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans text-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Perspectives on design, technology, and creating meaningful digital experiences
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="mb-20 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-full min-h-[400px]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-black text-white text-xs rounded-full">
                  Featured
                </span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2 text-gray-500">
                  <FiCalendar className="text-sm" />
                  <span className="text-sm">{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <FiClock className="text-sm" />
                  <span className="text-sm">{featuredPost.readTime}</span>
                </div>
              </div>
              <Link href="./blogread">
              <button className="mt-8 flex items-center gap-2 text-black font-medium group cursor-pointer">
                Read full article
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
              </Link>
              
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map(category => (
              <motion.button
                key={category}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === category 
                    ? 'bg-black text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-5">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{post.date}</span>
                    <button className="flex items-center gap-1 text-black font-medium group cursor-pointer">
                      Read
                      <FiArrowRight className="transition-transform group-hover:translate-x-1 text-sm" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-black text-white rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Subscribe to receive our latest articles and insights directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-lgtext-white border border-white bg-transparent rounded-lg"
            />
            <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;