"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F07F55] text-white py-6 px-6 mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="transition duration-300 ease-in-out transform hover:scale-105">
            <h5 className="font-bold text-lg">Viviency</h5>
            <ul className="mt-2 space-y-2">
              {[
                { name: "Ana Sayfa", href: "/" },
                { name: "Biz", href: "/about" },
                { name: "Hizmetler", href: "/works" },
                { name: "Portfolyo", href: "/portfolio" },
                { name: "Sesler", href: "/blog" },
                { name: "İletişim", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:underline transition duration-300 hover:text-gray-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="transition duration-300 ease-in-out transform hover:scale-105">
            <h5 className="font-bold text-lg">Politikamız</h5>
            <ul className="mt-2 space-y-2">
              {[
                { name: "KVKK Aydınlatma Metni", href: "/privacy/kvkk" },
                { name: "Kullanım Koşulları", href: "/privacy/terms" },
                { name: "Çerez Politikası", href: "/privacy/cookies" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:underline transition duration-300 hover:text-gray-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="transition duration-300 ease-in-out transform hover:scale-105">
            <h5 className="font-bold text-lg">Bize Ulaşın</h5>
            <p className="mt-2">
              Adres: Fenerbahçe Mahallesi, Fener Kalamış Caddesi <br /> No:72b
              Kat:1 Daire:7; Kadıköy/İSTANBUL
            </p>
            <p>Email: info@viviency.com</p>

            <div className="flex mt-4 space-x-4">
              <Link
                href="#"
                className="hover:text-gray-300 transition duration-300"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link
                href="#"
                className="hover:text-gray-300 transition duration-300"a
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
              <Link
                href="#"
                className="hover:text-gray-300 transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link
                href="#"
                className="hover:text-gray-300 transition duration-300"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white pt-4 text-center">
          <p className="transition duration-300 ease-in-out hover:text-gray-300">
            &copy; {new Date().getFullYear()} Viviency. All rights reserved.
            Digital Media Agency.
          </p>
        </div>
      </div>
    </footer>
  );
}
