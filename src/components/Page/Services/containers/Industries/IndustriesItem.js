"use client"

import Image from 'next/image';
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { industries } from '@/db/services/industries';

const IndustriesItem = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const container = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.2,
          staggerChildren: 0.4
        }
      }
    };
    
    const items = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1
      }
    };
  return (
    <motion.ul ref={ref} 
    className="grid grid-cols-3 md:grid-cols-4 place-content-end lg:mx-auto flex-wrap gap-4 my-10"
    variants={container}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}>

    {industries.map((item, index) => {
      return (
        <motion.li key={index} variants={items} >
        <div

          className=" flex flex-col items-center "
        >
          <div className="flex justify-center items-center w-[100px] h-[100px] p-4 rounded-md border border-[#B0D5F9]">
          <Image
            width={54}
            height={54}
            src={item.image}
            alt="image_industries"
          />
          </div>
          <p className="text-black text-[14px] px-4 mt-2">{item.title}</p>
        </div>
     </motion.li>
    );
  })}
</motion.ul>
  )
}

export default IndustriesItem