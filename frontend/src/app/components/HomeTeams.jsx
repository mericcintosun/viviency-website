"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomeTeams() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <div id="home-teams" className="bg-white">
        <div className="flex relative p-6 lg:justify-center">
          <Image
            src="/assets/bersu.jpg"
            width={1000}
            height={1000}
            className="rounded-full object-cover lg:w-[700px] flex flex-col justify-center"
            alt="Bersu"
            quality={100}
            priority
          />
          <Image
            src="/assets/arrow.png"
            width={105}
            height={105}
            className="object-contain absolute left-[200px] sm:w-[210px] sm:h-[210px] sm:left-[350px] md:left-[450px] lg:left-[600px] lg:w-[300px] lg:h-[300px] xl:left-[700px] 2xl:left-[850px]"
            alt="Arrow"
            quality={100}
            priority
          />
          <div className="absolute" id="content-box">
            <motion.span
              className="bg-[#F07F55] text-white px-4 py-2 rounded-full font-bold text-xl absolute left-[280px] cursor-pointer sm:px-6 sm:py-4 sm:left-[530px] md:left-[650px] lg:left-[400px] lg:px-8 lg:py-4 lg:top-[30px] xl:px-12 xl:text-3xl transition-transform duration-300 ease-in-out hover:bg-[#D0653B] hover:scale-105 hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: false }}
              onClick={() => setShowContent(true)}
            >
              Biz
            </motion.span>

            {showContent && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="bg-white p-6 rounded-lg max-w-sm sm:max-w-md md:max-w-lg mx-auto relative"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    className="absolute top-2 right-2 px-2 py-1 bg-[#F07F55] text-white rounded"
                    onClick={() => setShowContent(false)}
                  >
                    X
                  </button>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                    Ekibimiz
                  </h1>
                  <p className="text-sm sm:text-base md:text-[15px] mb-12">
                    Enerjisi yüksek ve yaratıcı düşünen çekirdek ekibimizin
                    birinci önceliği sizi iyi tanımak. Bu sayede isteklerinizi
                    ve ihtiyaçlarınızı en iyi şekilde anlayıp, buna göre, size
                    özel çözümler üretiyoruz. Markanızı geliştirecek fikirleri
                    ve içerikleri yüksek bir özveriyle üretiyor, uzmanlaşma
                    gerektiren pek çok kritik alanda profesyonel destek
                    sunuyoruz.
                  </p>
                  <Link
                    href="/about"
                    target="_blank"
                    className="bg-[#F07F55] px-6 py-2 text-2xl rounded-xl text-white font-bold transition duration-300 ease-in-out transform  hover:-translate-y-1 hover:shadow-lg float-right"
                  >
                    Biz
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
