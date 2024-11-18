import React from "react";

const CallForAction = ({ CallForActionData }) => {
  const { title, description, btn } = CallForActionData;
  return (
    <>
      <div className="md:flex md:justify-center">
        <div className="w-full border border-black py-5 md:py-[5rem] md:px-[10rem] text-center flex flex-col justify-center items-center gap-5 font-ibm">
          <div>
            <h2 className="text-4xl font-bold">{title}</h2>
          </div>
          <div className="max-w-screen-xl">
            <p className="font-ibm text-xl">{description}</p>
          </div>
          <div>
            <button className="bg-black text-white p-3 mr-5">{btn}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallForAction;
