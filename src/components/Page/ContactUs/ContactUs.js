"use client";
import React from "react";

import "./contactus.css";
import Image from "next/image";
import MessageBox from "./content/MessageBox";
import { useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
const ContactUs = () => {
  const searchParams = useSearchParams()
  const paramsData=searchParams.get('action')
  console.log("title",paramsData)
  return (
    <div className="navbar-main mb-24 pt-24 md:pt-28">
        <div className="main-container ">
        <div className="relative mb-10 ">
        <Image className="absolute top-0" style={{zIndex:'-1'}} width={378} height={328} src='/Image/ellipse88.svg' alt="image_shade"/>

          <p className="max-w-[423px] font-semibold text-[40px] md:text-[42px]">
            Let's start a project together.
          </p>
          <p className="max-w-[633px] text-[16px] mt-2 text-cloud2">
            We love to sit down and talk about ideas. Let‘s get your project up
            and running. Get in touch for a tech consultation today.
          </p>
      </div>
        <MessageBox selectTab={paramsData}/>
        <Toaster position="bottom-right"
                                 toastOptions={{
                                  style: {
                                    fontSize:'14px', fontWeight:'600',background:'#fff'
                                  }}}
                                />
      </div>
      
    </div>
  );
};

export default ContactUs;
