import axios from 'axios';

// WordPress API'den blog yazılarını çeken fonksiyon
export const fetchBlogPosts = async () => {
  try {
    const response = await axios.get(
      "https://public-api.wordpress.com/wp/v2/sites/mericcintosunadminblog.wordpress.com/posts"
    );
    const posts = response.data;

    // WordPress'ten gelen veriyi projene uygun şekilde dönüştür
    return posts.map((post) => ({
      id: post.id,
      blogTitle: post.title.rendered,
      blogText: post.content.rendered,
      summary: post.excerpt.rendered,
      blogImage: post.jetpack_featured_media_url || "/default-image.jpg",
      date: post.date,
      tags: post.tags, // WordPress'teki tag verisi varsa
      slug: post.slug,
      author: post.author || "Unknown Author"
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw new Error("Veriler getirilemedi");
  }
};
