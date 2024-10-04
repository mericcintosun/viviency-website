"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchBlogPosts, fetchTags } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogSlider() {
  // İlk 3 blog yazısını çekerken `fetchBlogPosts(1, 3)` çağrılıyor
  const { data, isLoading, isError } = useQuery({
    queryKey: ["latestBlogPosts"],
    queryFn: () => fetchBlogPosts(1, 3), // İlk sayfa ve 3 blog yazısını çekiyoruz
  });

  const { data: tagsData, isLoading: isTagsLoading } = useQuery({
    queryKey: ["tags", data?.map((post) => post.tags).flat()],
    queryFn: () => fetchTags(data?.map((post) => post.tags).flat()),
    enabled: !!data, // Blog verisi varsa tag'leri çek
  });

  // Yükleniyor ekranı
  if (isLoading || isTagsLoading) {
    return <div>Yükleniyor...</div>;
  }

  // Hata durumu
  if (isError || !data || data.length === 0) {
    return <div>Blog verileri getirilemedi veya mevcut değil.</div>;
  }

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <div className="bg-[#242424] p-8 py-[5rem]">
      <h2 className="text-4xl lg:text-7xl font-bold text-white mb-12">
        <span className="text-md lg:text-xl">İlhamla Yazdığımız </span> <br />
        Son Yazılar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((post) => {
          const { id, blogImage, blogTitle, author, slug, date, tags } = post;
          const imageUrl = blogImage || "/default-image.jpg";

          // HTML etiketlerini temizle
          const cleanTitle = stripHtmlTags(blogTitle);

          // Blog'a ait etiketler
          const postTags =
            tagsData?.filter((tag) => tags.includes(tag.id)) || [];

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
                  alt={cleanTitle || "Blog image"} // Temizlenmiş başlığı kullan
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
              </motion.div>
              <div className="p-4 flex flex-col h-[250px] justify-between">
                <div>
                  <h3 className="text-lg font-bold">
                    {cleanTitle || "Başlık Yok"}{" "}
                    {/* Temizlenmiş başlığı kullan */}
                  </h3>
                  <p className="text-sm text-gray-600">Yazar: {author}</p>
                  <p className="text-sm text-gray-600">
                    Yayınlanma Tarihi: {new Date(date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    Etiketler:{" "}
                    {postTags.length > 0
                      ? postTags
                          .map((tag) => (
                            <Link
                              key={tag.id}
                              href={`/tags/${tag.slug}`}
                              className="text-[#F07F55] hover:underline"
                            >
                              {tag.name}
                            </Link>
                          ))
                          .reduce((prev, curr) => [prev, ", ", curr])
                      : "Etiket Yok"}
                  </p>
                </div>
                <Link href={`/blog/${slug}`} passHref>
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
