'use client';

import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { FaTimes } from 'react-icons/fa';
import { navbarData } from "../../fakeDatas/navbarData";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 flex items-center md:justify-between justify-between md:px-36 px-6 py-6 bg-white shadow-md font-ibm">
            <div className="flex items-center space-x-2">
                <img src={navbarData.logoSrc} alt={navbarData.logoAlt} className="md:h-16 h-10" />
                <span className="md:text-3xl text-2xl">{navbarData.title}</span>
            </div>

            <div className="hidden md:flex space-x-12">
                {navbarData.links.map((link, index) => (
                    <a key={index} href={link.href} className="text-gray-800 hover:text-orange-700 font-semibold">
                        {link.label}
                    </a>
                ))}
            </div>

            <div className="md:hidden flex items-center gap-4">
                <button className="bg-black hover:bg-gray-600 text-white px-4 py-2 font-bold rounded">
                    {navbarData.connectButtonText}
                </button>
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
                    {isOpen ? (
                        <FaTimes className="h-6 w-6" />
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-6">
                    <div className="flex flex-col space-y-10">
                        {navbarData.links.map((link, index) => (
                            <a key={index} href={link.href} className="text-gray-600 font-medium flex justify-between items-center">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            <div className="items-center justify-center h-full hidden md:block space-x-8">
                <button className="text-black text-2xl hover:text-gray-600">
                    <IoIosSearch />
                </button>
                <button className="bg-black text-white px-4 py-2 font-bold hover:bg-gray-600">
                    {navbarData.connectButtonText}
                </button>
            </div>
        </nav>
    );
}
