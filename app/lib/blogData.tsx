// lib/blogData.ts
import { v4 as uuidv4 } from 'uuid';

// Make sure to export the interface
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
}

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

// Helper function to find posts by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}