import DefaultBanner from "../components/DefaultBanner";
import React from "react";
import ProgramsPageData from "@/fakeDatas/ProgramPageFakes";
import ProgramsDetailed from "../components/sections/ProgramsDetailed";

const Page = () => {
  const { bannerData, programs } = ProgramsPageData;

  return (
    <>
      <div className="w-full">
        <div>
          <DefaultBanner title={bannerData.title} backgroundImage={bannerData.backgroundImage} />
        </div>
        <div>
          <ProgramsDetailed programs={programs} />
        </div>
      </div>
    </>
  );
};

export default Page;
