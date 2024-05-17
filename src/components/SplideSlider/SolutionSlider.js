"use client"
import React from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

const SolutionSlider = ({content,caseData}) => {
  const splideOptions = {
    type: "slide",
    perPage: 4,
    perMove: 1,
    rewind: true,
    rewindByDrag: true,
    autoplay: false, // Whether to enable autoplay
    interval: 2000, // Autoplay interval in milliseconds
    pauseOnHover: true, // Whether to pause autoplay on hover
    drag: true, // Whether to enable drag/swipe interaction
    keyboard: true, // Whether to enable keyboard navigation
    focus: "center",
    lazyLoad: "sequential",

    // padding: "5rem",
    // padding: { left: '1rem', right: '2rem' },
    gap: "2rem",
    pagination: false,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      725: {
        perPage: 3,
        padding: 0,
      },
      576: {
        perPage: 2,
        gap: "0.2rem",
      },
    },
  };

  console.log('Impact',caseData.casestudyfieldgroud.solution)
  const SolutionDetails=JSON.parse(caseData.casestudyfieldgroud.technology)
  if (!Array.isArray(SolutionDetails)) {
    console.error('ImpactandResult is not an array:',SolutionDetails);
    return null; // or display an error message
  }
  return (

 
      <Splide options={splideOptions} className="mx-auto overflow-hidden mt-4">
      {SolutionDetails.map((item, index) => {
        return (
          <SplideSlide
            key={index}
            className="mt-5 flex flex-col justify-between bg-[#2A2A2A] max-w-[190px] min-h-[231px] rounded-lg p-3"
          >
            <p className="text-right text-[14px] uppercase border-b-[1px] border-[#3B3B3B] pb-1">
               {item.tool}
            </p>
            <p className="text-[#BBBBBB] text-[14px]">{item.description}</p>
          </SplideSlide>
        );
      })}
    </Splide>

  
   
      
  );
};

export default SolutionSlider;
