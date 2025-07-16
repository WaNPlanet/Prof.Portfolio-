'use client';
import Image from 'next/image';
import Navbar from "../navbar/page";
import { motion } from 'framer-motion';
import { FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi';
import { useState } from 'react';
import Link from "next/link";
import { blogPosts } from '../../lib/blogData';

const BlogPage = () => {
  const categories = ['All', 'Design', 'Development', 'Case Studies'];
  const [activeCategory, setActiveCategory] = useState('All');

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Subscription failed');
      }

      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
      
      // Reset message after 5 seconds
      setTimeout(() => setMessage(''), 5000);
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Failed to subscribe');
    }
  };

  const featuredPost = blogPosts[0] || {
    title: "Featured Post",
    excerpt: "Featured post excerpt",
    date: new Date().toLocaleDateString(),
    readTime: "5 min read",
    image: "/default-blog.jpg",
    slug: "featured-post"
  };

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
                src={featuredPost.image as string}
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
                  {categories[1]}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2 text-gray-500">
                  <FiCalendar className="text-sm" />
                  <span className="text-sm">
                    {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <FiClock className="text-sm" />
                  <span className="text-sm">5 min read</span>
                </div>
              </div>
              <Link href={`/blog/${featuredPost.slug}`}>
                <button className="mt-8 flex items-center gap-2 text-black font-medium group cursor-pointer">
                  Read full article
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(1).map(post => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={featuredPost.image as string}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mb-4">
                    {categories[1]}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-5">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <div className="flex items-center gap-1 text-black font-medium group cursor-pointer">
                      Read
                      <FiArrowRight className="transition-transform group-hover:translate-x-1 text-sm" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
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
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
              required
              className="flex-1 px-4 py-3 text-white border border-white bg-transparent rounded-lg"
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all"
            >
              {status === 'loading' ? 'Sending...' : 'Subscribe'}
            </button>
          </form>
          {message && <p className="mt-4 text-sm text-gray-300">{message}</p>}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;