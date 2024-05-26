"use client"
import React from 'react'
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { industries } from '@/db/home/industries';
import Link from 'next/link'
import { industriesDetail } from '@/db/home/industriesDetail/industriesDetail';

const IndustriesSlider = () => {
    const splideOptions = {
        type: "loop",
        perPage: 3,
        perMove: 1,
        rewind: true,
        autoplay: false, // Whether to enable autoplay
        interval: 1000, // Autoplay interval in milliseconds
        pauseOnHover: true, // Whether to pause autoplay on hover
        drag: true, // Whether to enable drag/swipe interaction
        keyboard: true, // Whether to enable keyboard navigation
        focus: "left",
        lazyLoad: 'sequential',
      width:'100%',
        // padding:'5rem',
        // padding: { left: '1rem', right: '2rem' },
        gap: "24px",
        pagination: false,
        autoScroll: {
            speed: 1,
          },
        breakpoints: {
       
          1050: {
            perPage: 2,
            padding:0,
         
          },
          675: {
            perPage: 1,
            gap: "0.2rem",
          },
        },
      };
  return (
    <div className="mx-auto overflow-hidden">
      <Splide options={splideOptions} className='flex pt-[40px] '>
        {industriesDetail.map((item, index) => {
          return (
            <SplideSlide
              key={index} className="max-w-[400px] min-h-[400px] p-[20px] flex flex-col justify-end bg-[#050607]">
            <div className="max-w-[328px]">
            <span className="text-[24px] font-semibold">Personalized Recommendation Systems</span>

            </div>
            <p className="text-[16px] leading-[28px] text-[#B5B5B5]">
              Deliver personalized shopping experiences that captivate and
              engage your customers. Our AI-driven recommendation engines
              provide tailored product suggestions based on individual
              preferences and browsing history, ensuring your customers find
              exactly what they're looking for, boosting satisfaction and
              loyalty. 
            </p>
          </SplideSlide>
          );
        })}
      </Splide>
    </div>
  )
}

export default IndustriesSlider