import { NewsletterData } from '@/db/newsletter/NewsletterData';
import Image from 'next/image';
import React from 'react'
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const NewsletterSlider = () => {
    const splideOptions = {
        type: "loop",
        perPage: 1,
        perMove: 1,
        rewind: true,
        autoplay: true, // Whether to enable autoplay
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
    <div className="">
      <Splide options={splideOptions} className='flex pt-[40px] '>
        {NewsletterData.map((item, index) => {
          return (
            <SplideSlide
              key={index} className="flex flex-col max-w-[265px] ">
            <Image className='rounded-[22px]' width={265} height={300} src={item.image} alt={item.title}/>
            <div className="text-center">
            <span className="text-[14px]  font-semibold">{item.title}</span>
            </div>
        
          </SplideSlide>
          );
        })}
      </Splide>
    </div>
  )
}

export default NewsletterSlider