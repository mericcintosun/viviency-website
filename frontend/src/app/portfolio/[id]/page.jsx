"use client";

import PortfolioWorks from "@/app/components/PortfolioWorks";
import { portfolioData } from "@/data/portfolioData";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import OtherWorks from "@/app/components/OtherWorks";
import Enquire from "@/app/components/Enquire";
import { useState, useEffect } from "react";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import EnquireReverse from "@/app/components/EnquireReverse";
export default function PortfolioDetail() {
  const content = ["yaratıcı olmayı", "ilham vermeyi", "hayal kurmayı"];
  const buttonTwoText = "hadi konuşalım!";
  const loveText = "seviyoruz";
  const { id } = useParams();
  const work = portfolioData.find((item) => item.id === id);

  if (!work) {
    return <div>Portfolyo bulunamadı.</div>;
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
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
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${work.img})` }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1.2 } },
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4 pb-6"
        >
          {work.logo && (
            <motion.img
              src={work.logo}
              alt={`${work.client} logo`}
              className="mb-8 rounded-full"
              style={{ width: "128px", height: "128px" }}
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
            />
          )}
          <motion.h1
            className="text-5xl font-bold mb-4"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {work.title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl max-w-2xl"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            {work.description}
          </motion.p>
          <div className="flex justify-center gap-12 mt-8">
            <div>
              <h3 className="text-sm font-bold uppercase">Tarih</h3>
              <p>{work.date || "2023"}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase">Müşteri</h3>
              <p>{work.client || "Maison Noir"}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase">Kategori</h3>
              <p>{work.category || "Social Media Strategy"}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="mt-8 w-[60%] mx-auto py-12 bg-gray-300 bg-opacity-10 rounded-lg flex flex-col gap-12 leading-loose">
        <h2 className="text-6xl font-bold mb-4">problem</h2>
        <p className="text-md text-gray-700">{work.problem}</p>
      </div>

      <PortfolioWorks />

      <div className="mt-8 w-[60%] mx-auto py-12 bg-gray-300 bg-opacity-10 rounded-lg flex flex-col gap-12 leading-loose">
        <h2 className="text-6xl font-bold mb-4">yaklaşım</h2>
        <p className="text-md text-gray-700">{work.approach}</p>
      </div>

      <div className="mb-12 flex flex-col lg:flex-row  mt-16 w-[70%] mx-auto gap-12">
        {/* Sol Kısım: İki Kart */}
        <div className="flex flex-col gap-6 w-full  lg:mx-auto">
          <div className="bg-white w-full  mx-auto p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900"
            >
              {work.results.followersGained}
            </motion.h2>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-orange-500 mt-2"
            >
              kazanılan takipçiler
            </motion.p>
          </div>

          <div className="bg-white w-full  mx-auto p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-gray-900"
            >
              {work.results.impressionsIncrease}
            </motion.h2>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-orange-500 mt-2"
            >
              görünüm artışı
            </motion.p>
          </div>
        </div>

        {/* Sağ Kısım: Sonuçlar Başlığı ve Açıklama */}
        <div className="w-full mx-auto flex flex-col gap-6  lg:mx-auto">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold text-gray-900 w-full  lg:mx-auto text-center"
          >
            sonuçlar
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=" text-lg text-gray-700 leading-relaxed w-[80%] mx-auto  lg:mx-auto text-center"
          >
            {work.results.resultsText}
          </motion.p>
        </div>
      </div>

      <OtherWorks />
      <EnquireReverse
        titleText={loveText}
        phrases={content}
        buttonText={buttonTwoText}
      />
    </>
  );
}
