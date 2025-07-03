// utils/blogData.js
export const blogPosts = {
  "thoughtful-design": {
    id: "thoughtful-design",
    title: "Redefining Digital Experiences Through Thoughtful Design",
    excerpt: "How we're pushing boundaries in user experience...",
    category: "Design",
    date: "June 2, 2024",
    readTime: "6 min read",
    image: "/blog/featured-post.jpg",
    content: `
      <p class="mb-6">In today's fast-paced digital landscape...</p>
      <!-- rest of the content -->
    `
  },
  "psychology-space": {
    id: "psychology-space",
    title: "The Psychology of Space in Digital Interfaces",
    excerpt: "Exploring how negative space influences user perception...",
    category: "Design",
    date: "May 28, 2024",
    readTime: "5 min read",
    image: "/blog/psychology-space.jpg",
    content: `...`
  },
  // Add all other blog posts here
};

export const allBlogPosts = Object.values(blogPosts);