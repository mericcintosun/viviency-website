"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Form from "./Form";
import { motion } from "framer-motion";
const MyMap = dynamic(() => import("./MyMap"), { ssr: false });
const Enquire = dynamic(() => import("./Enquire"), { ssr: false });

const content = ["satışlarınızı artırmak", "markanızı tanıtmak"];
const buttonTwoText = "bize ulaş";
const loveText = "ister misiniz?";

export default function ContactContent() {
  const phrases = [
    "yaratıcılık",
    "strateji",
    "sosyal medya",
    "pazarlama",
    "yazılım",
  ];
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
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        <div className="container mx-auto px-12 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold flex flex-col md:gap-5 md:flex md:flex-row">
              <span
                className="text-[#F07F55] transition-opacity duration-500"
                style={{ opacity }}
              >
                {phrases[index]}
              </span>
              <p>konuşalım</p>
            </h1>
            <p className="text-lg text-gray-600">
              Aşağıdaki iletişim formunu doldurun, ekibimizden bir üye sizinle
              iletişime geçerek konuyu görüşecektir.
            </p>

            <Form />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/contactImage.jpg"
              alt="Contact"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>

        <MyMap />
      </motion.div>
      <Enquire
        titleText={loveText}
        phrases={content}
        buttonText={buttonTwoText}
      />
    </>
  );
}
