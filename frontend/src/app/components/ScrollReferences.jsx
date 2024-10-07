"use client";
import { useState, useRef } from "react";

export default function ScrollReferences() {
  const logos = [
    "/assets/references/aorus.png",
    "/assets/references/bepanthol.png",
    "/assets/references/itopya.png",
    "/assets/references/kfc.png",
    "/assets/references/maybelline.png",
    "/assets/references/mutlu-bale.webp",
    "/assets/references/nasaqu.png",
    "/assets/references/pepsi.png",
    "/assets/references/steelseries.png",
    "/assets/references/supradyn.png",
    "/assets/references/teknosa.png",
    "/assets/references/ziogaming.png",
  ];

  const [repeatedLogos] = useState(() => {
    const repeated = [];
    for (let i = 0; i < 10; i++) {
      repeated.push(...logos);
    }
    return repeated;
  });

  const scrollContainerRef = useRef(null);

  const handleMouseDown = (e) => {
    const startX = e.pageX - scrollContainerRef.current.offsetLeft;
    const scrollLeft = scrollContainerRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      scrollContainerRef.current.style.cursor = "grab";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    scrollContainerRef.current.style.cursor = "grabbing";
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    e.preventDefault();
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#F07F55] py-12">
      <div
        ref={scrollContainerRef}
        className="mx-12 flex items-center space-x-8 px-8 overflow-x-auto hide-scrollbar"
        onMouseDown={handleMouseDown}
        id="logos"
        style={{
          background:
            "linear-gradient(90deg, rgba(240,127,85,1) 0%, rgba(240,127,85,0.7) 50%, rgba(240,127,85,1) 100%)",
        }}
      >
        {repeatedLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="w-[200px] mr-2 transform transition-transform" 
            style={{
              filter: "drop-shadow(0 8px 9px rgba(0, 0, 0, 0.4))",
            }}
          />
        ))}
      </div>
    </div>
  );
}
