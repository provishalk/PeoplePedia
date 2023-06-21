"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-purple-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-white font-bold text-xl">PeoplePedia</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/directory">
                <span className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Directory
                </span>
              </Link>
              <Link href="/about">
                <span className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </span>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="text-white cursor-pointer text-2xl"
              onClick={toggleMenu}
            >
              <FaBars />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-2 flex flex-col items-center space-y-2 md:hidden">
            <Link href="/directory">
              <span className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Directory
              </span>
            </Link>
            <Link href="/about">
              <span className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
