"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
export default function ServicesWelcome() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <div id="about" className="relative mb-12">
        <div className="bg-black w-full h-full">
          <div className="relative">
            <Image
              id="about-image"
              src="/assets/about-assets/teams.jpg"
              width={500}
              height={1}
              className="opacity-50"
              alt="teams"
              layout="responsive"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-white font-bold text-6xl sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem]"
              >
                hizmetler
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
