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
      <nav className="bg-slate-200">
        <div className="container mx-auto px-4 border">
          <div className="flex justify-between items-center py-5 px-12 border">
            {/* LOGO */}
            <div>
              <Link href="/" className="flex">
                <Image className="" src="/logo.png" width={200} height={1} />
              </Link>
            </div>
            {/* MENU SECTION */}
            <div className="hidden md:flex space-x-6 items-center">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg nav_item ${
                    pathname === item.href ? "text-[#F07F55]" : "text-[#242424]"
                  } hover:text-[#F07F55]`}
                >
                  {item.label}
                </Link>
              ))}
              <Button/>
            </div>
            {/* HAMBURGER ICON */}
            <div className="md:hidden flex items-center">
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
            className={`${isOpen ? "block" : "hidden"} md:hidden flex flex-col`}
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg ${
                  pathname === item.href ? "text-blue-500" : "text-white"
                } hover:text-blue-500`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
