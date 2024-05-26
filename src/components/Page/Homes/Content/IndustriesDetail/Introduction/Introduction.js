import Image from "next/image";
import Link from "next/link";
import React from "react";

const Introduction = ({ item }) => {
  return (
    <div className="navbar-main py-[20px] md:py-[92px]">
      <div className="pb-[42px] main-container flex justify-between items-center gap-5 flex-wrap md:flex-nowrap">
        <Image
          width={412}
          height={412}
          src="/Image/serviceItem/serviceDetail/1.svg"
          alt="product_image"
        />
        <div className="md:max-w-[520px]">
          <span className="text-[#5677E1] text-[10px] font-medium rounded-[8px] px-[16px] py-[8px] bg-[#0c111f]">
            Industries / Ecommerce
          </span>
          <div className="mt-[29px] mb-[5px]">
            <p className=" text-[24px] md:text-[32px] font-bold md:leading-[41px] tracking-[0.96px] capitalize">
              Transforming Customer Experience, One Interaction at a Time 
            </p>
          </div>
          <p className="text-[#B5B5B5] mt-2 mb-[24px] text-[14px] md:text-[16px] md:leading-[28px]">
            At CloudProAI, we take immense pride in empowering e-commerce
            businesses of all sizes to achieve their full potential. In the
            fast-evolving digital marketplace, our advanced AI and cloud
            solutions are designed to meet the unique needs of online retailers,
            marketplaces, and e-commerce platforms. From startups to global
            enterprises, we provide the tools and expertise necessary to enhance
            operations, optimize customer experiences, and drive sustainable
            growth. 
          </p>

          <Link
            href="/contact?action=message"
            className=" text-[14px] px-[16px] py-[12px] rounded-[8px] bg-white text-black"
          >
           Speak to an Expert
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
