import Image from "next/image";
import React from "react";

const Partners = ({PartnersData}) => {
  const { title, description, companies } = PartnersData;
  return (
    <>
      <div className="flex flex-col justify-center items-center font-ibm mb-52">
        <div className="w-[70%] flex flex-col gap-5">
          <h2 className="font-bold text-2xl">{title}</h2>
          <p className="text-xl">
            {description}
          </p>
        </div>
        <div className="flex justify-center items-center gap-10 flex-wrap mt-16 w-[70%]">
          {companies &&
            companies.map((logo, index) => (
              <Image
                key={index}
                src={`${logo.src}`}
                alt={logo.alt}
                className="md:w-fit max-h-12 md:max-h-20"
                width={5}
                height={5}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
