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

  // Blogları tarihe göre sıralıyoruz
  const sortedBlogs = data.sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestBlogs = sortedBlogs.slice(0, 3); // Son 3 blog

  return (
    <div className="bg-[#242424] p-8 py-[5rem]">
      <h2 className="text-4xl lg:text-7xl font-bold text-white mb-12">
        <span className="text-md lg:text-xl">İlhamla Yazdığımız </span> <br />{" "}
        Son Yazılar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {latestBlogs.map((post) => {
          const { id, blogImage, blogTitle, author, slug, date, tags } = post;
          const imageUrl = blogImage || "/default-image.jpg";

          return (
            <motion.div
              key={id}
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="overflow-hidden"
              >
                <Image
                  src={imageUrl}
                  alt={blogTitle}
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
              </motion.div>
              <div className="p-4 flex flex-col h-[250px] justify-between">
                <div>
                  <h3 className="text-lg font-bold">{blogTitle}</h3>
                  <p className="text-sm text-gray-600">Yazar: {author}</p>
                  {/* Date and Tags */}
                  <p className="text-sm text-gray-600">
                    Yayınlanma Tarihi: {new Date(date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    Etiketler: {tags.join(", ")}
                  </p>
                </div>
                <Link href={`/blog/${slug}`} className="mt-auto self-end">
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
