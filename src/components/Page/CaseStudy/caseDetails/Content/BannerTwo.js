import React from "react";
import ImpactAndResultSlider from "@/components/SplideSlider/ImpactAndResultSlider";

const BannerTwo = ({ content,caseData }) => {
  return (
    <div id="impactandResults_section"
      className="flex flex-col items-center justify-center text-center min-h-[250px] md:min-h-[375px]  bg-no-repeat bg-center bg-cover"
      style={{
        // filter: "blur(2px)",
        zIndex: "-1",
        backgroundImage: "url('/Image/casestudy/ga.svg')",
      }}
    >
      <p className=" tracking-wider uppercase pb-2 text-[14px] border-b-[1px] border-[#b4b4b4]">
        Impact and Results
      </p>
        <ImpactAndResultSlider caseData={caseData} content={content}/>
    </div>
  );
};

export default BannerTwo;
