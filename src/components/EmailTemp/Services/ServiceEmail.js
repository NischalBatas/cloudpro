"use client"
import { serviceItem } from "@/db/home/serviceItem";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
const ServiceEmail = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
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
    className="grid grid-cols-2  pt-10 gap-[28.16px]"
    variants={container}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}>
      {serviceItem.map((item,index) => {
        return (
      <motion.li key={index} variants={items} className="service_main_item p-[14px] md:p-[33.35px] bg-[#0e0e1a] rounded-md border border-[#1E2849]">
      <Link href={`/service/${item.slug}`}>
      <div className="      h-full flex flex-col items-center justify-between">
           <div className="mb-5 z-20">
             <p className="text-white mb-1 text-[14px] md:text-[22.532px] font-semibold text-left">
               {item.title}
             </p>
             <p className="home_service_description text-[#B8BEBF] text-[16px] md:text-[19.715px] ">{item.description}</p>
           </div>
          <div className="z-20">
          <Image 
             width={352}
             height={352}
             src={item.image}
             alt="Image_product"
           />
          </div>
         </div>
      </Link>
    </motion.li>
        );
      })}
    </motion.ul>
 
  );
};

export default ServiceEmail;
