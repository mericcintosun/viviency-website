"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { motion } from "framer-motion";
import { fetchBlogPosts, fetchTags } from "@/lib/api";

export default function BlogSection() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogPosts", { page: 1, perPage: 100 }],
    queryFn: async () => {
      const blogPosts = await fetchBlogPosts(1, 100);
      const updatedPosts = await Promise.all(
        blogPosts.map(async (post) => {
          const tags = await fetchTags(post.tags); // Etiketleri getirme
          return { ...post, tags };
        })
      );
      return updatedPosts;
    },
  });

  const [expandedPosts, setExpandedPosts] = useState({});

  const toggleExpand = (postId) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  if (isLoading) {
    return <div>Yükleniyor...</div>;
  }

  if (isError || !data) {
    return <div>Blog yazıları getirilemedi veya mevcut değil.</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-[#f07f55]">
      {data.map((post) => {
        const {
          id: postId,
          blogImage,
          blogTitle,
          summary,
          slug,
          date,
          tags,
        } = post;

        // HTML etiketlerini temizle
        const cleanTitle = stripHtmlTags(blogTitle);
        const cleanSummary = stripHtmlTags(summary);
        const imageUrl = blogImage || "/default-image.jpg";
        const shortExcerpt = cleanSummary ? cleanSummary.substring(0, 100) : ""; // Summary kontrolü
        const isExpanded = expandedPosts[postId];

        return (
          <Link
            target="_blank"
            href={`/blog/${slug}`}
            passHref
            key={postId}
            rel="noopener noreferrer" // Güvenlik için rel ekledik
          >
            <motion.div
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mt-[4rem]"
            >
              <Card className="my-[2rem] w-[80%] mx-auto lg:my-[5rem] lg:w-96 lg:flex lg:flex-col lg:mx-auto lg:justify-between cursor-pointer min-h-[70dvh]">
                <CardHeader color="blue-gray" className="relative h-72 lg:h-56">
                  <Image
                    src={imageUrl}
                    alt={cleanTitle || "Blog image"} // Temizlenmiş başlığı kullan
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    className="rounded-lg"
                  />
                </CardHeader>
                <CardBody className="flex-grow overflow-hidden">
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {cleanTitle || "Başlık Yok"}{" "}
                    {/* Temizlenmiş başlığı kullan */}
                  </Typography>
                  <Typography>
                    {isExpanded ? cleanSummary : `${shortExcerpt}...`}
                  </Typography>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      Yayınlanma Tarihi: {new Date(date).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      Etiketler:{" "}
                      {tags.length
                        ? tags.map((tag) => tag.name).join(", ")
                        : "Etiket Yok"}
                    </p>
                  </div>
                </CardBody>
                <CardFooter className="pt-0 flex justify-between">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleExpand(postId);
                    }}
                    className="px-4 py-2 text-white bg-[#F07F55] rounded-lg z-50"
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border-2 border-[#F07F55] text-[#F07F55] rounded-lg"
                  >
                    Go to Post
                  </motion.button>
                </CardFooter>
              </Card>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}
