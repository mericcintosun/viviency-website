"use client"; // İstemci tarafı bileşen olduğuna dair direktif

import { motion } from "framer-motion";
import privacyData from "@/data/privacyData";

// Tarih formatını manuel olarak ayarlayan bir fonksiyon
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

export default function Kvkk() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <h1 className="text-3xl font-bold text-center mb-8 text-[#F07F55]">
        {privacyData.kvkkDisclosure.title}
      </h1>
      <div className="space-y-6">
        {privacyData.kvkkDisclosure.content.map((paragraph, index) => {
          // Kalın metin için yıldızları HTML <strong> etiketi ile değiştirme
          const formattedParagraph = paragraph.replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>"
          );

          return (
            <motion.p
              key={index}
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formattedParagraph }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            />
          );
        })}
      </div>
      <div className="mt-8">
        <motion.p
          className="text-gray-600 text-sm text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Son güncelleme: {formatDate(new Date())}
        </motion.p>
      </div>
    </motion.div>
  );
}
