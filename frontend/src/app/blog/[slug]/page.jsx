"use client";

import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { fetchBlogPost } from "@/lib/api";
import { useState } from "react";
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

  const { blogTitle, summary, blogText, blogImage, author, date, tags } = data;

  return (
    <div className="p-8 bg-[#242424] text-white min-h-screen flex flex-col items-center gap-4">
      {blogImage && (
        <div className="relative w-full h-80 lg:h-96">
          <Image
            src={blogImage}
            alt={blogTitle}
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
      <h1 className="text-4xl font-bold mb-4 text-[#F07F55]">{blogTitle}</h1>
      <p className="text-lg text-[#fff] mb-6 italic">{summary}</p>
      <div className="text-md text-[#fff] leading-relaxed">
        <div dangerouslySetInnerHTML={{ __html: blogText }} />
      </div>
      <p className="text-sm">Yazar: {author}</p>
      <p className="text-sm">Yayınlanma Tarihi: {new Date(date).toLocaleDateString()}</p>
      <p className="text-sm">Etiketler: {tags.join(", ")}</p>
    </div>
  );
}
