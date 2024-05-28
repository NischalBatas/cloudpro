"use client"

import Image from 'next/image';
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { industries } from '@/db/services/industries';
import { industriesDetails } from '@/db/home/industriesDetail/industriesDetail';
import Link from 'next/link';

const IndustriesItem = () => {
  const industriesSlice=industriesDetails.slice(0,8)
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

    {industriesSlice.map((item, index) => {
      return (
        <motion.li key={index} variants={items} >
              <Link href={`/industry/${item.id}`}

          className=" flex flex-col items-center "
        >
          <div className="flex justify-center items-center w-[100px] h-[100px] p-4 rounded-md border border-[#B0D5F9]">
          <Image
            width={54}
            height={54}
            src={item.sectorimage}
            alt="image_industries"
          />
          </div>
          <p className="text-black text-[12px] md:text-[14px] px-4 mt-2">{item.sectortitle}</p>
     
        </Link>
     </motion.li>
    );
  })}
</motion.ul>
  )
}

export default IndustriesItem