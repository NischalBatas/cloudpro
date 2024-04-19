import Image from "next/image";
import React from "react";

const Solutions = () => {
  return (
    <div className="navbar-main flex flex-wrap md:flex-nowrap gap-4 lg:gap-10 py-14">
      <div className="relative flex m-auto md:m-none wow animate__animated animate__fadeInLeft animate__slow">
        <Image
          width={356}
          height={356}
          alt="business growth"
          src="/Image/process/generativeapp/cloud9.svg"
          className=""
          style={{ zIndex: "-1" }}
        />
        
      </div>

      <div className="w-full md:w-8/12 mt-2 md:mt-0 lg:mt-4 wow animate__animated animate__fadeInRight animate__slow">
        <div className="text-2xl lg:text-3xl font-semibold w-full md:w-4/6">
        Supercharging Businesses with Customized AI Solutions 
        </div>
        <div className="text-cloud3 text-sm py-3 leading-6 ">
          Cloud Pro AI excels in transforming the potential of generative AI
          into a tangible reality for businesses. Combining deep industry
          knowledge with a sophisticated technical stack, including TensorFlow,
          PyTorch, GPT, and premier cloud computing platforms like AWS, Google
          Cloud, and Azure, Cloud Pro AI ensures the seamless integration and
          scalability of AI apps within your business operations. <br/> <br/>
          Understanding the unique challenges and opportunities each business faces, Cloud Pro
          AI offers bespoke solutions to automate content creation, streamline
          product design, or enhance customer interactions, driving substantial
          improvements in efficiency, customer satisfaction, and overall growth.<br/> <br/>
          Understanding the unique challenges and opportunities each business
          faces, Cloud Pro AI offers bespoke solutions to automate content
          creation, streamline product design, or enhance customer interactions,
          driving substantial improvements in efficiency, customer satisfaction,
          and overall growth.
        </div>
      </div>
    </div>
  );
};

export default Solutions;
