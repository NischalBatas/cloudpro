import { products } from "@/db/alconsulting/products";
import { generativeProduct } from "@/db/generativeProduct";
import Image from "next/image";
import React from "react";

const GenerativeProduct = () => {
  return (
    <>
      {products.map((item, index) => {
        return (
          <div key={index} className="md:max-w-[331px] border border-[#DFDFDF] rounded-md">
            <Image
              width={1000}
              height={1000}
              src={item.image}
              alt="product_solution"
            />

           <div className="pt-1 px-2 pb-3">
           <p className="text-[16px] font-medium text-black">{item.title}</p>
            <p className="text-[14px] text-[#393939]">{item.description}</p>
         
           </div>
            </div>
        );
      })}
    </>
  );
};

export default GenerativeProduct;
