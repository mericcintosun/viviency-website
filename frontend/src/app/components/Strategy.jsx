"use client";

import { useState } from "react";

export default function Strategy() {
  const backgroundImages = {
    image1: "/assets/what-we-do.webp",
    image2: "/assets/how-we-do-it.webp",
    image3: "/assets/who-we-help.webp",
  };
  const titles = {
    title1: "where strategy meets creativity",
    title2: "human-first social marketing",
    title3: "ambitious brands making",
  };
  const descriptions = {
    desc1:
      "Empower your brand with strategic insight and creative flair, meticulously combined to deliver outstanding results on social media.",
    desc2:
      "The go-to social media agency to showcase your team and create authentic human connections with your customers.",
    desc3:
      "We're the social agency for brands that aspire to stand out—whether through dedication to people, the planet, or innovative excellence.",
  };

  const [backgroundImage, setBackgroundImage] = useState(
    "/assets/what-we-do.webp"
  );
  const [titleText, setTitleText] = useState("where strategy meets creativity");
  const [descriptionText, setDescriptionText] = useState(
    "Empower your brand with strategic insight and creative flair, meticulously combined to deliver outstanding results on social media."
  );
  const [fadeOut, setFadeOut] = useState(false); // Şeffaflık animasyonu için state

  const handleChange = (imageKey, titleKey, descKey) => {
    setFadeOut(true); // Şeffaflık animasyonunu başlat
  
    setTimeout(() => {
      setBackgroundImage(backgroundImages[imageKey]);
      setTitleText(titles[titleKey]);
      setDescriptionText(descriptions[descKey]);
      setFadeOut(false); 
    }, 500);
  };
  return (
    <>  
      <div
        className={`strategy text-white flex flex-col transition-opacity duration-500 ${
          fadeOut ? "opacity-85" : "opacity-100"
        }`}
        id="strategy"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "85vh",
          width: "100%",
          transition: "background-image 0.5s ease-in-out", 
        }}
      >
        <div className="boxex border flex justify-center group">
          <div className="box w-[33%] justify-center items-center border-r border-gray-700 hover:border-[#F07F55] transition-colors duration-300 ease-in-out">
            <button
              id="strategy-btn-one"
              onClick={() => handleChange("image1", "title1", "desc1")}
              className="hover:text-[#F07F55] transition-colors duration-300"
            >
              Birinci Arka Plan
            </button>
          </div>

          <div className="box w-[33%] justify-center items-center border-r border-gray-700 hover:border-[#F07F55] transition-colors duration-300 ease-in-out">
            <button
              id="strategy-btn-two"
              onClick={() => handleChange("image2", "title2", "desc2")}
              className="hover:text-[#F07F55] transition-colors duration-300"
            >
              İkinci Arka Plan
            </button>
          </div>
          <div
            id="strategy-box-3"
            className="box w-[33%] justify-center items-center"
          >
            <button
              id="strategy-btn-three"
              onClick={() => handleChange("image3", "title3", "desc3")}
              className="hover:text-[#F07F55] transition-colors duration-300"
            >
              Üçüncü Arka Plan
            </button>
          </div>
        </div>

        <div
          className={`flex flex-col justify-center gap-6 transition-all duration-700 transform ${
            fadeOut ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
          id="text-box"
        >
          <h1 className="text-7xl font-bold">{titleText}</h1>
          <p className="text-2xl">{descriptionText}</p>
        </div>
      </div>
    </>
  );
}
