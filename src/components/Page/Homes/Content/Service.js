import Image from "next/image";
import React from "react";
import "../index.css";
import { serviceItem } from "@/db/home/serviceItem";
import ServiceItem from "./ServiceItem";
const Service = () => {
  return (
   <div className="relative">
      
    <div className="main-container py-9 px-1 mt-6 relative">
      <p className="text-cloud text-center md:text-left text-[14px] tracking-widest">SERVICES</p>
      <p className="text-[32px] font-semibold md:w-80 text-center md:text-left tracking-wild">What we build </p>
      <ServiceItem/>
     
    </div>
   
   </div>

  );
};

export default Service;
