import CallForAction from "@/components/sections/CallForAction";
import HeroSection from "@/components/sections/heroSection.jsx";
import Partners from "@/components/sections/Partners";
import Solution from "@/components/sections/Solution";
import HomePageData from "@/fakeDatas/HomePageFakes";
import WhatWeDo from "@/components/sections/WhatWeDo";
import ImpactSection from "@/components/sections/impact.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col gap-44">
        <Solution SolutionSectionData={HomePageData.SolutionSectionData} />
        <WhatWeDo />
        <ImpactSection ImpactData={HomePageData.ImpactData} />
        <CallForAction CallForActionData={HomePageData.CallForActionData} />
        <Partners PartnersData={HomePageData.PartnersData} />
      </div>
    </>
  );
}
