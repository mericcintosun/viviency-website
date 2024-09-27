"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Button from "./Button";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "ana sayfa" },
    { href: "/about", label: "biz" },
    { href: "/portfolio", label: "portfolyo" },
    { href: "/blog", label: "blog" },
    { href: "/contact", label: "iletişim" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="border-b font-medium flex flex-col px-12 sm:m-0 sm:p-0">
        <nav className="xl:m-0 xl:p-0">
          <div className="container mx-auto px-12">
            <div className="flex justify-between items-center py-5 gap-12">
              {/* LOGO */}
              <div>
                <Link href="/" className="flex">
                  <Image
                    className="bg-black p-2 md:ml-0"
                    src="/logo.png"
                    width={200}
                    height={1}
                  />
                </Link>
              </div>
              {/* MENU SECTION */}
              <div className="hidden lg:flex items-center gap-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-md nav_item ${
                      pathname === item.href
                        ? "text-[#F07F55]"
                        : "text-[#242424]"
                    } hover:text-[#F07F55]`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button />
              </div>
              
              {/* HAMBURGER ICON */}
              <div className="lg:hidden flex items-center mr-4">
                <button
                  onClick={toggleMenu}
                  className="text-white focus:outline-none"
                >
                  <Image src="/hamburger.png" width={40} height={40} />
                </button>
              </div>
            </div>
            {/* Mobile Menu */}
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } lg:hidden flex flex-col gap-4 mx-4 `}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg border-b border-black py-2 ${
                    pathname === item.href ? "text-[#F07F55]" : "text-[#242424]"
                  } hover:text-[#F07F55]`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
