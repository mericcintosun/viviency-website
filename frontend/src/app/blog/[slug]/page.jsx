"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { fetchBlogPost, fetchTags, fetchBlogPosts } from "@/lib/api";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

  const { data: tagsData, isLoading: isTagsLoading } = useQuery({
    queryKey: ["tags", data?.tags],
    queryFn: () => fetchTags(data?.tags),
    enabled: !!data?.tags,
  });

  const [authorId, setAuthorId] = useState(null);

  const { data: authorPosts, isLoading: isAuthorPostsLoading } = useQuery({
    queryKey: ["authorPosts", authorId],
    queryFn: () => fetchBlogPosts(1, 100, authorId),
    enabled: !!authorId,
  });

  if (isLoading || isTagsLoading) return <div>Yükleniyor...</div>;
  if (error || !data || !tagsData) {
    console.error("Error fetching blog post:", error);
    return <div>Hata: Blog bulunamadı</div>;
  }

  const {
    blogTitle,
    summary,
    blogText,
    blogImage,
    author,
    authorId: postAuthorId,
    date,
  } = data;

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const cleanSummary = stripHtmlTags(summary);
  const cleanTitle = stripHtmlTags(blogTitle);

  return (
    <div className="p-8 bg-[#242424] text-white min-h-screen flex flex-col items-center gap-4">
      {blogImage && (
        <div className="relative w-full h-80 lg:h-[80dvh]">
          <Image
            src={blogImage}
            alt={cleanTitle || "Blog resmi"}
            fill
            style={{ objectFit: "cover" }}
            priority
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <h1 className="text-4xl lg:text-5xl font-bold my-4 text-[#F07F55] w-[80%] transition-colors duration-300 hover:text-[#FFC107]">
        {cleanTitle}
      </h1>
      <div className="text-md text-[#fff] leading-relaxed">
        <div
          dangerouslySetInnerHTML={{ __html: blogText }}
          className="prose prose-invert max-w-[80%] mx-auto"
        />
      </div>
      <p className="text-sm flex gap-1">
        Yazar:{" "}
        <div
          className="text-[#F07F55]  transition-colors duration-300 hover:text-[#FFC107]"
          onClick={() => setAuthorId(postAuthorId)}
        >
          {author || "Yazar bilinmiyor"}
        </div>
      </p>
      <p className="text-sm">
        Yayınlanma Tarihi:{" "}
        <span className="text-white hover:text-[#FFC107] transition-colors duration-300">
          {new Date(date).toLocaleDateString()}
        </span>
      </p>
      <p className="text-sm flex gap-1">
        Etiketler:{" "}
        {tagsData.length > 0
          ? tagsData
              .map((tag) => (
                <div
                  key={tag.id}
                  href={`/tags/${tag.slug}`}
                  className="text-[#F07F55]  transition-colors duration-300 hover:text-[#FFC107]"
                >
                  {tag.name}
                </div>
              ))
              .reduce((prev, curr) => [prev, ", ", curr])
          : "Etiket yok"}
      </p>

      {authorId && (
        <div className="mt-8 w-full">
          <h2 className="text-2xl font-bold mb-4 text-[#F07F55]">
            Yazarın Diğer Blogları
          </h2>
          {isAuthorPostsLoading ? (
            <div>Yükleniyor...</div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {authorPosts?.map((post) => (
                <div
                  key={post.id}
                  className="block p-4 bg-[#333] rounded-lg shadow-lg hover:bg-[#444] transition-colors duration-300"
                >
                  <h3 className="text-xl font-semibold text-[#F07F55] hover:text-[#FFC107] transition-colors duration-300">
                    {stripHtmlTags(post.blogTitle)}
                  </h3>
                  <p className="text-sm text-gray-400">
                    Yayınlanma Tarihi:{" "}
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
