import React from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { testimonialClient } from "@/db/home/testimonialClient";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const ServiceDetailTypes = () => {
  const splideOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    rewind: true,
    autoplay: true, // Whether to enable autoplay
    interval: 2400, // Autoplay interval in milliseconds
    pauseOnHover: true, // Whether to pause autoplay on hover
    drag: true, // Whether to enable drag/swipe interaction
    keyboard: true, // Whether to enable keyboard navigation
    focus: "left",
    lazyLoad: "sequential",
    width: "100%",
    // padding:'2rem',
    padding: { right: "1rem" },
    gap: "2rem",
    pagination: false,
    breakpoints: {
      1332: {
        // padding:'2rem',
      },
      1250: {
        // padding:'1rem',
      },
      1125: {
        perPage: 1,
      
      },
      576: {
        perPage: 1,
          padding: 0,
      },
    },
  };
  return (
    <div className="mx-auto overflow-hidden">
      <Splide options={splideOptions}>
        <SplideSlide className="md:max-w-[1010px] flex justify-between gap-4 rounded-[8px]  px-[24px] py-[28px] bg-[#4762BB]">
          <div className="md:max-w-[446px]">
            <span className="text-[32px] font-bold">Generative AI </span>
            <p className="pt-[20px] text-[14px] leading-[24px]">
              Experience the future of app development with our Generative AI
              solutions. Our team specializes in creating innovative
              applications that harness the power of AI to generate creative
              content and imagery. Whether you're looking to automate content
              creation, enhance user experiences, or push the boundaries of app
              development, our Generative AI services are designed to exceed
              your expectations. Let us help you unlock new possibilities and
              transform your ideas into reality with our cutting-edge Generative
              AI technology.  
            </p>

            <ul className="py-[24px] flex text-nowrap gap-2 max-w-[350px] overflow-hidden">
              <li className="leading-[28px] text-[16px] font-semibold px-[16px] py-[8px] rounded-[8px] border-[1px] border-[#00000029] bg-[##0303030d]">
                Chatbots
              </li>
              <li className="leading-[28px] text-[16px] font-semibold px-[16px] py-[8px] rounded-[8px] border-[1px] border-[#00000029] bg-[##0303030d]">
                Document Understanding and OCR 
              </li>
              <li className="leading-[28px] text-[16px] font-semibold px-[16px] py-[8px] rounded-[8px] border-[1px] border-[#00000029] bg-[##0303030d]">
                LLM Learning
              </li>
            </ul>
            <Link href='/services/generative-ai' className="px-[16px] py-[12px] text-[14px] rounded-[8px] bg-white text-black">
              Learn More
            </Link>
          </div>
          <Image  className="hidden md:block"
            width={391}
            height={288}
            src="/Image/serviceItem/serviceDetail/6.svg"
            alt="product_image"
          />
        </SplideSlide>

        <SplideSlide className="md:max-w-[1010px] flex justify-between gap-4 rounded-[8px]  px-[24px] py-[28px] bg-[#4762BB]">
          <div className="md:max-w-[446px]">
            <span className="text-[32px] font-bold">AI Consulting </span>
            <p className="pt-[20px] text-[14px] leading-[24px]">
              Empower your business with our AI Consulting services. Our
              experienced consultants work closely with you to understand your
              business objectives and identify opportunities for leveraging AI
              technologies effectively. Whether you're looking to integrate AI
              into your existing systems, develop AI-driven products, or
              optimize business processes, our AI Consulting services provide
              the expertise and guidance you need to succeed. Let us help you
              navigate the complexities of AI implementation and unlock the full
              potential of AI for your business. 
            </p>

            <ul className="py-[24px] flex text-nowrap gap-2 max-w-[350px] overflow-hidden">
              <li className="leading-[28px] text-[16px] font-semibold px-[16px] py-[8px] rounded-[8px] border-[1px] border-[#00000029] bg-[##0303030d]">
                Chatbots
              </li>
              <li className="leading-[28px] text-[16px] font-semibold px-[16px] py-[8px] rounded-[8px] border-[1px] border-[#00000029] bg-[##0303030d]">
                Document Understanding and OCR 
              </li>
              <li className="leading-[28px] text-[16px] font-semibold px-[16px] py-[8px] rounded-[8px] border-[1px] border-[#00000029] bg-[##0303030d]">
                LLM Learning
              </li>
            </ul>
            <Link href='/services/ai-consulting' className="px-[16px] py-[12px] text-[14px] rounded-[8px] bg-white text-black">
              Learn More
            </Link>
          </div>
          <Image className="hidden md:block"
            width={280}
            height={140}
            src="/Image/serviceItem/serviceDetail/7.png"
            alt="product_image"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default ServiceDetailTypes;
