"use client";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from "../container";

const ProgramsDetailed = ({ programs }) => {
    if (!Array.isArray(programs)) {
        return <p>No programs available.</p>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1280, 
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="my-12 font-ibm">
            <Container className="bg-green-300">
                {programs.map((program, index) => (
                    <div key={index} className="mb-12 mx-24 max-w-screen-xl">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{program.title}</h2>
                        <p className="text-base md:text-xl mb-5 text-justify">{program.description}</p>
                        <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                            <Slider {...settings} className="w-full mb-4 md:mb-10">
                                {program.images.map((image, imgIndex) => (
                                    <div key={imgIndex} className="px-1">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={300}
                                            height={200}
                                            className="rounded-lg h-[8rem] sm:h-[10rem] md:h-[12rem] lg:h-[14rem] object-cover"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                ))}
            </Container>
        </section>
    );
};

export default ProgramsDetailed;
