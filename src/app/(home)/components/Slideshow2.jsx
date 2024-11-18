// components/Slideshow.js

"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const slidesData = [
  {
    type: 'image',
    src: 'https://res.cloudinary.com/drfzbtbzi/image/upload/v1730473374/tb5ckb00ipfwqz4pxqxp.jpg',
    caption: 'AWE',
  },
  {
    type: 'image',
    src: 'https://res.cloudinary.com/drfzbtbzi/image/upload/v1730472986/presentaion.jpg',
    caption: 'AWE',
  },

  {
    type: 'image',
    src: 'https://res.cloudinary.com/drfzbtbzi/image/upload/v1730473340/scc-1.jpg',
    caption: 'AWE',
  },
  {
    type: 'video',
    src: 'https://res.cloudinary.com/drfzbtbzi/video/upload/v1730670533/igire-video.mp4',
    caption: 'Inspiraton and testimonies',
  },
];

export default function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="relative max-w-2xl mx-auto">
      <div
        className="relative overflow-hidden rounded-lg shadow-lg"
        style={{ aspectRatio: '16/9' }}
      >
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === slideIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.type === 'video' ? (
              <video
                src={slide.src}
                className="object-cover w-full h-full"
                onMouseEnter={(e) => {
                  e.target.pause();
                  handleMouseEnter();
                }}
                onMouseLeave={(e) => {
                  e.target.play();
                  handleMouseLeave();
                }}
                // autoPlay
                muted
                loop
              />
            ) : (
              <Image
                src={slide.src}
                width={100}
                height={100}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            )}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-4">
              {slide.caption}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`h-4 w-4 mx-1 rounded-full bg-gray-300 transition duration-300 ease-in-out ${
              index === slideIndex ? 'bg-gray-700' : ''
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
