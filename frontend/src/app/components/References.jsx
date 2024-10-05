"use client";
import Link from "next/link";
import React from "react";
export default function References() {
  const logos = [
    "/assets/references/aorus.png",
    "/assets/references/bephantol.webp",
    "/assets/references/itopya.png",
    "/assets/references/kfc.webp",
    "/assets/references/maybelline.png",
    "/assets/references/mutlu-bale.webp",
    "/assets/references/nasaqu.webp",
    "/assets/references/pepsi.png",
    "/assets/references/steelseries.webp",
    "/assets/references/supradyn.webp",
    "/assets/references/teknosa.png",
    "/assets/references/zio.webp",
  ];
  
  const links = [
    "https://www.aorus.com/tr-tr",
    "https://www.bepanthol.com.tr/",
    "https://www.itopya.com/",
    "https://kfcturkiye.com/",
    "https://www.maybelline.com.tr/",
    "https://www.mutlubale.com/",
    "https://www.nasaqu.com.tr/",
    "https://pepsi.com.tr/",
    "https://tr.steelseries.com/",
    "https://www.supradyn.com.tr/",
    "https://www.teknosa.com/",
    "https://ziogaming.com/",
  ];

  return (
    <>
      <div className="w-[80%] mx-auto py-6">
        <h1 className=" mb-3 text-4xl font-bold leading-tight py-6 sm:text-6xl lg:text-[6rem] xl:text-[7rem]">Referanslarımız</h1>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {logos.map((logo, index) => (
            <Link
              key={index}
              href={links[index]} 
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-full h-full object-contain p-4 transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-[10px] lg:text-[14px] font-semibold">
                {links[index]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
