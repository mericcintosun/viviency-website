// components/ServiceWelcome.jsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServiceWelcome({ title, image }) {
  return (
    <div id="services" className="relative" style={{ height: "85dvh" }}>
      <div className="w-full h-full">
        <div className="relative h-full">   
          <Image
            id="services-image"
            src={image} // Dinamik görsel burada kullanılıyor
            fill
            className="object-cover  object-top"
            alt={title} // Görselin alt metni de dinamik olarak başlığa göre ayarlanıyor
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-white font-bold text-6xl text-center"
            >
              {title}
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
}
