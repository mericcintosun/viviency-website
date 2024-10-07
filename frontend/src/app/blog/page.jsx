"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { fetchBlogPosts } from "@/lib/api";
import { useState } from "react";
import BlogSection from "@/app/components/BlogSection";
import BlogSlider from "@/app/components/BlogSlider";
import BlogWelcome from "@/app/components/BlogWelcome";
import Enquire from "@/app/components/Enquire";

export default function Blog() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <BlogContent />
    </QueryClientProvider>
  );
}

function BlogContent() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogPosts", { page: 1, perPage: 100 }],
    queryFn: () => fetchBlogPosts(1, 100),
  });

  if (isLoading) return <div>Yükleniyor...</div>;
  if (isError) return <div>Hata: Veriler getirilemedi.</div>;

  return (
    <>
      <BlogWelcome />
      <BlogSlider posts={data} />
      <BlogSection posts={data} />
      <Enquire
        titleText="İster misiniz?"
        phrases={["satışlarınızı artırmak", "markanızı tanıtmak"]}
        buttonText="bize ulaş"
      />
    </>
  );
}
