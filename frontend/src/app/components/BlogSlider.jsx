"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchBlogPosts } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogSlider() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["latestBlogPosts"],
    queryFn: fetchBlogPosts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching blog posts</div>;
  }

  const latestBlogs = data?.data.slice(0, 3); // Son 3 blog

  return (
    <div className="bg-[#242424] p-8 py-[5rem]">
      <h2 className="text-4xl lg:text-6xl font-bold text-white  mb-12">
        İlham Aldığımız Yazılar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {latestBlogs.map((post) => {
          const { id: postId, attributes } = post;
          const coverImageUrl =
            attributes.coverimage?.data?.attributes?.formats?.large?.url;
          const imageUrl = coverImageUrl
            ? `http://localhost:1337${coverImageUrl}`
            : "/default-image.jpg";
          const title = attributes.Title;
          const author =
            attributes.author?.data?.attributes?.name || "Unknown Author"; // Yazar bilgisi
          const publicationDate = new Date(
            post.attributes.publication
          ).toLocaleDateString();

          return (
            <motion.div
              key={postId}
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="overflow-hidden"
              >
                <Image
                  src={imageUrl}
                  alt={title}
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
              </motion.div>
              <div className="p-4 flex flex-col h-[250px] justify-between">
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="text-sm text-gray-600">Yazar: {author}</p>
                  <p className="text-sm text-gray-500">
                    Tarih: {publicationDate}
                  </p>
                </div>
                <Link
                  href={`/blog/${attributes.slug}`}
                  className="mt-auto self-end"
                  target="_blank"
                >
                  <motion.button
                    whileHover={{
                      backgroundColor: "#1D4ED8",
                      color: "#fff",
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition-all"
                  >
                    Devamını Oku
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
