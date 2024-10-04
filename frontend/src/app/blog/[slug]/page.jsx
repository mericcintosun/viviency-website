"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { fetchBlogPost, fetchTags, fetchBlogPosts } from "@/lib/api"; // fetchTags ve fetchBlogPosts fonksiyonları
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
    enabled: !!data?.tags, // Sadece tag'ler varsa çalıştır
  });

  const [authorId, setAuthorId] = useState(null);

  // Yazarın bloglarını getirme
  const { data: authorPosts, isLoading: isAuthorPostsLoading } = useQuery({
    queryKey: ["authorPosts", authorId],
    queryFn: () => fetchBlogPosts(1, 100, authorId), // Yazar ID'sine göre blogları çek
    enabled: !!authorId, // Yazar ID'si varsa çalıştır
  });

  if (isLoading || isTagsLoading) return <div>Yükleniyor...</div>;
  if (error || !data || !tagsData) {
    console.error("Error fetching blog post:", error);
    return <div>Hata: Blog bulunamadı</div>;
  }

  const { blogTitle, summary, blogText, blogImage, author, authorId: postAuthorId, date } = data;

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const cleanSummary = stripHtmlTags(summary);
  const cleanTitle = stripHtmlTags(blogTitle);

  return (
    <div className="p-8 bg-[#242424] text-white min-h-screen flex flex-col items-center gap-4">
      {blogImage && (
        <div className="relative w-full h-80 lg:h-96">
          <Image
            src={blogImage}
            alt={cleanTitle || "Blog resmi"} // Temizlenmiş başlığı kullan
            fill
            style={{ objectFit: "cover" }}
            priority
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
      <h1 className="text-4xl font-bold mb-4 text-[#F07F55]">{cleanTitle}</h1>
      <div className="text-md text-[#fff] leading-relaxed">
        <div
          dangerouslySetInnerHTML={{ __html: blogText }}
          className="prose prose-invert"
        />
      </div>
      <p className="text-sm">
        Yazar:{" "}
        <button
          className="text-[#F07F55] hover:underline"
          onClick={() => setAuthorId(postAuthorId)} // Yazar ID'sine göre blogları getir
        >
          {author || "Yazar bilinmiyor"}
        </button>
      </p>
      <p className="text-sm">
        Yayınlanma Tarihi: {new Date(date).toLocaleDateString()}
      </p>
      <p className="text-sm">
        Etiketler:{" "}
        {tagsData.length > 0
          ? tagsData
              .map((tag) => (
                <Link
                  key={tag.id}
                  href={`/tags/${tag.slug}`} // Tag sayfasına yönlendiriyoruz
                  className="text-[#F07F55] hover:underline"
                >
                  {tag.name}
                </Link>
              ))
              .reduce((prev, curr) => [prev, ", ", curr]) // Etiketleri virgülle ayır
          : "Etiket yok"}
      </p>

      {/* Yazarın blogları */}
      {authorId && (
        <div className="mt-8 w-full">
          <h2 className="text-2xl font-bold mb-4 text-[#F07F55]">Yazarın Diğer Blogları</h2>
          {isAuthorPostsLoading ? (
            <div>Yükleniyor...</div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {authorPosts?.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="block p-4 bg-[#333] rounded-lg shadow-lg hover:bg-[#444]"
                >
                  <h3 className="text-xl font-semibold text-[#F07F55]">{stripHtmlTags(post.blogTitle)}</h3>
                  <p className="text-sm text-gray-400">
                    Yayınlanma Tarihi: {new Date(post.date).toLocaleDateString()}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
