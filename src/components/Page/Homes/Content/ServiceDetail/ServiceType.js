import React from "react";

const ServiceType = () => {
  return (
    <div className="navbar-main bg-cloud py-[35px]">
      <div className="main-container">
        <p className="max-w-[427px] text-[24px] font-bold tracking-[0.72px] capitalize">
          Empower Your Business with CloudPro AI's Generative AI and AI
          Consulting Services
        </p>

        <div className="my-[32px] w-full h-[4px] bg-[#3B5DCB]"></div>

        <div className="flex justify-between gap-4 flex-wrap md:flex-nowrap">
          <div className="md:max-w-[400px]">
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
            <button className="mt-[16px] px-[16px] py-[12px] text-[14px] rounded-[8px] bg-white text-black">
              Learn More
            </button>
          </div>
          <div className="md:max-w-[400px]">
            <span className="text-[32px] font-bold">AI Consulting</span>
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
            <button className="mt-[16px] px-[16px] py-[12px] text-[14px] rounded-[8px] bg-white text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceType;
