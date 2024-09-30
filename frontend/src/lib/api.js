import axios from "axios";

export const fetchBlogPosts = async () => {
  const { data } = await axios.get(
    "http://localhost:1337/api/blog-posts?populate[coverimage][populate]=*"
  );
  return data;
};

export const fetchBlogPost = async (slug) => {
  const { data } = await axios.get(
    `http://localhost:1337/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`
  );
  return data;
};


