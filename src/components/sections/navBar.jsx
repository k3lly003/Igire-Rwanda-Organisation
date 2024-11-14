"use client";

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { navbarData } from "../../fakeDatas/navbarData";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 flex justify-center px-6 py-6 shadow-md font-ibm w-full">
      <div className=" flex justify-between w-full md:max-w-screen-xl">
        <div className="flex items-center">
          <Image
            src={navbarData.logoSrc}
            width={100}
            height={100}
            alt={navbarData.logoAlt}
            className="md:h-20 h-10"
          />
          <div className="flex flex-col">
            <h2 className="text-sm">{navbarData.title1}</h2>
            <p className="text-md">{navbarData.title2}</p>
          </div>
        </div>

        <div className="hidden md:flex md:justify-center md:items-center mx- space-x-12  text-xl font-bold">
          {navbarData.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-800 hover:text-orange-700 font-semibold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button className="bg-black hover:bg-gray-600 text-white px-4 py-2 font-bold rounded">
            {navbarData.connectButtonText}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-6">
            <div className="flex flex-col space-y-10">
              {navbarData.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 font-medium flex justify-between items-center"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="items-center justify-center h-full hidden md:block">
          <button className="bg-black text-white px-2 py-6 hover:bg-gray-600">
            {navbarData.connectButtonText}
          </button>
        </div>
      </div>
    </nav>
  );
}
