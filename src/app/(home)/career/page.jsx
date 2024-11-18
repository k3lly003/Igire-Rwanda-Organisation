import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { IoIosRefresh } from "react-icons/io";
import { RiUserHeartLine } from "react-icons/ri";
import { GiUpgrade } from "react-icons/gi";
import { FaRegClock, FaArrowRight } from "react-icons/fa";
import DefaultBanner from "../components/DefaultBanner";
import CareerPageData from "@/fakeDatas/CareerPageData";

const Page = () => {
  const { bannerData } = CareerPageData;
  return (
    <section>
      <div>
        <DefaultBanner
          title={bannerData.title}
          backgroundImage={bannerData.backgroundImage}
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col py-14 mx-28 font-ibm max-w-screen-xl">
          <div className="text-2xl font-bold text-center pb-12">
            Why you Should Join Our Awesome Team
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  ">
            {/* Teamwork */}
            <div className="flex flex-col items-start px-6 py-3 transform transition-transform duration-300 hover:-translate-y-3 hover:border-2 hover:border-black">
              <div className="p-4 bg-blue-100 rounded-md mb-4">
                <AiOutlineTeam className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Team work
              </h3>
              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </p>
            </div>

            {/* Secured Future */}
            <div className="flex flex-col items-start px-6 py-3 transform transition-transform duration-300 hover:-translate-y-3 hover:border-2 hover:border-black">
              <div className="p-4 bg-green-100 rounded-md mb-4">
                <IoIosRefresh className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Secured Future
              </h3>
              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </p>
            </div>

            {/* Impact on Community */}
            <div className="flex flex-col items-start px-6 py-3 transform transition-transform duration-300 hover:-translate-y-3 hover:border-2 hover:border-black">
              <div className="p-4 bg-gray-100 rounded-md mb-4">
                <RiUserHeartLine className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Impact on community
              </h3>
              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </p>
            </div>

            {/* Upgrade Skills */}
            <div className="flex flex-col items-start px-6 py-3 transform transition-transform duration-300 hover:-translate-y-3 hover:border-2 hover:border-black">
              <div className="p-4 bg-red-100 rounded-md mb-4">
                <GiUpgrade className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Upgrade Skills
              </h3>
              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </p>
            </div>
          </div>
        </div>

        {/* Job Openings Section */}

        <div
          id="job-openings"
          className="flex flex-col pb-14 px-4 sm:px-6 md:px-8 lg:px-5 w-full max-w-screen-xl font-ibm"
        >
          <div className="flex justify-start align-start mb-8 w-full">
            <div className="w-full flex justify-between items-center col mb-8">
              <h2 className="text-xl md:text-2xl font-bold py-6">
                Current Job Openings
              </h2>
              <select className="border border-black rounded-md p-2 mt-2 md:mt-0 md:ml-4">
                <option value="">All departments</option>
                <option value="hr">Human Resources</option>
                <option value="it">Program Manager</option>
                <option value="marketing">Marketing</option>
                <option value="facilitator">Course Facilitator</option>
                <option value="assistant">Assistant Course Facilitator</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg shadow-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-2">Lorem</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center text-sm text-gray-500 mr-4">
                  <FaRegClock />
                  <span>Posted: October 11, 2024</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FaRegClock />
                  <span>Deadline: October 11, 2024</span>
                </div>
              </div>
              <a
                href="career/jobDescription"
                className="text-blue-600 flex items-center hover:underline font-medium text-sm"
              >
                View full details <FaArrowRight className="w-5" />
              </a>
            </div>
            <div className="p-6 rounded-lg shadow-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-2">Lorem</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center text-sm text-gray-500 mr-4">
                  <FaRegClock />
                  <span>Posted: October 11, 2024</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FaRegClock />
                  <span>Deadline: October 11, 2024</span>
                </div>
              </div>
              <a
                href="career/jobDescription"
                className="text-blue-600 flex items-center hover:underline font-medium text-sm"
              >
                View full details <FaArrowRight className="w-5" />
              </a>
            </div>

            <div className="p-6 rounded-lg shadow-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-2">Lorem</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center text-sm text-gray-500 mr-4">
                  <FaRegClock />
                  <span>Posted: October 11, 2024</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FaRegClock />
                  <span>Deadline: October 11, 2024</span>
                </div>
              </div>
              <a
                href="career/jobDescription"
                className="text-blue-600 flex items-center hover:underline font-medium text-sm"
              >
                View full details <FaArrowRight className="w-5" />
              </a>
            </div>
            <div className="p-6 rounded-lg shadow-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-2">Lorem</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center text-sm text-gray-500 mr-4">
                  <FaRegClock />
                  <span>Posted: October 11, 2024</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FaRegClock />
                  <span>Deadline: October 11, 2024</span>
                </div>
              </div>
              <a
                href="career/jobDescription"
                className="text-blue-600 flex items-center hover:underline font-medium text-sm"
              >
                View full details <FaArrowRight className="w-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Subscribe Section */}
        <div className="py-10 items-center text-center font-ibm">
          <h2 className="text-2xl font-bold mb-4">SUBSCRIBE</h2>
          <p className="text-lg mb-6">
            Do you want to get news about our upcoming positions and news
          </p>

          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="bg-[#000] mb-10 text-white text-xl py-3 px-6 rounded-md hover:bg-gray-600 transition-colors duration-300 w-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
