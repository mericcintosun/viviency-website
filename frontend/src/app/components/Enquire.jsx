"use client";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Enquire({ phrases, buttonText, titleText }) {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // İlk animasyonun başlaması
    controls.start({ opacity: 1 });

    const interval = setInterval(() => {
      // Opaklığı sıfıra düşürme
      controls.start({ opacity: 0 }).then(() => {
        // İndeksi güncelleme
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        // Opaklığı tekrar bir yapma
        controls.start({ opacity: 1 });
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div
      id="enquire"
      className="bg-enquire-bg-image w-full h-[300px] object-cover flex flex-col justify-center items-center md:items-start p-0 sm:pl-4 md:pl-6 lg:pl-9 xl:pl-12 gap-12"
    >
      <div className="flex items-center justify-center px-2 text-white text-xl sm:text-2xl md:text-3xl lg:text-6xl">
        <span className="font-bold lg:mr-4">{titleText}</span>
        <motion.span
          className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-6xl ml-2 text-[#F07F55]"
          initial={{ opacity: 0 }}
          animate={controls}
        >
          {phrases[index]}
        </motion.span>
      </div>

      <Link href="/contact" id="social-btn" className="btn rounded-xl" target="_blank">
        <span className="scroll-text">{buttonText}</span>
      </Link>
    </div>
  );
}
