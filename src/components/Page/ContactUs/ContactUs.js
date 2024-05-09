"use client";
import React from "react";

import "./contactus.css";
import Image from "next/image";
import MessageBox from "./content/MessageBox";

const ContactUs = () => {
  return (
    <div className="navbar-main mb-24 pt-24 md:pt-32">
        <div className="main-container flex justify-between flex-wrap lg:flex-nowrap gap-4 lg:gap-8 ">
        <div className="relative">
        <Image className="absolute top-0" style={{zIndex:'-1'}} width={978} height={628} src='/Image/ellipse88.svg' alt="image_shade"/>

          <p className="max-w-[423px] font-semibold text-[40px] md:text-[42px]">
            Let's start a project together.
          </p>
          <p className="max-w-[533px] text-[16px] mt-2 text-cloud2">
            We love to sit down and talk about ideas. Let‘s get your project up
            and running. Get in touch for a tech consultation today.
          </p>
       
      </div>
        <MessageBox/>
   
      </div>
      
    </div>
  );
};

export default ContactUs;
