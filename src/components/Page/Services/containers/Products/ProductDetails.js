'use client'
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const ProductDetails = ({content}) => {
  const ref =useRef(null)
  const isInView=useInView(ref,{once:true})

  const container={
    hidden:{opacity:0},
    visible:{
      opacity:1,
      scale:1,
      transition:{
        delayChildren:0.3,
        staggerChildren:0.3
      }
    }
  }

  const items={
    hidden:{opacity:0},
    visible:{opacity:1}
  }
  return (
    <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? "visible" :"hidden"} className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {content.data.map((item, index) => {
        return (
          <motion.div variants={items}
            key={index}
            className="md:max-w-[331px] border border-[#DFDFDF] rounded-md p-4"
          >
            <Image
              className="pb-4"
              width={48}
              height={48}
              src={item.image}
              alt="product_solution"
            />

            <div className="">
              <p className="text-[16px] font-semibold text-black pb-1">
                {item.title}
              </p>
              <p className="text-[14px] text-[#393939]">{item.description}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ProductDetails;
