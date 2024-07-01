"use client"
import React from 'react'
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { partners } from '@/db/home/partners';


const PartnerSlider = () => {
    const splideOptions = {
        type: "loop",
        perPage: 6,
        perMove: 1,
        rewind: true,
        autoplay: true, // Whether to enable autoplay
        interval: 1000, // Autoplay interval in milliseconds
        pauseOnHover: true, // Whether to pause autoplay on hover
        drag: true, // Whether to enable drag/swipe interaction
        keyboard: true, // Whether to enable keyboard navigation
        focus: "center",
        lazyLoad: 'sequential',
     
        padding:'5rem',
        // padding: { left: '1rem', right: '2rem' },
        gap: "1rem",
        pagination: false,
        autoScroll: {
            speed: 1,
          },
        breakpoints: {
       
          725: {
            perPage: 4,
            padding:0,
         
          },
          576: {
            perPage: 3,
            gap: "0.2rem",
          },
        },
      };
  return (
    <div className="mx-auto">
      <Splide options={splideOptions}>
        {partners.map((item, index) => {
          return (
            <SplideSlide
              key={index}
              className="flex flex-col justify-center items-center"
            >
           
              <Image
                width={item.width}
                height={item.height}
                src={item.image}
                alt={`Partner ${index}`}
              />
      
              
            </SplideSlide>
          );
        })}
      </Splide>

      {/* <div className="marquee-container  ">
  <div className="marquee flex gap-4 items-center ">
    {partners.map((item, index) => (
      <div key={index} className='flex justify-center items-center w-[100px]'>
        <Image 
          width={item.width}
          height={item.height }
          src={item.image}
          alt={`Partner ${index}`}
        />
      </div>
    ))}
  </div>
</div> */}
    </div>
  )
}

export default PartnerSlider