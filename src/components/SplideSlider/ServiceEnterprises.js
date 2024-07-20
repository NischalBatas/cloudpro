import React from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { testimonialClient } from "@/db/home/testimonialClient";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const ServiceEnterprises = ({content}) => {
  const splideOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    rewind: true,
    autoplay: false, // Whether to enable autoplay
    interval: 2400, // Autoplay interval in milliseconds
    pauseOnHover: true, // Whether to pause autoplay on hover
    drag: true, // Whether to enable drag/swipe interactions
    keyboard: true, // Whether to enable keyboard navigation
    focus: "left",
    lazyLoad: "sequential",
    width: "100%",
    // padding:'2rem',
    padding: { right: "1rem" },
    gap: "2rem",
    pagination: false,
    breakpoints: {
      1332: {
        // padding:'2rem',
      },
      1250: {
        // padding:'1rem',
      },
      1125: {
        perPage: 1,
        padding: 0,
      },
      576: {
        perPage: 1,
          padding: 0,
      },
    },
  };
  return (
    <div className="mx-auto overflow-hidden">
      <Splide options={splideOptions}>

        {content.data.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <div className="relative">
                <div
                  className="absolute top-15 left-15 lg:w-[535px] lg:h-[383px] bg-cloud rounded"
                  style={{ zIndex: "-1" }}
                ></div>
                <div className=" lg:max-w-[535px] min-h-[383px] bg-white rounded text-black p-4">
                  <p className="max-w-[220px] sm:max-w-[381px] text-[16px] font-medium">
                    {item?.title}
                  </p>
                  <ul className="text-[#393939] text-[14px] mt-5 list-disc px-6 leading-7">
                    {item.list.map((item, index) => {
                      return (
                        <li key={index} className="">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      
        

    
      </Splide>
    </div>
  );
};

export default ServiceEnterprises;
