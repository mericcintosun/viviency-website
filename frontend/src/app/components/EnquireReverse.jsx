"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EnquireReverse({ phrases, buttonText, titleText }) {
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setOpacity(1);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div
      id="enquire"
      className="bg-enquire-bg-image w-full h-[300px] object-cover flex flex-col justify-center items-center md:items-start p-0 sm:pl-4 md:pl-6 lg:pl-9 xl:pl-12 gap-12"
    >
      <div className="flex items-center justify-center px-2 text-white text-xl sm:text-2xl md:text-3xl lg:text-6xl gap-5">
        <motion.span
          className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-6xl ml-2 text-[#F07F55]"
          animate={{ opacity }}
          transition={{ duration: 0.5 }}
        >
          {phrases[index]}
        </motion.span>
        <span className="font-bold lg:mr-4"> {titleText}</span>
      </div>

      <Link
        href="/contact"
        id="social-btn"
        className="btn rounded-xl"
        target="_blank"
      >
        <span className="scroll-text">{buttonText}</span>
      </Link>
    </div>
  );
}