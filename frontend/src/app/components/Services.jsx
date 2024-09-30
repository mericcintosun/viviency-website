"use client";

import Image from "next/image";

export default function Services() {
  return (
    <>
      <div className="w-[90%] mx-auto flex flex-col gap-6 sm:gap-12 mb-6 xl:flex-row-reverse xl:mt-12">
        <Image
        id="services-bersu"
          className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          src="/assets/services-bersu.jpg"
          width={200}
          height={150}
          alt="brand"
          layout="responsive"
        />

        <div id="services-texts" className="flex flex-col gap-4">
          <h1 className="font-bold text-5xl leading-tight sm:text-center sm:text-6xl lg:text-7xl lg:text-start">
            social media  marketing 
            <span className="text-[#F07F55]"> services</span>
          </h1>
          <p className="italic font-normal leading-loose w-[90%] lg:text-xl lg:w-full">
            Our philosophy is that effective social media marketing requires
            <strong> strategic insight</strong> and{" "}
            <strong>creative flair</strong>. Our team embodies this dual
            approach to ensure our social media marketing services produce
            maximum impact for your brand.
          </p>
          <p className="font-bold text-gray-700 lg:text-xl" id="services-author">
            - <span className="text-[#F07F55]">Bersu Alkaç</span>, Creative
            Director.
          </p>
        </div>
      </div>
    </>
  );
}
