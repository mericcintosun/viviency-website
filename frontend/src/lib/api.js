import axios from "axios";

// Tüm blog yazılarını çeken fonksiyon
export const fetchBlogPosts = async () => {
  const response = await axios.get(
    "https://public-api.wordpress.com/wp/v2/sites/mericcintosunadminblog.wordpress.com/posts"
  );
  const posts = response.data;

  return posts.map((post) => ({
    id: post.id,
    blogTitle: post.title.rendered,
    blogText: post.content.rendered,
    summary: post.excerpt.rendered,
    blogImage: post.jetpack_featured_media_url || "/default-image.jpg",
    date: post.date,
    tags: post.tags || [], // Eğer tag yoksa boş array
    slug: post.slug,
    author: post.author || "Unknown Author",
  }));
};

// Tek bir blog postunu slug ile çeken fonksiyon
export const fetchBlogPost = async (slug) => {
  const response = await axios.get(
    `https://public-api.wordpress.com/wp/v2/sites/mericcintosunadminblog.wordpress.com/posts?slug=${slug}`
  );
  const post = response.data[0]; // Slug ile gelen verinin ilk elemanı

  if (!post) {
    throw new Error("Blog bulunamadı");
  }

  return {
    id: post.id,
    blogTitle: post.title.rendered,
    blogText: post.content.rendered,
    summary: post.excerpt.rendered,
    blogImage: post.jetpack_featured_media_url || "/default-image.jpg",
    date: post.date,
    tags: post.tags || [], // Eğer tag yoksa boş array
    slug: post.slug,
    author: post.author || "Unknown Author",
  };
};
