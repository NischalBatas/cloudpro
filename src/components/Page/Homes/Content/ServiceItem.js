"use client"
import { serviceItem } from "@/db/home/serviceItem";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
const ServiceItem = () => {
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
    className="grid grid-cols-2 md:grid-cols-3 pt-10 gap-4 gap-y-5"
    variants={container}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}>
      {serviceItem.map((item,index) => {
        return (
      <motion.li key={index} variants={items} className="service_main_item p-3 md:p-4 bg-[#0e0e1a] rounded-md border border-[#1E2849]">
      <Link href={`/service/${item.id}`}>
      <div className=" md:max-w-[330px]     h-full flex flex-col items-center justify-between">
           <div className="mb-5 z-20">
             <p className="text-white mb-1 text-[14px] md:text-[16px] font-semibold max-w-[265px] text-left">
               {item.title}
             </p>
             <p className="home_service_description text-[#B8BEBF] text-[12px] md:text-[14px] ">{item.description}</p>
           </div>
          <div className="z-20">
          <Image 
             width={250}
             height={250}
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

export default ServiceItem;
