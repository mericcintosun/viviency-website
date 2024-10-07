
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ServiceWelcome({ title, image }) {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div id="services" className="relative" style={{ height: "85dvh" }}>
      <div className="w-full h-full">
        <div className="relative h-full">
          <div className="bg-black">
            <Image
              id="services-image"
              src={image}
              fill
              className="object-cover object-top opacity-50"
              alt={title}
            />
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            { (
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center"
              >
                {title}
              </motion.h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
