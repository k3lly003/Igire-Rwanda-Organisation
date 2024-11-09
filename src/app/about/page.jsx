import DefaultBanner from '@/components/DefaultBanner';
import React from 'react';
import AboutPageFakes from '@/fakeDatas/AboutPageFakes';
import Founders from '@/components/sections/Founders'
import ImpactSection from '@/components/sections/Impact'
import HomePageFakes from '@/fakeDatas/HomePageFakes'
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  const { bannerData, topSection, programs, logos } = AboutPageFakes;

  return (
    <>
      {/* Banner Section */}
      <div>
        <DefaultBanner title={bannerData.title} backgroundImage={bannerData.backgroundImage} />
      </div>

      {/* Content Section */}
      <div className="max-w-screen-2xl mx-auto font-ibm py-8 px-4 md:px-8 lg:px-10">
        
        {/* Top Section with Description and Map Image */}
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-4 my-10">
          <div className="flex-1 text-black p-4 flex items-center justify-center text-center md:text-left text-xl">
            {topSection.description}
          </div>
          
          <div className="relative flex-1 w-full h-40 md:h-56 mt-4 md:mt-0">
            <Image
              src={topSection.mapImage}
              alt="Map Image"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>

        {/* Programs Title */}
        <h2 className="mt-8 text-4xl font-semibold text-center text-black">Programs</h2>
        
        {/* Programs Section */}
        <div className="flex flex-col md:flex-row justify-between items-stretch my-10 space-y-4 md:space-y-0 md:space-x-4">
          {programs.map((program, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start space-y-4 p-6 rounded border border-gray-300 shadow-md bg-white w-full md:flex-1"
            >
              {/* Logo and Title in Row */}
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded">
                  <Image
                    src={logos[index]?.src || "/default-logo.png"}
                    alt={logos[index]?.name || "Program Logo"}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-black">{program.title}</h3>
              </div>

              {/* Program Description */}
              <div className="text-black text-center md:text-left flex-grow">
                <p className="text-xl">{program.description}</p>
                <Link href="/target-page" passHref>
                  <button className="bg-black text-white p-2 rounded mt-4 hover:bg-gray-800 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <ImpactSection ImpactData={HomePageFakes.ImpactData} />
      </div>
      <div>
        <Founders foundersData={AboutPageFakes.foundersData}/>
      </div>
    </>
  );
};

export default AboutPage;
