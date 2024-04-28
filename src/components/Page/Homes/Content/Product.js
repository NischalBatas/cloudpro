import { product } from "@/db/product";
import Image from "next/image";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Product = () => {
  return (
    <div className="navbar-main cloud py-5 md:py-14">
      <div className="m-auto mb-8 w-full md:w-6/12 lg:w-4/12 text-center">
        <div className="font-semibold text-3xl">Our Product</div>
        <div className="text-cloud3 mt-2 text-sm">
          We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
          Business and Infrastructure Readiness for the Ultimate Technological
          Leap.
        </div>
      </div>

      <div className="flex justify-center lg:justify-start flex-wrap gap-6 my-5">
        {product.map((item, index) => {
          return (
            <div key={index}>
              <div
                style={{ backgroundColor: `${item.color}` }}
                className="product-content-box overflow-hidden  relative flex flex-col  justify-between  bg-no-repeat bg-cover rounded-lg"
              >
                <div className="px-5 pt-4 md:pt-5 flex flex-col justify-start">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-white text-lg  font-semibold">
                      {item.title}
                    </div>
                    <div>
                      <MdOutlineArrowOutward className="bg-white rounded-full text-cloud w-6 h-6 text-xs p-1" />
                    </div>
                  </div>

                  <div className="mt-2 text-sm text-white leading-6 ">
                    {item.description}
                  </div>
                </div>

                <div className="hover:scale-125  cursor-pointer">
                  <Image
                    className="product-content-box-image"
                    width={1000}
                    height={1000}
                    src={`${item.image}`}
                    alt="product_image"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;