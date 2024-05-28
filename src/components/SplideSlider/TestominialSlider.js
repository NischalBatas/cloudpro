"use client"
import React from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { testimonialClient } from "@/db/home/testimonialClient";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
const TestominialSlider = () => {
  const splideOptions = {
    type: "loop",
    perPage: 2,
    perMove: 1,
    rewind: true,
    autoplay: true, // Whether to enable autoplay
    interval: 2400, // Autoplay interval in milliseconds
    pauseOnHover: true, // Whether to pause autoplay on hover
    drag: true, // Whether to enable drag/swipe interaction
    keyboard: true, // Whether to enable keyboard navigation
    focus: "center",
    lazyLoad: 'sequential',
    width: '100%',
    padding:'5rem',
    // padding: { left: '1rem', right: '2rem' },
    // gap: "1rem",
    pagination: false,
    breakpoints: {
      1332: {
        padding:'2rem',
     
      },
      1250: {
        padding:'1rem',
     
      },
      1125: {
        perPage: 1,
        padding:0,
     
      },
      576: {
        perPage: 1,
      },
    },
  };
  return (
    <div className="mx-auto overflow-hidden">
      <Splide options={splideOptions}>
        {testimonialClient.map((item, index) => {
          return (
            <SplideSlide
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <p className="text-[14px] text-center max-w-[540px] text-[#B8BEBF] leading-6">{item.description}</p>
              <Link href={item.link}>
              <div className="flex items-center gap-3 mt-6">
           
                <div >
                  <Image className="rounded-full"
                    width={44}
                    height={44}
                    src={item.image}
                    alt="testominial-image"
                  />
                 
                </div>
                <div>
           
                  <p className="font-semibold text-[14px]">{item.name}</p>
               
                  <p className="text-[#B8BEBF] text-[14px]">{item.position}</p>
                  <div className="flex items-center justify-between">
                  <p className="text-[#4863bb] font-semibold text-[14px] max-w-[220px] md:max-w-full">{item.company}</p>
                  <FaLinkedin className="ml-4"/>
                  </div>
                </div>
           
              </div>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default TestominialSlider;
