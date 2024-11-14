import { RiArrowRightSLine } from "react-icons/ri";
import { heroData } from "@/fakeDatas/heroData";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="lg:flex lg:justify-center w-full mb-20">
            <div className="w-full flex flex-col-reverse justify-center items-center md:flex-row md:container pb-20">
              <div className="relative sm:text-center sm:gap-5 items-center md:text-start left-0 bottom-16 md:bottom-0 bg-black text-white flex flex-col justify-evenly px-10 py-32 w-[85%] md:w-[40%] md:left-12">
                    <h2 className="text-lg md:text-4xl font-bold leading-tight">
                         {heroData.title}
                    </h2>
                    <p className="text-sm">
                         {heroData.description}
                    </p>
                    <button className="bg-white text-sm text-black hover:text-white flex items-center justify-center font-semibold w-full md:w-[70%] py-2 rounded-md hover:bg-gray-800 transition duration-300">
                        {heroData.buttonText}
                        <span className="ml-2 mt-1">
                            <RiArrowRightSLine />
                        </span>
                    </button>
              </div>
              <div className="w-full md:w-[screen] md:border lg:border-0 xl:w-[90%]">
                    <Image
                        src={heroData.imageSrc}
                        alt={heroData.imageAlt}
                        width={10}
                        height={10}
                        className="w-full md:object-fill shadow-md"
                    />
              </div>
            </div>
        </section>
    );
}
