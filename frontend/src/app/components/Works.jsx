"use client";
import { useState, useRef, useEffect } from "react";

export default function Works() {
  const projects = [
    "Proje 1",
    "Proje 2",
    "Proje 3",
    "Proje 4",
    "Proje 5",
    "Proje 6",
    "Proje 7",
    "Proje 8",
    "Proje 9",
    "Proje 10",
    "Proje 11",
    "Proje 12",
    "Proje 13",
    "Proje 14",
    "Proje 15",
    "Proje 16",
    "Proje 17",
    "Proje 18",
    "Proje 19",
    "Proje 20",
  ];

  const [repeatedProjects] = useState(() => {
    const repeated = [];
    for (let i = 0; i < 10; i++) {
      repeated.push(...projects);
    }
    return repeated;
  });

  const scrollContainerRef = useRef(null);
  const scrollRef = useRef(0);
  const speed = 1; // Normal kaydırma hızı
  const [currentSpeed, setCurrentSpeed] = useState(speed);

  const handleMouseDown = (e) => {
    const startX = e.pageX - scrollContainerRef.current.offsetLeft;
    const scrollLeft = scrollContainerRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 0.5;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
      scrollRef.current = scrollLeft - walk;
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

  useEffect(() => {
    let animationFrameId;

    const scrollAutomatically = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += currentSpeed;
        scrollRef.current += currentSpeed;

        if (
          scrollRef.current >=
          scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
        ) {
          scrollRef.current = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollAutomatically);
    };

    animationFrameId = requestAnimationFrame(scrollAutomatically);

    return () => cancelAnimationFrame(animationFrameId);
  }, [currentSpeed]); // currentSpeed değiştiğinde animasyonu güncelle

  // Mouse üzerinde olduğu zaman hızın yavaşlaması
  const handleMouseEnter = () => {
    setCurrentSpeed(speed * 0.25); // Hızı daha fazla yavaşlat
  };

  const handleMouseLeave = () => {
    setCurrentSpeed(speed); // Hızı eski haline döndür
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-200 py-12">
      <div
        ref={scrollContainerRef}
        className="flex items-center space-x-4 px-8 overflow-x-auto hide-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        id="projects"
      >
        {repeatedProjects.map((project, index) => (
          <div
            key={index}
            className="min-w-[200px] p-6 rounded-lg bg-blue-500 text-white"
          >
            {project}
          </div>
        ))}
      </div>
    </div>
  );
}
