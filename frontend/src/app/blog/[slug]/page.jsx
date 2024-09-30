// BlogPostPage.js
"use client"; // Bu sayfa client-side

import { useQuery } from "@tanstack/react-query";
import { fetchBlogPost } from "@/lib/api";
import { motion } from "framer-motion";
import Image from "next/image";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Enquire from "@/app/components/Enquire";

export default function BlogPostPage({ params }) {
  const [queryClient] = useState(() => new QueryClient());
  const contentEnquire = ["yaratıcı olmayı", "ilham vermeyi", "hayal kurmayı"];
  const buttonTwoText = "let's talk social!";
  const loveText = "Seviyoruz";

  const { slug } = params;

  return (
    <QueryClientProvider client={queryClient}>
      <BlogPostContent
        slug={slug}
        contentEnquire={contentEnquire}
        buttonTwoText={buttonTwoText}
        loveText={loveText}
      />
    </QueryClientProvider>
  );
}

function BlogPostContent({ slug, contentEnquire, buttonTwoText, loveText }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["blogPost", slug],
    queryFn: () => fetchBlogPost(slug),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error || !data?.data?.length) return <div>Error or Post Not Found</div>;

  const post = data.data[0];
  const title = post.attributes.Title;
  const excerpt = post.attributes.Excerpt;
  const content = post.attributes.content;
  const author = post.attributes.author;
  const tags = post.attributes.tags;

  const publicationDate = post.attributes.publication
    ? new Date(post.attributes.publication).toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Tarih bilgisi yok";

  const coverImageUrl = post.attributes.coverimage?.data?.attributes?.url;

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <>
      <motion.div
        className="p-8 md:p-12 lg:p-16 bg-[#242424] text-white min-h-screen flex flex-col items-center gap-4"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {coverImageUrl && (
          <div className="relative mb-8 w-full max-w-7xl">
            <Image
              src={`http://localhost:1337${coverImageUrl}`}
              alt={title}
              width={800}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
            <motion.div
              className="gap-3 lg:absolute lg:bottom-4 lg:left-4 bg-[#242424CC] text-[#white] p-3 rounded-lg shadow-md flex flex-col mt-4 lg:mt-0"
              variants={fadeInUp}
            >
              <p className="text-sm">
                <strong>Yazar:</strong> {author || "Yazar bilgisi yok"}
              </p>
              <p className="text-sm">
                <strong>Yayınlanma tarihi:</strong> {publicationDate}
              </p>
              <p className="text-sm">
                <strong>Etiketler:</strong>{" "}
                <span> {tags || "Tag bilgisi yok"}</span>
              </p>
            </motion.div>
          </div>
        )}

        <div className="flex flex-col gap-4">
          <motion.h1
            className="text-4xl font-bold mb-4  text-[#F07F55] max-w-6xl"
            variants={fadeInUp}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-lg text-[#fff] mb-6 italic max-w-6xl "
            variants={fadeInUp}
          >
            {excerpt}
          </motion.p>

          <motion.div
            className="text-md text-[#fff] leading-relaxed max-w-6xl text-left"
            variants={fadeInUp}
          >
            {content.map((contentBlock, index) => (
              <p key={index} className="mb-4">
                {contentBlock.children.map((child, childIndex) =>
                  child.bold ? (
                    <strong key={childIndex}>{child.text}</strong>
                  ) : (
                    <span key={childIndex}>{child.text}</span>
                  )
                )}
              </p>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="mt-10">
          <a
            href="/blog"
            className="inline-block px-6 py-3 bg-[#F07F55] text-white rounded-lg shadow-md hover:bg-[#ff8f6a] transition-all"
          >
            Geri Dön
          </a>
        </motion.div>
      </motion.div>

      <Enquire
        titleText={loveText}
        phrases={contentEnquire}
        buttonText={buttonTwoText}
      />
    </>
  );
}
