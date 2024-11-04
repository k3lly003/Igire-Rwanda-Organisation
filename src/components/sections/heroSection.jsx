import { RiArrowRightSLine } from "react-icons/ri";
import { heroData } from "../../fakeDatas/heroData";

export default function HeroSection() {
    return (
        <section className="flex items-center min-h-screen">
            <div className="container flex flex-col md:flex-row">
                <div className="flex items-end">
                    <img
                        src={heroData.imageSrc}
                        alt={heroData.imageAlt}
                        className="absolute top-[13%] md:top-28 md:right-20 right-0 md:w-[60%] w-full md:h-[80%] h-[50%] object-cover shadow-md"
                    />
                </div>
                <div className="relative md:left-15 left-6 top-26 md:bottom-16 bg-black text-white  md:p-20 p-10 flex flex-col gap-7 w-full md:w-[45%]">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        {heroData.title}
                    </h2>
                    <p className="w-[80%]">
                        {heroData.description}
                    </p>
                    <button className="bg-white text-xl text-black hover:text-white flex items-center justify-center font-semibold w-[70%] py-2 rounded-md hover:bg-gray-800 transition duration-300">
                        {heroData.buttonText}
                        <span className="ml-2 mt-1">
                            <RiArrowRightSLine />
                        </span>
                    </button>

                </div>
            </div>
        </section>
    );
}
