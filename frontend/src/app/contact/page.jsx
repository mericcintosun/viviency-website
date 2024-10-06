"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MyMap from "../components/MyMap";
import Enquire from "../components/Enquire";
import Form from "../components/Form";

const content = ["satışlarınızı artırmak", "markanızı tanıtmak"];
const buttonTwoText = "enquire now";
const loveText = "ister misiniz?";
// Map bileşeni dinamik olarak yüklenir

export default function ContactForm() {
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
