import { products } from "@/db/architectureConsulting/products";
import { generativeProduct } from "@/db/generativeProduct";
import Image from "next/image";
import React from "react";

const GenerativeProduct = () => {
  return (
    <>
      {products.map((item, index) => {
        return (
          <div key={index} className="md:max-w-[331px] border border-[#DFDFDF] rounded-md p-4">
          <Image className="pb-4"
            width={48}
            height={48}
            src={item.image}
            alt="product_solution"
          />

         <div className="">
         <p className="text-[16px] font-semibold text-black pb-1">{item.title}</p>
          <p className="text-[14px] text-[#393939]">{item.description}</p>
       
         </div>
          </div>
        );
      })}
    </>
  );
};

export default GenerativeProduct;
