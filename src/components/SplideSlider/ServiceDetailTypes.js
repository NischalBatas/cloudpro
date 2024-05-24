import React from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { testimonialClient } from "@/db/home/testimonialClient";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const ServiceDetailTypes = ({item}) => {
  const splideOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    rewind: true,
    autoplay: true, // Whether to enable autoplay
    interval: 2400, // Autoplay interval in milliseconds
    pauseOnHover: true, // Whether to pause autoplay on hover
    drag: true, // Whether to enable drag/swipe interaction
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
        {item.servicetypeitem.map((item2,index)=>{
          return(
<SplideSlide className="md:max-w-[1010px] flex justify-between gap-4 rounded-[8px]  px-[24px] py-[28px] bg-[#4762BB]">
          <div className="md:max-w-[446px]">
            <span className="text-[32px] font-bold">{item2.title}</span>
            <p className="pt-[20px] text-[14px] leading-[24px]">
            {item2.description}
            </p>

            <ul className="py-[24px] flex text-nowrap gap-2 max-w-[350px] overflow-hidden">
              {item2.items.map((item3,index)=>{
                return(
                  <li className="text-nowrap leading-[28px] whitespace-nowrap text-[16px] font-semibold px-[16px] py-[8px] rounded-[8px] border-[1px] border-[#00000029] bg-[##0303030d]">
                  {item3.title}
                </li>
              
                )
              })}
         
            </ul>
            <Link href={item2.link} className="px-[16px] py-[12px] text-[14px] rounded-[8px] bg-white text-black">
              Learn More
            </Link>
          </div>
          <Image  className="hidden md:block"
            width={391}
            height={288}
            src={item2.image}
            alt="product_image"
          />
        </SplideSlide>
          )
        })}
        

    
      </Splide>
    </div>
  );
};

export default ServiceDetailTypes;
