import React from 'react';
import { FaRegClock, FaArrowRight } from "react-icons/fa";

const JobDescription = () => {
  return (
    <section className="container py-14 max-w-full w-full font-ibm">
      <div className="flex flex-col lg:flex-row mx-4 lg:mx-32 gap-4">
        <div className="">
          <h1 className="text-xl lg:text-2xl font-bold mb-4">Lorem Ipsum</h1>
          <h2 className="text-md lg:text-lg mb-1">At Igire Rwanda Organization</h2>
          <h2 className="text-md lg:text-lg mb-4 text-gray-500">Kigali, Rwanda</h2>

          {/* About the Role */}
          <div className="mb-8">
            <h3 className="text-md font-bold mb-2">About the Role</h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod elit eu eros fringilla, a placerat ex vehicula.
            </p>
          </div>

          {/* Job Sections: What You Will Do */}
          <div className="mb-8">
            <h3 className="text-md font-bold mb-2">What You Will Do</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>

          {/* Job Qualifications */}
          <div className="mb-8">
            <h3 className="text-md font-bold mb-2">Job Qualifications</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>

          {/* Benefits and Compensation */}
          <div className="mb-8">
            <h3 className="text-md font-bold mb-2">Benefits and Compensation</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-md font-bold mb-2">Location</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Kacyiru, Kigali, Rwanda</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-md font-bold mb-2">Deadline</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>November 10, 2024</li>
            </ul>
          </div>

          <div>
            <a href="applicationForm">
              <button className="bg-[#0FA958] my-8 text-white py-3 px-5 rounded-md text-lg">
                Apply now
              </button>
            </a>
          </div>
        </div>

        {/* Similar Jobs Section */}
        <div className="mt-10 lg:mt-28 w-[70%]">
          <h3 className="text-lg font-bold mb-4">Similar Jobs</h3>
          <div className="grid grid-cols-1 gap-6">
            {/* Job Card 1 */}
            <div className="bg-white p-3 rounded-lg shadow-lg bg-gray-100">
              <h3 className="text-md font-bold mb-2">Lorem</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum</p>
              <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                <div className="flex items-center text-sm text-gray-500 mr-4">
                  <FaRegClock className="mr-1" />
                  <span>Posted: October 11, 2024</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FaRegClock className="mr-1" />
                  <span>Deadline: October 11, 2024</span>
                </div>
              </div>
              <a href="#" className="text-blue-600 flex items-center hover:underline font-medium text-sm">
                View full details <FaArrowRight className="ml-1 w-5" />
              </a>
            </div>

            <div className="bg-white p-3 rounded-lg shadow-lg bg-gray-50">
              <h3 className="text-md font-bold mb-2">Lorem</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum</p>
              <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                <div className="flex items-center text-sm text-gray-500 mr-4">
                  <FaRegClock className="mr-1" />
                  <span>Posted: October 11, 2024</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FaRegClock className="mr-1" />
                  <span>Deadline: October 11, 2024</span>
                </div>
              </div>
              <a href="#" className="text-blue-600 flex items-center hover:underline font-medium text-sm">
                View full details <FaArrowRight className="ml-1 w-5" />
              </a>
            </div>

            <div className="bg-white p-3 rounded-lg shadow-lg bg-gray-50">
              <h3 className="text-md font-bold mb-2">Lorem</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum</p>
              <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                <div className="flex items-center text-sm text-gray-500 mr-4">
                  <FaRegClock className="mr-1" />
                  <span>Posted: October 11, 2024</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FaRegClock className="mr-1" />
                  <span>Deadline: October 11, 2024</span>
                </div>
              </div>
              <a href="#" className="text-blue-600 flex items-center hover:underline font-medium text-sm">
                View full details <FaArrowRight className="ml-1 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col px-4 lg:px-32 mt-6">
        <div className="">
          <hr className="border border-gray-300"/>
        </div>
        <div className="flex items-center my-4">
          <div className="flex items-center text-sm text-gray-500 mr-4">
            <FaRegClock className="mr-1" />
            <span>Posted: October 11, 2024</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <FaRegClock className="mr-1" />
            <span>Deadline: October 11, 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDescription;
