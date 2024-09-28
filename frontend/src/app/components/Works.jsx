"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export default function Works() {
  const projects = Array.from(
    { length: 20 },
    (_, index) => `https://picsum.photos/450/250?random=${index + 1}`
  );

  const repeatedProjects = Array.from({ length: 10 }).flatMap(() => projects);

  const scrollContainerRef = useRef(null);
  const scrollPosition = useRef(0);
  const speed = 0.5;
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

  return (
    <div className="relative w-full overflow-hidden bg-[#F07F55]">
      <div
        ref={scrollContainerRef}
        className="flex items-center overflow-x-auto hide-scrollbar relative"
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        id="projects"
      >
        {repeatedProjects.map((project, index) => (
          <div
            key={index}
            className="relative min-w-[500px] py-12 px-2 text-white inline-block group"
          >
            <img
              src={project}
              alt={`Project ${index + 1}`}
              className="block w-full group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black opacity-50 z-10 transition-opacity duration-300"></div>
            {/* Başlık ve logo */}
            <div className="absolute inset-0 flex justify-between items-end z-20 p-4 ">
              <h1 className="bg-opacity-75 px-4 py-2 absolute bottom-[60px] left-[30px]">
                Title {index + 1}
              </h1>
              <p className="bg-opacity-75 px-4 py-2 absolute bottom-[60px] right-[30px]">
                Logo {index + 1}
              </p>
            </div>
            <Link href="/portfolio" className="absolute inset-0 flex items-center justify-center opacity-0 scale-50 transition-all duration-300 z-30 group-hover:opacity-100 group-hover:scale-100">
              <span className="bg-white text-black px-4 py-2 rounded">
                Review Now
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
