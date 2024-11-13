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
    <section className="py-12 font-ibm">
      <div className="flex flex-col justify-center items-center mb-14">
        <h2 className="text-4xl font-extrabold text-black mb-10">What We Do</h2>
        <p className="mt-4 text-black mx-auto text-xl text-center max-w-screen-2xl">{paragraphData}</p>
      </div>
      {whatWeDoData.map((section, index) => {
        const SlideshowComponent = slideshowComponents[section.slideshowComponent];
        return (
          <div key={index} className="md:max-w-screen-2xl mx-auto bg-white rounded-lg shadow-lg p-6 md:flex md:space-x-8 mt-8">
            <div className="md:flex-1 pl-5">
              <h3 className="text-2xl font-semibold text-gray-800 my-10">{section.title}</h3>
              <p className="mt-4 text-xl text-black mb-5">{section.description}</p>
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