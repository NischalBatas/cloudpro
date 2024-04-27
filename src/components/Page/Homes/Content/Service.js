import Image from "next/image";
import React from "react";
import "../index.css";
import { serviceItem } from "@/db/serviceItem";
import ServiceItem from "./ServiceItem";
const Service = () => {
  return (
    <div className="navbar-main  py-8 px-1">
      <p className="text-cloud text-[14px] tracking-widest">SERVICES</p>
      <p className="text-2xl font-semibold w-80 tracking-wild">What we build </p>
      <ServiceItem/>
    </div>
  );
};

export default Service;
