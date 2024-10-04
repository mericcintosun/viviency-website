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
import { fetchBlogPosts } from "@/lib/api";

export default function BlogSection() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchBlogPosts,
  });

  const [expandedPosts, setExpandedPosts] = useState({});

  const toggleExpand = (postId) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching blog posts</div>;
  }

  // Blogları tarihe göre sıralıyoruz
  const sortedBlogs = data.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-[#f07f55]">
      {sortedBlogs.map((post) => {
        const {
          id: postId,
          blogImage,
          blogTitle,
          summary,
          slug,
          date,
          tags,
        } = post;
        const imageUrl = blogImage || "/default-image.jpg";
        const excerpt = summary || "";
        const shortExcerpt = excerpt.substring(0, 100);
        const isExpanded = expandedPosts[postId];

        return (
          <Link target="_blank" href={`/blog/${slug}`} passHref key={postId}>
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
                    alt={blogTitle}
                    layout="fill"
                    objectFit="cover"
                    priority
                    quality={100}
                    className="rounded-lg"
                  />
                </CardHeader>
                <CardBody className="flex-grow overflow-hidden">
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {blogTitle}
                  </Typography>
                  <Typography>
                    {isExpanded ? excerpt : `${shortExcerpt}...`}
                  </Typography>
                  {/* Date and Tags */}
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      Yayınlanma Tarihi: {new Date(date).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      Etiketler: {tags?.join(", ") || "No Tags"}
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
