"use client";
import { partners } from "@/db/partners";
import Image from "next/image";
import React, { useState } from "react";

const Partners = () => {
  return (
    <div className="partners-main flex flex-wrap items-center justify-between  py-5 px-2 gap-4 md:gap-2 ">
      <p className="text-center uppercase text-cloud w-full text-[12px] mb-2 tracking-widest">
        Global Partners
      </p>

      <p className="m-auto text-center max-w-[602px] text-gray-700 text-[12px] mb-4">
        We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your Business
        and Infrastructure Readiness for the Ultimate Technological Leap.
      </p>

      <div className="owl-carousel owl-theme">
        {partners.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-center items-center"
              style={{ width: "55px", height: "55px" }}
            >
              <Image
                width={50}
                height={50}
                src={item.image}
                alt={`Partner ${index}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
