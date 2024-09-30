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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching blog posts</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-[#f07f55]">
      {data?.data.map((post) => {
        const { id: postId, attributes } = post;
        const coverImageUrl =
          attributes.coverimage?.data?.attributes?.formats?.large?.url;
        const imageUrl = coverImageUrl
          ? `http://localhost:1337${coverImageUrl}`
          : "/default-image.jpg";
        const excerpt = attributes.Excerpt || "";
        const shortExcerpt = excerpt.substring(0, 100);
        const isExpanded = expandedPosts[postId];

        return (
          <Link
            target="_blank"
            href={`/blog/${attributes.slug}`}
            passHref
            key={postId}
          >
            <motion.div
              variants={cardVariants}
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
                    alt={attributes.Title}
                    layout="fill"
                    objectFit="cover"
                    priority
                    quality={100}
                  />
                </CardHeader>
                <CardBody className="flex-grow overflow-hidden">
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {attributes.Title}
                  </Typography>
                  <Typography>
                    {isExpanded ? excerpt : `${shortExcerpt}...`}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0 flex justify-between">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
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
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
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
