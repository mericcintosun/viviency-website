"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { fetchBlogPost } from "@/lib/api";
import { useState } from "react";
import Enquire from "@/app/components/Enquire";
import Image from "next/image";

export default function BlogPostPage({ params }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <BlogPostContent slug={params.slug} />
    </QueryClientProvider>
  );
}

function BlogPostContent({ slug }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["blogPost", slug],
    queryFn: () => fetchBlogPost(slug),
  });

  if (isLoading) return <div>Yükleniyor...</div>;
  if (error || !data) return <div>Hata veya Blog Bulunamadı</div>;

  const { blogTitle, summary, blogText, author, blogImage, date, tags } = data;

  return (
    <>
      <div className="p-8 bg-[#242424] text-white min-h-screen flex flex-col items-center gap-4">
        {blogImage && (
          <div className="relative w-full h-80 lg:h-96">
            <Image
              src={blogImage}
              alt={blogTitle}
              layout="fill" // Resmi container'a sığdırır
              objectFit="cover" // Resim container'ın tamamını kaplar
              priority
              className="rounded-lg shadow-lg"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4 text-[#F07F55]">{blogTitle}</h1>
        <p className="text-lg text-[#fff] mb-6 italic">{summary}</p>

        {/* Date ve Tags */}
        <div className="text-md text-gray-400 mb-6">
          <p className="mb-2">
            Yayınlanma Tarihi: {new Date(date).toLocaleDateString()}
          </p>
          <p>Etiketler: {tags?.join(", ")}</p>
        </div>

        <div className="text-md text-[#fff] leading-relaxed">{blogText}</div>
        <p className="text-sm">Yazar: {author}</p>
      </div>

      <Enquire
        titleText="Seviyoruz"
        phrases={["yaratıcı olmayı", "ilham vermeyi", "hayal kurmayı"]}
        buttonText="let's talk social!"
      />
    </>
  );
}
