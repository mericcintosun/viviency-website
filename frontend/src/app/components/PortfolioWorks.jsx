"use client";
import { portfolioData } from "@/data/portfolioData";
import { useParams } from "next/navigation"; 
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export default function PortfolioWorks() {
  const { id } = useParams(); 
  const project = portfolioData.find((item) => item.id === id); 

  const scrollContainerRef = useRef(null);
  const scrollPosition = useRef(0);
  const speed = 1;
  const [currentSpeed, setCurrentSpeed] = useState(speed);

  const handleMouseDown = (e) => {
    const container = scrollContainerRef.current;
    const startX = e.pageX - container.offsetLeft;
    const scrollLeft = container.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 0.5;
      const newScrollLeft = scrollLeft - walk;
      container.scrollLeft = newScrollLeft;
      scrollPosition.current = newScrollLeft;
    };

    const handleMouseUp = () => {
      container.style.cursor = "grab";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    container.style.cursor = "grabbing";
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    e.preventDefault();
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    let animationFrameId;

    const scrollAutomatically = () => {
      if (container) {
        scrollPosition.current += currentSpeed;
        container.scrollLeft = scrollPosition.current;

        if (
          scrollPosition.current >=
          container.scrollWidth - container.clientWidth
        ) {
          scrollPosition.current = 0;
          container.scrollLeft = scrollPosition.current;
        }
      }
      animationFrameId = requestAnimationFrame(scrollAutomatically);
    };

    animationFrameId = requestAnimationFrame(scrollAutomatically);

    return () => cancelAnimationFrame(animationFrameId);
  }, [currentSpeed]);

  const handleMouseEnter = () => {
    setCurrentSpeed(speed * 0.5);
  };

  const handleMouseLeave = () => {
    setCurrentSpeed(speed);
  };

  if (!project) {
    return <div>Proje bulunamadı.</div>;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex items-center overflow-x-auto hide-scrollbar relative"
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        id="projects"
      >
        {project.images.map((image, index) => (
          <div
            key={index}
            className="relative min-w-[500px] py-12 px-2 text-white inline-block group"
          >
            <img
              src={image}
              alt={`Image ${index + 1} for ${project.title}`}
              className="block w-full "
            />
            <div className="absolute inset-0  z-10 transition-opacity duration-300"></div>
            
          
          </div>
        ))}
      </div>
    </div>
  );
}
