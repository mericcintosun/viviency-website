"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Form from "./Form";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const pathname = usePathname();

  const phrases = [
    "yaratıcılık",
    "strateji",
    "sosyal medya",
    "pazarlama",
    "yazılım",
  ];
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setOpacity(1);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  const menuItems = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/about", label: "Biz" },
    { href: "/works", label: "Hizmetler" },
    { href: "/portfolio", label: "Portfolyo" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "İletişim" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    closed: {
      opacity: 0,
      y: -50,
    },
  };

  const menuItemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -50 },
  };

  return (
    <>
      <header className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
        <nav className="xl:m-0 xl:p-0">
          <div className="container mx-auto px-12">
            <div className="flex justify-between items-center py-5 gap-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Link href="/" className="flex">
                  <Image
                    className="bg-black p-2 md:ml-0"
                    src="/logo.png"
                    width={200}
                    height={1}
                    alt="logo"
                  />
                </Link>
              </motion.div>

              <motion.div
                className="hidden lg:flex items-center gap-6"
                initial="closed"
                animate="open"
                variants={menuVariants}
              >
                {menuItems.map((item) => (
                  <motion.div key={item.href} variants={menuItemVariants}>
                    <Link
                      href={item.href}
                      className={`text-md font-[300] transition-colors duration-300 ${
                        pathname === item.href
                          ? "text-[#F07F55]"
                          : "text-[#242424]"
                      } hover:text-[#F07F55] transform hover:scale-105 transition-transform duration-300`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <button
                    onClick={openPopup}
                    id="social-btn"
                    className="btn rounded-xl bg-[#F07F55] text-white px-4 py-2 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  >
                    <span className="scroll-text">Hadi Konuşalım!</span>
                  </button>
                </motion.div>
              </motion.div>

              <div className="lg:hidden flex items-center mr-4">
                <motion.button
                  onClick={toggleMenu}
                  className="text-black focus:outline-none relative w-10 h-10"
                  whileTap={{ scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <Image
                      src="/close.png"
                      width={40}
                      height={40}
                      alt="close"
                      className="absolute inset-0"
                    />
                  ) : (
                    <Image
                      src="/hamburger.png"
                      width={40}
                      height={40}
                      alt="menu"
                      className="absolute inset-0"
                    />
                  )}
                </motion.button>
              </div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="lg:hidden flex flex-col gap-4 mx-4"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center">
                    <button
                      onClick={toggleMenu}
                      className="text-black"
                    ></button>
                  </div>
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`text-lg border-b border-[#F07F55] py-2 transition-colors duration-300 mb-4  ${
                        pathname === item.href
                          ? "text-[#F07F55]"
                          : "text-[#242424]"
                      } hover:text-[#F07F55] hover:pl-4 transition-all duration-300`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="bg-white p-10 rounded-lg max-w-5xl w-full relative flex flex-col md:flex-row gap-12 md:gap-16">
              <div className="flex-1 flex flex-col justify-center px-4 md:px-6 lg:px-8 text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                <motion.span
                  className="font-bold text-[#F07F55] text-3xl pb-3  sm:text-4xl md:text-5xl lg:text-6xl mt-2"
                  animate={{ opacity }}
                  transition={{ duration: 0.5 }}
                >
                  {phrases[index]}
                </motion.span>
                <span className="font-bold text-black">konuşalım</span>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 text-gray-600">
                  Eğer bizimle uyumlu olabileceğimizi düşünüyorsanız, markanızı
                  ve hedeflerinizi bize iletin, memnuniyetle konuşalım.
                </p>

                <div className="mt-8 flex flex-col gap-6 text-sm text-gray-700">
                  <div className="text-left">
                    <p className="font-bold text-lg">
                      Kısa bir bilgi gönderin.
                    </p>
                    <p className="text-sm md:text-base">
                      Hırslı markalarla çalışma konusunda heyecan verici
                      fırsatlara açığız.
                    </p>
                    <p className="text-[#F07F55] text-sm md:text-base">
                      info@viviency.com
                    </p>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-lg">Kariyer</p>
                    <p className="text-sm md:text-base">
                      Büyüyen ekibimize katılmak ister misiniz?
                    </p>
                    <p className="text-[#F07F55] text-sm md:text-base">
                    info@viviency.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center text-black">
                <Form />
              </div>

              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-black"
              >
                <Image src="/close.png" width={24} height={24} alt="Close" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-[90px]"></div>
    </>
  );
}
