// Blog.js
"use client"; // Bu sayfa client-side

import BlogSection from "@/app/components/BlogSection";
import BlogWelcome from "@/app/components/BlogWelcome";
import Enquire from "@/app/components/Enquire";
import BlogSlider from "@/app/components/BlogSlider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Blog() {
  const [queryClient] = useState(() => new QueryClient());
  const content = ["satışlarınızı artırmak", "markanızı tanıtmak"];
  const buttonTwoText = "enquire now";
  const loveText = "ister misiniz?";

  return (
    <QueryClientProvider client={queryClient}>
      <BlogWelcome />
      <BlogSlider />
      <BlogSection />
      <Enquire
        titleText={loveText}
        phrases={content}
        buttonText={buttonTwoText}
      />
    </QueryClientProvider>
  );
}
