import axios from "axios";

export const fetchBlogPosts = async (page = 1, perPage = 100) => {
  try {
    const response = await axios.get(
      `https://viviency.com/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`
    );

    return response.data.map((post) => ({
      id: post.id,
      blogTitle: post.title.rendered,
      blogText: post.content.rendered,
      summary: post.excerpt.rendered,
      blogImage:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        "/default-image.jpg",
      date: post.date,
      tags: post.tags || [],
      slug: post.slug,
      author: post._embedded?.author?.[0]?.name || "Unknown Author",
    }));
  } catch (error) {
    console.error("Veriler getirilemedi:", error);
    throw new Error("Veriler getirilemedi");
  }
};

export const fetchBlogPost = async (slug) => {
  try {
    const response = await axios.get(
      `https://viviency.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
    );
    const post = response.data[0];

    if (!post) {
      throw new Error("Blog bulunamadı");
    }

    return {
      id: post.id,
      blogTitle: post.title.rendered,
      blogText: post.content.rendered,
      summary: post.excerpt.rendered,
      blogImage:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        "/default-image.jpg",
      date: post.date,
      tags: post.tags || [],
      slug: post.slug,
      author: post._embedded?.author?.[0]?.name || "Unknown Author",
    };
  } catch (error) {
    console.error("Veri getirilemedi:", error);
    throw new Error("Blog verisi getirilemedi");
  }
};
export const fetchTags = async (tagIds) => {
  if (!tagIds || tagIds.length === 0) return [];
  try {
    const responses = await Promise.all(
      tagIds.map((id) =>
        axios
          .get(`https://viviency.com/wp-json/wp/v2/tags/${id}`)
          .then((res) => res.data)
      )
    );
    return responses;
  } catch (error) {
    console.error("Etiketler getirilemedi:", error);
    return [];
  }
};
