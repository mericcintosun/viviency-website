"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { memo } from "react";
import AgencyCard from "./AgencyCard";

const AnimatedHeader = memo(() => (
  <motion.h1
    initial={{ opacity: 0, y: -100, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className="text-7xl font-bold sm:text-[6rem] lg:text-[6rem]"
  >
    sosyal medya <span className="text-[#F07F55]">ajansı</span>
  </motion.h1>
));

export default function Agency() {
  const { scrollY } = useScroll();

  const scaleTransform = useTransform(scrollY, [0, 300], [0.8, 1]);
  const yTransform = useTransform(scrollY, [0, 300], [50, 0]);

  return (
    <>
      <div className="w-[90%] container mt-12 flex flex-col pl-4 gap-9 lg:w-[70%] mx-auto">
        <AnimatedHeader />
        <motion.p
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-md sm:text-xl md:text-md lg:text-lg"
        >
          Sosyal medyanızı 11 yıldan fazla süredir bu işi yapan güvenilir bir
          sosyal medya ajansına dış kaynak olarak verin.
        </motion.p>
      </div>

      <motion.div
        id="agency-cards"
        className="w-[85%] mx-auto mb-12"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: yTransform, scale: scaleTransform }}
        exit={{ opacity: 0, y: 20, scale: 0.8 }}
        transition={{ duration: 0.8 }}
      >
        <AgencyCard />
      </motion.div>
    </>
  );
}
