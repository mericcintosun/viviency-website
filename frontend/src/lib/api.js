// lib/api.js
export const fetchBlogPosts = async () => {
  const response = await fetch("/api/blogPosts");
  if (!response.ok) {
    throw new Error("Veriler getirilemedi");
  }
  const data = await response.json();
  return data;
};

export const fetchBlogPost = async (slug) => {
  const response = await fetch("/api/blogPosts");
  if (!response.ok) {
    throw new Error("Veriler getirilemedi");
  }
  const blogs = await response.json();

  const blogPost = blogs.find((blog) => blog.slug === slug);
  return blogPost || null;
};
