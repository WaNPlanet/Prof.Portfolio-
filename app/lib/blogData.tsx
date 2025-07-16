// lib/blogData.ts
import { v4 as uuidv4 } from 'uuid';

// Single interface definition (remove duplicate)
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
}

// Sample blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: uuidv4(),
    title: 'Getting Started with Frontend Development',
    slug: 'getting-started-with-nextjs',
    date: '2023-05-15',
    excerpt: 'Learn the basics of Bootstrap framework',
    content: 'Full post content here...',
    image: '/blog/blogPost1.jpg'
  },
  {
    id: uuidv4(),
    title: 'Advanced React Patterns',
    slug: 'advanced-react-patterns',
    date: '2023-06-22',
    excerpt: 'Explore advanced React component patterns',
    content: 'Full post content here...',
    image: '/blog/blogPost1.jpg'
  }
];

// Get post by slug (synchronous version)
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Async version for use in server components
export async function getPostBySlugAsync(slug: string): Promise<BlogPost | undefined> {
  return blogPosts.find(post => post.slug === slug);
}

// Get all posts (sorted by date)
export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get all post slugs for static generation
export function getAllPostSlugs(): { slug: string }[] {
  return blogPosts.map(post => ({
    slug: post.slug
  }));
}