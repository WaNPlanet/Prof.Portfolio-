'use client';
import Image from 'next/image';
import Navbar from "../navbar/page";
import { FiArrowLeft, FiClock, FiCalendar, FiShare2, FiBookmark } from 'react-icons/fi';
import Link from "next/link";

export default function BlogPostPage() {
  const post = {
    title: "Redefining Digital Experiences Through Thoughtful Design",
    excerpt: "How we're pushing boundaries in user experience by combining minimalist aesthetics with cutting-edge functionality.",
    category: "Design",
    date: "June 2, 2024",
    readTime: "6 min read",
    image: "/blog/featured-post.jpg",
    content: `
      <p class="mb-6">In today's fast-paced digital landscape, the intersection of form and function has never been more critical. As designers, we're constantly challenged to create experiences that are not only visually stunning but intuitively functional.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Philosophy of Less</h2>
      <p class="mb-6">Our approach begins with reduction - stripping away the unnecessary to focus on what truly matters. This philosophy manifests in several key principles:</p>
      
      <ul class="mb-6 list-disc pl-6 space-y-2">
        <li>Intentional white space that guides the user's journey</li>
        <li>Purposeful typography that enhances readability</li>
        <li>Strategic color use that directs attention</li>
        <li>Micro-interactions that feel delightful, not distracting</li>
      </ul>
      
      <div class="my-10 bg-gray-50 p-6 rounded-xl">
        <p class="italic text-gray-600">"The best design is invisible. It serves the content so well that users never notice the design itself."</p>
      </div>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Case Study: Financial Dashboard</h2>
      <p class="mb-6">When approached by a major financial institution to redesign their client dashboard, we applied these principles to transform a complex data interface into an approachable experience.</p>
      
      <div class="my-8">
        <Image 
          src="/h1.jpg" 
          alt="Dashboard redesign" 
          width={1200} 
          height={600} 
          className="rounded-lg shadow-sm"
        />
        <p class="text-center text-sm text-gray-500 mt-2">Before and after of our dashboard redesign</p>
      </div>
      
      <p class="mb-6">The results spoke for themselves: a 42% increase in user engagement and 28% reduction in support tickets related to navigation issues.</p>
    `
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans text-black">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Back Button */}
       <Link 
  href="./blog" 
  className="flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors w-fit"
>
  <FiArrowLeft className="text-sm" />
  <span>Back to Blog</span>
</Link>
        
        {/* Article Header */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-black text-white text-xs rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
          
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2 text-gray-500">
              <FiCalendar className="text-sm" />
              <span className="text-sm">{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <FiClock className="text-sm" />
              <span className="text-sm">{post.readTime}</span>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="mb-10 rounded-xl overflow-hidden shadow-sm">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={630}
            className="w-full object-cover"
            priority
          />
        </div>
        
        {/* Article Content */}
        <article 
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 border-t border-gray-200 pt-8">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
            <FiShare2 className="text-sm" />
            <span>Share</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
            <FiBookmark className="text-sm" />
            <span>Save</span>
          </button>
        </div>
        
        {/* Author Bio */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/h2.jpg"
                alt="Author name"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold">Sarah Chen</h3>
              <p className="text-gray-600 text-sm">Lead Designer at Studio</p>
              <p className="text-gray-600 text-sm mt-2">Specializing in UX strategy and minimalist interfaces with 8 years of industry experience.</p>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">More from the Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map(item => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={`/blog/blog${item}.jpg`}
                    alt={`Related post ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mb-3">
                    Design
                  </span>
                  <h3 className="text-xl font-bold mb-2">The Psychology of Space in Digital Interfaces</h3>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">May 28, 2024</span>
                    <button className="text-black font-medium">Read →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}