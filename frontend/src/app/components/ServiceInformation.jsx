"use client";

import { useParams } from "next/navigation";
import servicesData from "@/data/servicesData";

export default function ServiceInformation() {
  const params = useParams();
  const slug = params.slug;

  const service = servicesData.find((service) => service.slug === slug);

  const { information } = service;
  const info1 = information.find((info) => info.id === 1);
  const info2 = information.find((info) => info.id === 2);

  return (
    <div className="flex flex-col w-[85%] mx-auto mb-12">
      <div className="flex flex-col md:flex-row gap-12">
        {info1 && (
          <div
            key={info1.id}
            className="flex flex-col gap-12 w-full md:w-[45%]"
          >
            <h2 className="text-black font-bold text-3xl md:text-4xl lg:text-5xl lg:leading-loose">
              {info1.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {info1.description}
            </p>
          </div>
        )}
        {info2 && (
          <div
            key={info2.id}
            className="flex flex-col gap-12 w-full md:w-[45%]"
          >
            <h2 className="text-[#F07F55] font-bold text-3xl md:text-4xl lg:text-5xl lg:leading-loose">
              {info2.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {info2.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
