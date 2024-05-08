"use client";
import React from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const ImpactAndResultSlider = ({ content }) => {
  const splideOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    rewind: true,
    rewindByDrag: true,
    autoplay: true, // Whether to enable autoplay
    interval: 2000, // Autoplay interval in milliseconds
    pauseOnHover: true, // Whether to pause autoplay on hover
    drag: true, // Whether to enable drag/swipe interaction
    keyboard: true, // Whether to enable keyboard navigation
    focus: "center",
    lazyLoad: "sequential",
    gap: "2rem",
    pagination: true,
    width: '100%',
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      725: {
        perPage: 1,
        padding: 0,
      },
      576: {
        perPage: 1,
        gap: "0.2rem",
      },
    },
  };

  return (
    <Splide options={splideOptions} className="mx-auto overflow-hidden mt-2 md:mt-4">
      {content.map((item, index) => (
        <SplideSlide
          key={index}
          className="flex flex-col justify-center items-center font-bold pb-6 text-[24px] md:text-[32px] md:leading-[48px]"
        >
         <p className="max-w-[589px]">{item.title}</p> 
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ImpactAndResultSlider;