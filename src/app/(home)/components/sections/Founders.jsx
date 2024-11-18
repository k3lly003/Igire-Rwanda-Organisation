import Image from "next/image";
import React from "react";

const Founders = ({ foundersData }) => {
  const { title, founders } = foundersData;

  return (
    <section className="py-10 px-4 w-full mb-10 font-ibm mx-auto text-center">
      {title && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
          {title}
        </h2>
      )}

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 w-[90rem]">
          {founders.map((founder, index) => (
            <div key={index} className="text-center">
              <Image
                src={founder.image}
                width={150}
                height={150}
                alt={`${founder.name}'s photo`}
                className="w-48 h-48 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg mx-auto mb-4 object-cover border"
              />
              <h3 className="text-xl sm:text-2xl font-semibold">
                {founder.name}
              </h3>
              <p className="text-md sm:text-lg font-medium text-gray-600">
                {founder.position.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
