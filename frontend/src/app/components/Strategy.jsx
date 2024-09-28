"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  const [titleText, setTitleText] = useState(titles.title1);
  const [descriptionText, setDescriptionText] = useState(descriptions.desc1);
  const [direction, setDirection] = useState();
  const [slideIn, setSlideIn] = useState(true);
  const [activeButton, setActiveButton] = useState("/assets/what-we-do.webp");
  const [isLargeScreen, setIsLargeScreen] = useState();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth <= 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (imageKey, titleKey, descKey, newDirection) => {
    setSlideIn(false);
    setDirection(newDirection);
    setTimeout(() => {
      setBackgroundImage(backgroundImages[imageKey]);
      setTitleText(titles[titleKey]);
      setDescriptionText(descriptions[descKey]);
      setActiveButton(imageKey);
      setSlideIn(true);
    }, 200);
  };

  useEffect(() => {
    handleChange("image1", "title1", "desc1");
  }, []);

  return (
    <>
      <motion.div
        key={backgroundImage}
        initial={{ opacity: 1, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.1,
        }}
        className={`lg:static xl:strategy xl:relative xl:w-full xl:h-[85vh] xl:bg-cover xl:bg-center  xl:text-white xl:flex xl:flex-col xl:transition-opacity xl:duration-500`}
        id="strategy"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "85vh",
          width: "100%",
        }}
      >
        <div id="strategy-box" className="xl:boxes xl:border xl:flex xl:justify-center group xl:absolute xl:w-full xl:h-[85dvh] xl:m-auto">
          <div
            className={`${
              activeButton === "image1" ? "border-[#F07F55]" : "border-gray-700"
            } xl:w-[33%]  xl:border-r xl:pb-12 border-gray-700 hover:border-[#F07F55] transition-all duration-300 `}
          >
            <motion.button
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.8,
                delay: 0.2,
              }}
              id="strategy-btn-one"
              onClick={() => handleChange("image1", "title1", "desc1")}
              className={`${
                activeButton === "image1" ? "text-[#F07F55]" : ""
              }  xl:hover:text-[#F07F55] md:text-3xl  xl:relative xl:transform xl:-rotate-90 xl:text-2xl  xl:pb-2 xl:top-[450px] xl:left-[350px] xl:z-[100] transition-colors duration-300`}
            >
              What We Do
            </motion.button>
          </div>

          <div
            className={`${
              activeButton === "image2" ? "border-[#F07F55]" : "border-gray-700"
            } xl:w-[33%] xl:justify-center xl:items-center xl:border-r xl:pb-12 border-gray-700 hover:border-[#F07F55] transition-all duration-300 `}
          >
            <motion.button
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.8,
                delay: 0.2,
              }}
              id="strategy-btn-two"
              onClick={() => handleChange("image2", "title2", "desc2")}
              className={`${
                activeButton === "image2" ? "text-[#F07F55]" : ""
              }  hover:text-[#F07F55] md:text-3xl  xl:relative xl:transform xl:-rotate-90 xl:text-2xl  xl:pb-2 xl:top-[450px] xl:left-[350px] xl:z-[100] xl:transition-colors xl:duration-300`}
            >
              How We Do It
            </motion.button>
          </div>
          <div
            id="strategy-box-3"
            className="xl:box xl:w-[33%] xl:justify-center xl:items-center xl:border-none xl:pb-12"
          >
            <motion.button
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.8,
                delay: 0.2,
              }}
              id="strategy-btn-three"
              onClick={() => handleChange("image3", "title3", "desc3")}
              className={`${
                activeButton === "image3" ? "text-[#F07F55]" : ""
              } hover:text-[#F07F55] md:cursor-pointer md:text-3xl  xl:relative xl:transform xl:-rotate-90 xl:text-2xl  xl:top-[430px] xl:left-[300px] xl:z-[100] xl:transition-colors xl:duration-300 xl:pb-12`}
            >
              Who We Help
            </motion.button>
          </div>
        </div>

        <div id="strategy-content" className="xl:flex xl:flex-col xl:justify-center xl:gap-6 xl:h-[70%] xl:pt-[-4rem] pl-[6rem] xl:pl-[6rem] xl:w-[60%] pr-6">
          <motion.h1
            key={titleText}
            className="text-3xl font-bold sm:text-6xl md:text-white md:font-bold  xl:font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            id="title"
          >
            {titleText}
          </motion.h1>

          <motion.p
            key={descriptionText}
            className="text-md sm:text-xl md:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {descriptionText}
          </motion.p>
        </div>
      </motion.div>
    </>
  );
}
