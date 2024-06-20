"use client"
import { product } from "@/db/home/product";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, useInView } from "framer-motion";
const Product = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
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
    <motion.div ref={ref} variants={container}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"} className="main-container cloud py-5 md:py-14">
      <div className="mb-8">
        <div className="font-semibold text-[32px]">Our Products</div>
        {/* <div className="text-cloud3 mt-2 text-sm">
          We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
          Business and Infrastructure Readiness for the Ultimate Technological
          Leap.
        </div> */}
      </div>

      <div className="grid md:grid-cols-2 items-stretch flex-wrap gap-3 my-5">
        {product.map((item, index) => {
          return (
            <motion.div key={index} variants={items}>
              <Link key={index} href={item.link}>
              <div 
                style={{ background: `${item.color}` }}
                className="product-content-box overflow-hidden  relative flex flex-col  justify-between  bg-no-repeat bg-cover rounded-lg"
              >
                <div className="px-5 pt-4 md:pt-5 flex flex-col justify-start">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-white text-lg  font-semibold">
                      {item.title}
                    </div>
                    <div>
                      <MdOutlineArrowOutward className="product-arrow bg-white rounded-full text-cloud w-6 h-6 text-xs p-1" />
                    </div>
                  </div>

                  <div className="mt-2 text-sm text-white leading-6 ">
                    {item.description}
                  </div>
                </div>

                <div className="hover:scale-125  cursor-pointer">
                  <Image
                    className="product-content-box-image w-full h-auto"
                    width={1000}
                    height={1000}
                    src={`${item.image}`}
                    alt="product_image"
                  />
                </div>
              </div>
              </Link>
            </motion.div>
           
          );
        })}
      </div>
    </motion.div>
  );
};

export default Product;
