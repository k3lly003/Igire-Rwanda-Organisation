"use client";
import React, { useState, useEffect } from 'react';

const Testimonials = ({ testimonialsData }) => {
  const { title, testimonials } = testimonialsData;
  const [startIndex, setStartIndex] = useState(0);
  const [testimonialsToShow, setTestimonialsToShow] = useState(1);

  // Detect screen size and update the number of testimonials to show
  useEffect(() => {
    const updateTestimonialsToShow = () => {
      if (window.innerWidth < 768) {
        setTestimonialsToShow(1); // Show one testimonial on small screens
      } else {
        setTestimonialsToShow(2); // Show two testimonials on medium and larger screens
      }
    };

    updateTestimonialsToShow();
    window.addEventListener("resize", updateTestimonialsToShow);
    
    return () => window.removeEventListener("resize", updateTestimonialsToShow);
  }, []);

  // Define testimonials to display based on the current screen size
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + testimonialsToShow);

  const nextTestimonials = () => {
    setStartIndex((prevIndex) => 
      (prevIndex + testimonialsToShow) % testimonials.length
    );
  };

  const prevTestimonials = () => {
    setStartIndex((prevIndex) => 
      (prevIndex - testimonialsToShow + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-10 font-ibm max-w-screen-2xl mx-auto px-4 relative">
      <h2 className="text-2xl md:text-4xl text-center font-bold mb-10">{title}</h2>
      
      <div className="relative">
        <div className="hs-carousel w-full overflow-hidden rounded-lg">
          <div className="relative min-h-72">
            <div className="hs-carousel-body flex flex-wrap justify-center gap-2 transition-opacity duration-700">
              {visibleTestimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="hs-carousel-slide px-5 w-full sm:w-2/5 lg:w-2/5"
                >
                  <div className="bg-gray-100 rounded-lg p-8 shadow-md flex flex-col justify-between h-[22rem]">
                    <div className="flex flex-row gap-2">
                      <div>
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name}'s photo`}
                          className="w-16 h-16 mb-4 rounded-full border-2 border-gray-800"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-md font-medium mb-4">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-md text-gray-700">{testimonial.feedback}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
      </div>

      <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center sm:px-10 md:px-32">
        <button
          type="button"
          onClick={prevTestimonials}
          className="hs-carousel-prev flex items-center justify-center w-14 h-14 bg-black text-white rounded-full shadow-lg focus:outline-none mt-20"
        >
          <span className="text-xl">‹</span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          onClick={nextTestimonials}
          className="hs-carousel-next flex items-center justify-center w-14 h-14 bg-black text-white rounded-full shadow-lg focus:outline-none mt-20"
        >
          <span className="text-xl">›</span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;