"use client";
import { partners } from "@/db/partners";
import Image from "next/image";
import React, { useState } from "react";

const Partners = () => {
  return (
    <div className="navbar-main flex flex-wrap items-center justify-between bg-white py-3 px-2 gap-4 md:gap-2 ">
      <div className="owl-carousel owl-theme">
      {partners.map((item, index) => {
        return (
          <div key={index} className="flex flex-center items-center" style={{width:"50px", height:'50px'}}>
            <Image width={50} height={50} src={item.image}alt={`Partner ${index}`} />
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Partners;
