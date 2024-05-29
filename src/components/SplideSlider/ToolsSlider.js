"use client";
import React from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { industries } from "@/db/home/industries";
import Link from "next/link";
import { industriesDetails } from "@/db/home/industriesDetail/industriesDetail";
import Image from "next/image";

const ToolsSlider = ({ tools }) => {

  const splideOptions = {
    type: "slide",
    perPage: 6,
    perMove: 1,
    rewind: true,
    autoplay: false, // Whether to enable autoplay
    interval: 1000, // Autoplay interval in milliseconds
    pauseOnHover: true, // Whether to pause autoplay on hover
    drag: true, // Whether to enable drag/swipe interaction
    keyboard: true, // Whether to enable keyboard navigation
    autoWidth: true,
    focus: "left",

    lazyLoad: "sequential",

    // padding:'5rem',
    // padding: { left: '1rem', right: '2rem' },
    gap: "24px",
    pagination: false,

    breakpoints: {
      725: {
        perPage: 2,
        padding: 0,
      },
      576: {
        perPage: 1,
        gap: "1rem",
      },
    },
  };
  return (
    <div className="overflow-hidden">
      <Splide
        options={splideOptions}
        className="mt-10 flex justify-start text-center"
      >
        {tools.map((item, index) => {
          return (
            <SplideSlide key={index}>
             <Link target="_blank" href={item.link}>
             <Image
                className="rounded-[6px] max-w-[117px]"
                width={117}
                height={117}
                src={item.image}
                alt="tools image"
              />
              <div>
                <span className="text-[14px] whitespace-nowrap">
                  {item.title}
                </span>
              </div>
             </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default ToolsSlider;
