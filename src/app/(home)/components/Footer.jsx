import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';
import Container from './container';
import { quickLinks, companyLinks, visionText, tweets } from '@/fakeDatas/footerData';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-black text-white flex justify-center align-middle py-10 px-6 md:px-[1.563rem] font-ibm">
            <div className='max-w-screen-xl'>
                {/* Signup Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 px-2">
                    <div className="mb-4 md:mb-0">
                        <h2 className="font-bold text-2xl">Sign up for updates</h2>
                        <p className="text-white w-3/3 text-xl">
                            To receive updates from Igire Rwanda Organization Alert, including our latest toolkits, reports,
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 text-white">
                        <div className="flex items-center gap-1">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded-l-md bg-white text-black"
                            />
                            <button className="bg-black text-white font-bold p-2 rounded-r-md hover:bg-gray-600">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="border-t border-gray-700 pt-6 px-2">
                    <div className="flex flex-col md:flex-row justify-between mb-6">
                        {/* Logo and Vision Section */}
                        <div className="md:w-1/3 mb-6 md:mb-0">
                            <div className="mb-4">
                                <Image src="/logo.png" width={100} height={100} alt="Logo" className="w-20 h-auto" />
                            </div>
                            <h3 className="font-bold text-2xl">Our vision</h3>
                            <p className="text-white text-xl">{visionText}</p>
                        </div>

                        {/* Quick Links Section */}
                        <div className="flex flex-col md:flex-row md:w-2/3 justify-around">
                            <div className="mb-4 md:mb-0">
                                <h4 className="font-semibold text-2xl">Quick Links</h4>
                                <ul className="text-white mt-7 text-xl flex flex-col gap-3">
                                    {quickLinks.map((link, index) => (
                                        <a key={index} href={link.url}><li className='hover:text-gray-400'>{link.label}</li></a>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-4 md:mb-0">
                                <h4 className="font-semibold text-2xl">Company</h4>
                                <ul className="text-white mt-7 text-xl flex flex-col gap-3">
                                    {companyLinks.map((link, index) => (
                                        <a key={index} href={link.url}><li className='hover:text-gray-400'>{link.label}</li></a>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Tweets Section */}
                        <div className="md:w-1/3">
                            {/* <h4 className="font-semibold text-2xl">Tweets</h4>
                            <p className="text-white text-xl">Stay tuned for our latest tweets and updates here.</p> */}
                            {/* <div className="text-white mt-4 text-xl">
                                {tweets.map((tweet, index) => (
                                    <p key={index}>{tweet}</p>
                                ))}
                            </div> */}
                            {/* Social Icons */}
                            <div className="flex space-x-4 mt-4">
                                <FaTwitter size={20} className="text-white hover:text-blue-300 cursor-pointer" />
                                <FaFacebookF size={20} className="text-white hover:text-blue-500 cursor-pointer" />
                                <FaYoutube size={20} className="text-white hover:text-red-400 cursor-pointer" />
                                <FaLinkedinIn size={20} className="text-white hover:text-blue-600 cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <hr className="border-gray-700 mb-4" />
                    <div className="text-white text-sm text-center">
                        <p className='text-xl'>© 2024 ALL RIGHTS RESERVED. Igire Rwanda Organization (Reg. No. 327553) Company Reg. No. 02153193</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
