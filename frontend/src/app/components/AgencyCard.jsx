"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AgencyCard() {
  const agencyData = [
    {
      image: "/assets/agency/member1.png",
      title: "social media strategy",
      description:
        "Benefit from a data-driven social media strategy, transforming deep insights and your brand’s DNA into a dynamic roadmap toward your business goals.",
    },
    {
      image: "/assets/agency/member2.webp",
      title: "human-first social",
      description:
        "Take the first step in transforming your social media presence with our human-first approach.",
    },
    {
      image: "/assets/agency/member3.webp",
      title: "social media advertising",
      description:
        "Turn every ad into a powerful brand encounter with our relentless split testing and data-informed adjustments, ensuring your message not only reaches but resonates and engages.",
    },
    {
      image: "/assets/agency/member4.webp",
      title: "social media management",
      description:
        "Leverage our social media management to master the art of engagement, from trend-tapping hashtag research to community interactions that forge strong connections.",
    },
    {
      image: "/assets/agency/member5.webp",
      title: "content creation",
      description:
        "Keep up with the demand for more content from your brand; from custom graphics to compelling videos, every piece is designed to drive engagement and amplify your marketing impact.",
    },
    {
      image: "/assets/agency/member6.webp",
      title: "influencer marketing",
      description:
        "Engage with influencer marketing that values authenticity; our campaigns are crafted with precision to resonate with your brand values and speak through voices that genuinely champion your message.",
    },
  ];

  return (
    <div className="agency-card-container w-[90%] mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {agencyData.map((agency, index) => (
        <AgencyCardItem key={index} agency={agency} />
      ))}
    </div>
  );
}

function AgencyCardItem({ agency }) {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: -50 });
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="agency-card relative overflow-hidden rounded-xl mt-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <img
        src={agency.image}
        alt={agency.title}
        className="agency-image w-full h-auto"
      />
      <div
        ref={ref}
        className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 hover:bg-opacity-70"
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-white text-xl font-bold mb-2"
        >
          {agency.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-white text-sm"
        >
          {agency.description}
        </motion.p>
      </div>
    </div>
  );
}
