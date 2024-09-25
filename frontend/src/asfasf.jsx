import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/">
              <a>Logo</a>
            </Link>
          </div>

          {/* Menu Section */}
          <div className="hidden md:flex space-x-6">
            <Link href="/">
              <a className={`text-lg ${router.pathname == "/" ? "text-blue-500" : "text-gray-800"} hover:text-blue-500`}>
                Home
              </a>
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? 'M4 6h16M4 12h16m-7 6h7' : 'M6 18L18 6M6 6l12 12'}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <Link href="/">
            <a className={`block py-2 text-lg ${router.pathname == "/" ? "text-blue-500" : "text-gray-800"} hover:text-blue-500`}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={`block py-2 text-lg ${router.pathname == "/about" ? "text-blue-500" : "text-gray-800"} hover:text-blue-500`}>
              About Us
            </a>
          </Link>
          <Link href="/portfolio">
            <a className={`block py-2 text-lg ${router.pathname == "/portfolio" ? "text-blue-500" : "text-gray-800"} hover:text-blue-500`}>
              Portfolio
            </a>
          </Link>
          <Link href="/blog">
            <a className={`block py-2 text-lg ${router.pathname == "/blog" ? "text-blue-500" : "text-gray-800"} hover:text-blue-500`}>
              Blog
            </a>
          </Link>
          <Link href="/contact">
            <a className={`block py-2 text-lg ${router.pathname == "/contact" ? "text-blue-500" : "text-gray-800"} hover:text-blue-500`}>
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
