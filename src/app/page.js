import CallForAction from "@/components/sections/CallForAction";
import HeroSection from "@/components/sections/heroSection.jsx";
import Partners from "@/components/sections/Partners";
import Solution from "@/components/sections/Solution";
import HomePageData from "@/fakeDatas/HomePageFakes";
import WhatWeDo from "@/components/sections/WhatWeDo";
import ImpactSection from "@/components/sections/impact.jsx";
import HistoricalBackground from "@/components/sections/historicalBackground"
import BlogPage from "@/components/sections/Blog"

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col gap-44">
        <Solution SolutionSectionData={HomePageData.SolutionSectionData} />
        <HistoricalBackground HistoryBgData={HomePageData.HistoryBgData}/>
        <WhatWeDo />
        <ImpactSection ImpactData={HomePageData.ImpactData} />
        <BlogPage/>
        <CallForAction CallForActionData={HomePageData.CallForActionData} />
        <Partners PartnersData={HomePageData.PartnersData} />
      </div>
    </>
  );
}
