"use client";

import { portfolioData } from "@/data/portfolioData";
import { useParams } from "next/navigation";

export default function PortfolioDetail() {
  const { id } = useParams();

  const work = portfolioData.find((item) => item.id === id);

  if (!work) {
    return <div>Portfolyo bulunamadı.</div>;
  }

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
          {/* Logo */}
          {work.logo && (
            <img
              src={work.logo}
              alt={`${work.client} logo`}
              className="mb-8 rounded-full"
              style={{ width: "128px", height: "128px" }} // 32x32 boyutunda logo
            />
          )}
          {/* Title */}
          <h1 className="text-5xl font-bold mb-4">{work.title}</h1>
          {/* Description */}
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
      <div className="mt-8 w-[40%] mx-auto py-12 bg-white bg-opacity-10 rounded-lg flex flex-col gap-12 leading-loose">
        <h2 className="text-6xl font-bold mb-4">the problem</h2>
        <p className="text-md text-gray-700">{work.problem}</p>
      </div>
    </>
  );
}
