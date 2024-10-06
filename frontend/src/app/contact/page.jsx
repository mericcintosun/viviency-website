"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic"; // Dinamik import

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
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#F07F55] focus:border-[#F07F55] sm:text-sm p-2"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#F07F55] focus:border-[#F07F55] sm:text-sm p-2"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                (Optional) Phone number
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#F07F55] focus:border-[#F07F55] sm:text-sm p-2"
                placeholder="Phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your message
              </label>
              <textarea
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#F07F55] focus:border-[#F07F55] sm:text-sm p-2"
                placeholder="Tell us about your brand and why you're looking for a social agency."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#F07F55] text-white py-3 px-4 rounded-lg hover:bg-[#e07040] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/assets/contactImage.jpg"
            alt="Contact"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </>
  );
}
