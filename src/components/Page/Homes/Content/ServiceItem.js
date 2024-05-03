import { serviceItem } from "@/db/serviceItem";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ServiceItem = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
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
    <motion.ul
    className="grid grid-cols-2 md:grid-cols-3 mt-10 gap-4 gap-y-5"
    variants={container}
    initial="hidden"
    animate="visible">
      {serviceItem.map((item,index) => {
        return (
      <motion.li key={index} variants={items} >
         <div key={index} className="md:max-w-[330px] bg-[#0e0e1a] p-4 rounded-md border border-[#1E2849] flex flex-col items-center">
           <div className="mb-5">
             <p className="text-white mb-1 text-[16px] font-semibold max-w-[265px] text-left">
               {item.title}
             </p>
             <p className="text-[#B8BEBF] text-[14px] ">{item.description}</p>
           </div>
           <Image
             width={250}
             height={250}
             src={item.image}
             alt="Image_product"
           />
         </div>
    </motion.li>
        );
      })}
    </motion.ul>
  //   <motion.ul
  //   className="container"
  //   variants={container}
  //   initial="hidden"
  //   animate="visible"
  // >
  //   {[0, 1, 2, 3].map((index) => (
  //     <motion.li key={index} className="item" variants={item} />
  //   ))}
  // </motion.ul>
  );
};

export default ServiceItem;
