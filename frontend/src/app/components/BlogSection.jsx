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
          const tags = await fetchTags(post.tags);
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
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-[#f07f55] p-6 gap-4">
      {data.map((post) => {
        const {
          id: postId,
          blogImage,
          blogTitle,
          summary,
          slug,
          date,
          tags,
          author, 
        } = post;

        const cleanTitle = stripHtmlTags(blogTitle);
        const cleanSummary = stripHtmlTags(summary);
        const imageUrl = blogImage || "/default-image.jpg";
        const shortExcerpt = cleanSummary ? cleanSummary.substring(0, 100) : "";
        const isExpanded = expandedPosts[postId];

        return (
          <Link
            target="_blank"
            href={`/blog/${slug}`}
            passHref
            key={postId}
            rel="noopener noreferrer"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mt-[4rem] cursor-pointer"
            >
              <Card className="my-[2rem] w-full mx-auto lg:w-96 flex flex-col h-full">
                <CardHeader
                  color="blue-gray"
                  className="relative h-72 lg:h-56 overflow-hidden flex-shrink-0"
                >
                  <Image
                    src={imageUrl}
                    alt={cleanTitle || "Blog image"}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    className="rounded-lg transition-transform duration-300 transform hover:scale-110"
                  />
                </CardHeader>
                <CardBody className="flex-grow flex flex-col justify-between">
                  <div className="flex-grow">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {cleanTitle || ""}
                    </Typography>
                    <Typography>
                      {isExpanded ? cleanSummary : `${shortExcerpt}...`}
                    </Typography>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      Yayınlanma Tarihi: {new Date(date).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      Yazar:{" "}
                      <span className="text-[#F07F55]  hover:bg-[#FFC107] hover:text-white transition duration-300 rounded px-1">
                        {author || ""}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Etiketler:{" "}
                      {tags.length
                        ? tags
                            .map((tag) => (
                              <span
                                key={tag.id}
                                className="text-[#F07F55]  hover:bg-[#FFC107] hover:text-white transition duration-300 rounded px-1"
                              >
                                {tag.name}
                              </span>
                            ))
                            .reduce((prev, curr) => [prev, ", ", curr])
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
                    className="px-4 py-2 text-white bg-[#F07F55] rounded-lg transition-colors duration-300 hover:bg-[#FFC107]"
                  >
                    {isExpanded ? "Daha Az Göster" : "Daha Fazla Oku"}
                  </motion.button>

                  <Link target = "_blank" href={`/blog/${slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 border-2 border-[#F07F55] text-[#F07F55] rounded-lg transition-colors duration-300 hover:bg-[#F07F55] hover:text-white"
                    >
                      Gönderiye Git
                    </motion.button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}
