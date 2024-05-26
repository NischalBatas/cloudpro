import React, { useRef } from "react";
import { industries } from "@/db/home/industries";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import { industriesDetails } from "@/db/home/industriesDetail/industriesDetail";

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
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
    <div className="main-container industries-main text-white py-10 my-8">
      <div className="flex flex-col justify-center items-center w-full">
        <p className="text-[14px] uppercase tracking-widest text-cloud">
          Industries
        </p>
        <p className="text-center text-white font-semibold text-[32px] w-full md:w-6/12 lg:w-4/12  py-2">
          Our work spans industries & domains.
        </p>
      </div>


      <motion.ul ref={ref} 
    className="grid grid-cols-2 md:flex md:justify-center mx-auto flex-wrap gap-6 my-10 max-w-[850px]"
    variants={container}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}>

        {industriesDetails.map((item, index) => {
          return (
            <motion.li key={index} variants={items} >
            <Link href={`industry/${item.id}`}
              key={index}
              className="flex flex-col items-center field-content p-4 rounded-md border border-[#1E2849] opacity-75  hover:opacity-100"
            >
              <Image
                width={54}
                height={54}
                src={item.sectorimage}
                alt="image_industries"
              />
              <p className="text-white text-sm px-4 mt-4">{item.sectortitle}</p>
            </Link>
        </motion.li>
      );
    })}
  </motion.ul>
   </div>
  );
};

export default Industries;
