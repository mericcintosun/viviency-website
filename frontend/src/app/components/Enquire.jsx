"use client";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Enquire() {
  const phrases = [
    "bersu alkaç",
    "ekin teksoy",
    "onur ege tarhan",
    "didem çatal",
    "meriç cintosun"
  ];

  const controls = useAnimation();
  const [index, setIndex] = useState(0);

  const changeText = () => {
    controls.start({ opacity: 0 });

    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length); 
      controls.start({ opacity: 1 });
    }, 500); // 
  };

  useEffect(() => {
    const interval = setInterval(changeText, 2000);
    return () => clearInterval(interval);
  }, [controls]);

  return (
    <>
      <div
        id="enquire"
        className="bg-enquire-bg-image w-full h-[300px] object-cover flex flex-col justify-center items-center md:items-start p-0 sm:pl-4 md:pl-6 lg:pl-9 xl:pl-12 gap-12"
      >
        <div className="flex items-center justify-center px-2 text-white text-xl sm:text-2xl md:text-3xl lg:text-6xl">
          <span className="font-bold">Viviency</span>
          <motion.span
            className="font-bold text-xl m:text-2xl md:text-3xl lg:text-6xl ml-2 opacity-0 text-[#F07F55]"
            animate={controls}
          >
            {phrases[index]}
          </motion.span>
        </div>
        {/* <Button /> */}
        <Button id="enquire-btn" className = "btn">enquire now</Button>
      </div>
    </>
  );
}
