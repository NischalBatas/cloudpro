

import PartnerSlider from "@/components/SplideSlider/PartnerSlider";
import Marquee from "react-fast-marquee";
import React from "react";
import '../slider.css'
import { partners } from "@/db/home/partners";
import Image from "next/image";
const Partners = () => {
  return (
    <div className="main-container partners-main flex  flex-wrap items-center justify-between  pt-5 pb-20 px-2 gap-4 md:gap-2 ">

     <p className="text-center uppercase text-cloud w-full text-[12px] mb-2 tracking-widest">
        Global Partners
      </p>

      <p className="m-auto text-center max-w-[602px] text-gray-600 text-[12px] mb-4">
        Our developers and Partners has experience in delivering projects to top
        tier companies like AWS, Google, Apple, Meta and many more fortune 500
        companies:
      </p>
   
      <div className="partners-home">
      <Marquee  className="">
        {partners.map((item, index) => {
          return <Image className="mx-4 hover:scale-110 transition-all" key={index}  width={item.width}
          height={item.height} src={item.image} alt="sliderImage" />;
        })}
      </Marquee>

        {/* <PartnerSlider /> */}
      </div>
    </div>
  );
};

export default Partners;
