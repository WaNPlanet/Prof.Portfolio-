import { getPostBySlug } from '@/app/lib/blogData';
import { notFound } from 'next/navigation';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt?: string;
  image?: string;
}

export default async function BlogPostPage({
  params
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
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

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  
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

export async function generateStaticParams() {
  const { blogPosts } = await import('@/app/lib/blogData');
  return blogPosts.map((post: BlogPost) => ({
    slug: post.slug
  }));
}