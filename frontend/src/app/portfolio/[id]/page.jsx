"use client";

import PortfolioWorks from "@/app/components/PortfolioWorks";
import { portfolioData } from "@/data/portfolioData";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import OtherWorks from "@/app/components/OtherWorks";

export default function PortfolioDetail() {
  const { id } = useParams(); // URL'den proje ID'sini alıyoruz
  const work = portfolioData.find((item) => item.id === id); // İlgili projeyi buluyoruz

  if (!work) {
    return <div>Portfolyo bulunamadı.</div>; // Eğer proje bulunamazsa
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${work.img})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end items-center h-full text-center text-white px-4 pb-6">
          {work.logo && (
            <img
              src={work.logo}
              alt={`${work.client} logo`}
              className="mb-8 rounded-full"
              style={{ width: "128px", height: "128px" }}
            />
          )}
          <h1 className="text-5xl font-bold mb-4">{work.title}</h1>{" "}
          <p className="text-lg md:text-xl lg:text-2xl max-w-2xl">
            {work.description}
          </p>
          {/* Extra Information */}
          <div className="flex justify-center gap-12 mt-8">
            <div>
              <h3 className="text-sm font-bold uppercase">Date</h3>
              <p>{work.date || "2023"}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase">Client</h3>
              <p>{work.client || "Maison Noir"}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase">Category</h3>
              <p>{work.category || "Social Media Strategy"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="mt-8 w-[60%] mx-auto py-12 bg-gray-300 bg-opacity-10 rounded-lg flex flex-col gap-12 leading-loose">
        <h2 className="text-6xl font-bold mb-4">the problem</h2>
        <p className="text-md text-gray-700">{work.problem}</p>
      </div>

      <PortfolioWorks />

      {/* Approach Section */}
      <div className="mt-8 w-[60%] mx-auto py-12 bg-gray-300 bg-opacity-10 rounded-lg flex flex-col gap-12 leading-loose">
        <h2 className="text-6xl font-bold mb-4">the approach</h2>
        <p className="text-md text-gray-700">{work.approach}</p>
      </div>

      {/* Results Section */}
      <div className="mb-12 flex flex-col lg:flex-row justify-center items-center lg:items-start mt-16 gap-10">
        {/* Sol kısım - Followers Gained & Impressions Increase */}
        <div className="flex flex-col gap-6">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
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
              followers gained
            </motion.p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
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
              impressions increase
            </motion.p>
          </div>
        </div>

        {/* Sağ kısım - The Results Text */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold text-gray-900"
          >
            the results
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            {work.results.resultsText}
          </motion.p>
        </div>
      </div>

      <OtherWorks />
    </>
  );
}
