const Solution = ({ SolutionSectionData }) => {
  const { description, btn1, btn2 } = SolutionSectionData;
  return (
    <div className="bg-black flex justify-center py-20">
      <div className="py-10 px-6 sm:px-10 md:px-20 lg:px-40 max-w-[89rem] text-center flex flex-col gap-5 font-ibm">
        <div>
          <p className="text-white text-base sm:text-lg md:text-xl">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center">
          <button className="bg-white text-black font-semibold border p-3 sm:mr-5 w-full sm:w-auto">
            {btn1}
          </button>
          <button className="text-white font-semibold border p-3 w-full sm:w-auto">
            {btn2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solution;
