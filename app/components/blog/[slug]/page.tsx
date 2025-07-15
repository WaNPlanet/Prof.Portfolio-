// app/blog/[slug]/page.tsx
import { getPostBySlug } from '@/app/lib/blogData';
import { notFound } from 'next/navigation';

// This is automatically a Server Component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <article>
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-8">{post.date}</p>
        <div className="prose max-w-none">
          {post.content}
        </div>
      </article>
    </div>
  );
}

// Metadata generation (must be in Server Component)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post not found'
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: post.image ? [post.image] : []
    }
  };
}

// Generate static paths at build time
export async function generateStaticParams() {
  const { blogPosts } = await import('@/app/lib/blogData');
  return blogPosts.map(post => ({
    slug: post.slug
  }));
}