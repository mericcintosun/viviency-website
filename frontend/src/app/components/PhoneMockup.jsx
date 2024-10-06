"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ComputerMockup({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to handle moving to the next image
  const nextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle moving to the previous image
  const prevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Reset animation state after image load
  const handleImageLoad = () => {
    setIsAnimating(false);
  };

  return (
    <div className="h-[80vh] flex justify-center items-center bg-gray-100">
      <div className="relative mx-auto w-full max-w-[90%] md:max-w-[1024px]">
        {/* Laptop Frame (Outer Border) */}
        <div className="border-[8px] border-gray-800 rounded-xl shadow-2xl relative bg-black dark:border-gray-700 dark:bg-gray-900">
          {/* Laptop Screen */}
          <div className="overflow-hidden bg-black relative h-[70vh] rounded-t-xl">
            {images.length > 0 && (
              <Image
                key={currentIndex}
                src={images[currentIndex]}
                className={`h-full w-full object-cover transition-opacity duration-500 ease-in-out ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
                alt={`Laptop Screen ${currentIndex + 1}`}
                fill
                onLoadingComplete={handleImageLoad}
              />
            )}
            {/* Loading Spinner */}
            {isAnimating && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="w-10 h-10 border-4 border-gray-300 rounded-full animate-spin border-t-gray-600"></div>
              </div>
            )}

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 transition duration-300 rounded-full p-3 focus:outline-none shadow-lg"
              aria-label="Previous Image"
            >
              <span className="text-lg text-gray-900">&#9664;</span>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 transition duration-300 rounded-full p-3 focus:outline-none shadow-lg"
              aria-label="Next Image"
            >
              <span className="text-lg text-gray-900">&#9654;</span>
            </button>
          </div>

          {/* Bottom Section (Laptop Base) */}
          <div className="relative mx-auto bg-gray-900 dark:bg-gray-800 rounded-b-lg h-[40px] w-full mt-1">
            <div className="absolute left-1/2 transform -translate-x-1/2 rounded-b-lg w-[120px] h-[10px] bg-gray-700 dark:bg-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
