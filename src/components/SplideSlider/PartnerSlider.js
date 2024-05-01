import React from 'react'
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { partners } from '@/db/partners';


const PartnerSlider = () => {
    const splideOptions = {
        type: "loop",
        perPage: 6,
        perMove: 1,
        rewind: true,
        autoplay: true, // Whether to enable autoplay
        interval: 2000, // Autoplay interval in milliseconds
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
        {partners.map((item, index) => {
          return (
            <SplideSlide
              key={index}
              className="flex flex-col justify-center items-center"
            >
           
              <Image
                width={75}
                height={75}
                src={item.image}
                alt={`Partner ${index}`}
              />
      
              
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  )
}

export default PartnerSlider