// components/ContactContent.jsx
"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Form from "./Form";

const MyMap = dynamic(() => import("./MyMap"), { ssr: false });
const Enquire = dynamic(() => import("./Enquire"), { ssr: false });

const content = ["satışlarınızı artırmak", "markanızı tanıtmak"];
const buttonTwoText = "enquire now";
const loveText = "ister misiniz?";

export default function ContactContent() {
  const phrases = ["strategy", "creative", "impact", "social", "results"];
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
      <div className="container mx-auto px-12 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h1 className="text-6xl font-bold">
            let's talk &nbsp;
            <span
              className="text-[#F07F55] transition-opacity duration-500"
              style={{ opacity }}
            >
              {phrases[index]}
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Fill in the below contact form and a member of our team will contact
            you to discuss.
          </p>

          {/* Form Bölümü */}
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
      <Enquire
        titleText={loveText}
        phrases={content}
        buttonText={buttonTwoText}
      />
    </>
  );
}
