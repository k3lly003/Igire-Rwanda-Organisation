import { RiArrowRightSLine } from "react-icons/ri";
import { heroData } from "@/fakeDatas/heroData";
import Image from "next/image";
import {
  MapPin,
  Mail,
  User,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  LocateIcon,
} from "lucide-react";
import { ContactData } from "@/fakeDatas/ContactPageFakes";
import DefaultBanner from "../components/DefaultBanner";

export default function HeroSection() {
  const { imageSrc, imageAlt, title, description, buttonText } = heroData;
  const { bannerData } = ContactData;
  return (
    <>
      <div>
        <DefaultBanner
          title={bannerData.title}
          backgroundImage={bannerData.backgroundImage}
        />
      </div>
      <div className=" lg:flex lg:justify-center w-full mb-20">
        <div className=" md:py-10 lg:max-w-screen-xl flex flex-col-reverse justify-center items-center md:flex-row md:container ">
          {/* Contact Information Section */}
          <div className=" relative sm:text-center sm:gap-5 items-center md:text-start left-0 bottom-16 md:bottom-0 bg-black text-white flex flex-col justify-evenly px-5 py-10 w-[85%] md:w-[40%] md:left-12">
            <div className="flex flex-col items-center ">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                {ContactData.title}
              </h2>

              <div className=" space-y-3 md:space-y-4 text-lg md:text-xl">
                <div className="flex items-start space-x-2 md:space-x-3">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 mt-1" />
                  <div>
                    <p>{ContactData.location}</p>
                    <p>{ContactData.street}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 md:space-x-3">
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  <p>{ContactData.email}</p>
                </div>

                <div className="flex items-center space-x-2 md:space-x-3">
                  <User className="w-4 h-4 md:w-5 md:h-5" />
                  <p>{ContactData.city}</p>
                </div>

                <div className="flex items-center space-x-2 md:space-x-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  <p>{ContactData.Phone}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 md:space-x-4 mt-6">
              <Instagram className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:text-gray-300" />
              <Twitter className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:text-gray-300" />
              <Linkedin className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:text-gray-300" />
            </div>
          </div>
          <div className=" py-10 mb-4 md:mb-0 w-full md:w-[screen] lg:border-0 xl:w-[90%] ">
            <div className="mb-12 md:mb-0 max-w-full md:max-w-4xl  md:h-[30rem] shadow-xl overflow-hidden flex items-center justify-center">
              {/* Right Section - Contact Form */}
              <div className="place-items-center p-4 md:p-5 md:w-3/5 flex flex-col justify-center h-full">
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">
                  {ContactData.subtitle}
                </h2>
                <p className="text-gray-600 mb-4 md:mb-6 text-lg md:text-xl">
                  {ContactData.description}
                </p>

                <form className="space-y-3 md:space-y-4">
                  <input
                    type="text"
                    placeholder="Your name..."
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  />
                  <textarea
                    rows={4}
                    placeholder="Type your message here..."
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-black resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="mb-4 md:mb-0 w-full rounded-lg bg-gradient-to-r from-black to-gray-400 text-white font-semibold py-2 md:py-3 px-6 md:px-8 shadow-md hover:from-gray-500 hover:to-black transition-all duration-300 text-lg md:text-xl"
                  >
                    {ContactData.sendButton}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
