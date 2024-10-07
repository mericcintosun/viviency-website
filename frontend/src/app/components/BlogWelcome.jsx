"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogWelcome() {
  return (
    <>
      <div id="about" className="relative">
        <div className="bg-black w-full h-full">
          <div className="relative">
            <div className="relative w-full h-[500px]">
              <Image
                id="about-image"
                src="/assets/about-assets/teams.jpg"
                layout="fill"
                objectFit="cover"
                className="opacity-50"
                alt="teams"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-white font-bold text-6xl sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem]"
              >
                blog
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
