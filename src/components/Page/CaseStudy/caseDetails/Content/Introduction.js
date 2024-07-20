import Image from "next/image";
import React from "react";

const Introduction = ({caseData}) => {
  return (
    <div className="navbar-main bg-white py-6" id='introduction_section'>
      <div className="main-container flex justify-between items-center flex-wrap md:flex-nowrap  gap-x-2 gap-y-4">
        <div className="md:max-w-[444px]">
          <p className="text-black text-[24px] font-semibold">Introduction</p>
          <p className="text-[16px] text-black leading-8 mt-2">
            {caseData?.casestudyfieldgroud?.introduction}
          </p>
        </div>
       
          <Image
            className="md:min-w-[350px] rounded-md"
            width={510}
            height={308}
            src={caseData?.casestudyfieldgroud?.caseStudyImage?.node?.sourceUrl}
            alt="Case_details"
          />
       
      </div>
    </div>
  );
};

export default Introduction;
