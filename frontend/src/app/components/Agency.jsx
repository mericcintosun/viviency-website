"use client";

import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import AgencyCard from "./AgencyCard";

export default function Agency() {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  // Transform the scrollY value for scaling and position
  const scaleTransform = useTransform(scrollY, [0, 300], [0.8, 1]);
  const yTransform = useTransform(scrollY, [0, 300], [50, 0]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest > 100) {
        controls.start({ opacity: 1, y: 0, scale: 1 });
      } else {
        controls.start({ opacity: 0, y: 50, scale: 0.8 });
      }
    });

    return () => unsubscribe();
  }, [controls, scrollY]);

  return (
    <>
      <div className="container mt-12 flex flex-col pl-4 gap-9 w-[70%] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="text-7xl font-bold sm:text-[6rem] lg:text-[6rem]"
        >
          social media <span className="text-[#F07F55]">agency</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-md sm:text-xl md:text-md lg:text-lg"
        >
          Outsource your social media to a trusted specialist social media
          agency that's been doing it for over 11 years.
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
