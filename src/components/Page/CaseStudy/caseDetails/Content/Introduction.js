import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <div className="navbar-main bg-white py-10 md:py-14" id='introduction_section'>
      <div className="main-container flex justify-between items-center flex-wrap md:flex-nowrap  gap-x-2 gap-y-4">
        <div className="md:max-w-[444px]">
          <p className="text-black text-[24px] font-semibold">Introduction</p>
          <p className="text-[16px] text-black leading-8 mt-2">
            In the highly regulated and complex field of healthcare billing and
            compliance, efficiency and accuracy are paramount. A prominent
            healthcare services provider, grappling with the challenges of
            managing a high volume of audit requests and maintaining revenue
            integrity, turned to Cloud Pro AI for a solution. Our mission was to
            leverage Amazon Web Services (AWS) to automate and streamline their
            audit workflow, significantly reducing manual effort and improving
            response accuracy.
          </p>
        </div>
       
          <Image
            className="md:min-w-[350px] rounded-md"
            width={510}
            height={308}
            src="/Image/casestudy/bg2.webp"
            alt="Case_details"
          />
       
      </div>
    </div>
  );
};

export default Introduction;
