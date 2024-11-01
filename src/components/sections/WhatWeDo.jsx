// components/WhatWeDo.jsx
import { getWhatWeDoData, paragraphData } from '@/fakeDatas/whatweDoData';
import Slideshow from '@/components/Slideshow';
import Slideshow2 from '@/components/Slideshow2';
const slideshowComponents = {
  Slideshow,
  Slideshow2,
};
export default function WhatWeDo() {
  const whatWeDoData = getWhatWeDoData(); 
  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-black">What We Do</h2>
        <p className="mt-4 text-black max-w-[60%] mx-auto text-xl">{paragraphData}</p>
      </div>
      {whatWeDoData.map((section, index) => {
        const SlideshowComponent = slideshowComponents[section.slideshowComponent];
        return (
          <div key={index} className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6 md:flex md:space-x-8 mt-8">
            <div className="md:flex-1">
              <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
              <p className="mt-4 text-black">{section.description}</p>
              <button className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-400">
                {section.buttonLabel}
              </button>
            </div>
            <div className="md:flex-1 mt-6 md:mt-0">
              <SlideshowComponent /> 
            </div>
          </div>
        );
      })}
    </section>
  );
}