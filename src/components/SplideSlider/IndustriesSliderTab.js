"use client"
import React from 'react'
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { industries } from '@/db/home/industries';
import Link from 'next/link'
import { industriesDetails } from '@/db/home/industriesDetail/industriesDetail';

const IndustriesSliderTab = ({itemId}) => {
  console.log('sliderDetail',itemId)
    const splideOptions = {
        type: "slide",
        perPage:6,
        perMove: 1,
        rewind: true,
        autoplay: false, // Whether to enable autoplay
        interval: 1000, // Autoplay interval in milliseconds
        pauseOnHover: true, // Whether to pause autoplay on hover
        drag: true, // Whether to enable drag/swipe interaction
        keyboard: true, // Whether to enable keyboard navigation
        autoWidth: true,
        focus    : 'left',
        
        lazyLoad: 'sequential',
  
        // padding:'5rem',
        // padding: { left: '1rem', right: '2rem' },
        gap: "32px",
        pagination: false,
 
        breakpoints: {
       
          725: {
            perPage: 2,
            padding:0,
         
          },
          576: {
            perPage: 1,
            gap: "1rem",
          },
        },
      };
  return (
    <div className="overflow-hidden">
      <Splide options={splideOptions} className='flex justify-between w-full gap-[32px] text-[#83858B]  uppercase text-[12px] tracking-[0.12px] pt-[24px]'>
        {industriesDetails.map((item, index) => {
          return (
            <SplideSlide
              key={index} className={item.slug == itemId ?' text-white font-semibold border-b-[2px] pb-[20px]':''}>
            <Link href={`/industry/${item.slug}`}>{item.sectortitle}</Link>

          </SplideSlide>
          );
        })}
      </Splide>
    </div>
  )
}

export default IndustriesSliderTab