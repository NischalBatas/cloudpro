"use client";
import PartnerSlider from "@/components/SplideSlider/PartnerSlider";
import Image from "next/image";
import React, { useState } from "react";

const Partners = () => {
  return (
    <div className="main-container partners-main flex flex-wrap items-center justify-between  pt-5 pb-20 px-2 gap-4 md:gap-2 ">
      <p className="text-center uppercase text-cloud w-full text-[12px] mb-2 tracking-widest">
        Global Partners
      </p>

      <p className="m-auto text-center max-w-[602px] text-gray-700 text-[12px] mb-4">
        We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your Business
        and Infrastructure Readiness for the Ultimate Technological Leap.
      </p>

      <div className="partners-home">
       <PartnerSlider/>
      </div>
    </div>
  );
};

export default Partners;
