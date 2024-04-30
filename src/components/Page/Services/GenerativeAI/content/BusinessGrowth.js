import Image from "next/image";
import React from "react";
import "./business.css";
const BusinessGrowth = () => {
  return (
    <div className="navbar-main  business-growth-main flex flex-nowrap justify-between gap-2 py-14">
      <div className="w-full md:w-6/12">
        <div className="text-2xl lg:text-3xl font-semibold w-full md:w-11/12">
          Revolutionizing Business Growth with Cloud Pro AI's Generative AI
          Applications 
        </div>
        <div className="text-cloud3 text-sm py-3 leading-6 w-full md:w-11/12">
          In today's competitive and rapidly evolving digital landscape,
          businesses of all sizes are on a quest for innovative solutions that
          can propel them ahead of the curve. At the heart of this quest is
          generative AI, a transformative force in artificial intelligence that
          offers unparalleled creativity and efficiency. Cloud ProAI stands as a
          beacon in this journey, enabling businesses to harness the power of
          generative AI apps to foster originality, automate processes, and
          personalize customer experiences at an unprecedented scale. 
        </div>
      </div>

      <div
        className="relative bg-no-repeat"
        style={{
          width: "356px",
          height: "335px",
          backgroundImage: "url('/Image/process/generativeapp/cloud7.svg')"
        }}
      >
   
        <div
          className="absolute w-28 h-28 md:w-36 md:h-36 "
          style={{
            backgroundImage: "url('/Image/process/generativeapp/cloud8.svg')",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="absolute text-xs font-medium p-2 bottom-0">
            Business Growth with Cloud Pro AI's
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessGrowth;
