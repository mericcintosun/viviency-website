"use client";

import { useParams } from "next/navigation";
import servicesData from "@/data/servicesData";
import { Carousel, IconButton } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);
      setMatches(media.matches);

      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);

      return () => media.removeEventListener("change", listener);
    }
  }, [query]);

  return matches;
}

export default function ComputerMockup() {
  const params = useParams();
  const slug = params.slug;

  // Find the service based on the slug
  const service = servicesData.find((service) => service.slug === slug);

  // If service is not found, handle the error
  if (!service) {
    return <p>Service not found</p>;
  }

  // Use custom hook to detect mobile view
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Wait until we know if it's mobile or not
  if (isMobile === null) {
    return null; // or a loading indicator
  }

  // Choose images based on device
  const currentImages = isMobile ? service.responsiveImages : service.images;

  return (
    <>
      <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl w-full mx-auto text-center bg-[#F07F55] text-white p-12">
        Çalıştığımız Markalar
      </h1>
      <div className="w-full h-[80dvh] py-6 lg:h-[80vh] mx-auto relative bg-black">
        <Carousel
          transition={{ duration: 0.5 }}
          className="rounded-xl h-full"
          autoplay={false}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-1/2 -translate-y-1/2 left-4"
            >
              <ChevronLeftIcon strokeWidth={2} className="w-6 h-6" />
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-1/2 -translate-y-1/2 right-4"
            >
              <ChevronRightIcon strokeWidth={2} className="w-6 h-6" />
            </IconButton>
          )}
        >
          {currentImages.map((imageSrc, index) => (
            <div key={index} className="relative h-full w-full group">
              <Image
                src={imageSrc}
                alt={`Image ${index + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <ul className="mt-2">
                    {service.objective.map((item, idx) => (
                      <li key={idx} className="text-lg">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
