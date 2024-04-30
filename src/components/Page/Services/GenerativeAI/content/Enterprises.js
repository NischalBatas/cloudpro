import Image from "next/image";
import React from "react";

const Enterprises = () => {
  return (
    <div className="navbar-main py-16 flex justify-between flex-wrap gap-6 lg:gap-4 overflow-hidden">
      <div>
      <p className="font-medium text-[16px] max-w-[376px]">
        Give your enterprise an advantage with our comprehensive data science
        tools, featuring Generative AI and Machine Learning.
      </p>
      <div className="mt-10">
        <ul className="text-[14px] text-semibold gap-4">
          <li className="text-cloud bg-[#161616] px-6 py-4" style={{borderLeft:'2px solid #5576de'}}>Generative AI</li>
          <li className="p-2 py-4">Analvtics strategy for GenAl and MU</li>
          <hr></hr>
          <li className="p-2 py-4">Business insights from data</li>
          <hr></hr>
          <li className="p-2 py-4">Model creation and scaling</li>
        </ul>
      </div>

      </div>
      <div className="relative">
        <div
          className="absolute top-5 left-5 md:w-[535px] md:h-[383px] bg-cloud rounded"
          style={{ zIndex: "-1" }}
        ></div>
        <div className="md:w-[535px] md:h-[383px] bg-white rounded text-black p-5">
          <p className="max-w-[381px] text-[16px] font-medium">
            Utilize Large Language Models (LLMs) for Automation and Innovation:
          </p>
          <ul className="text-[#393939] text-[14px] mt-5 list-disc px-6 leading-7">
            <li className="">
              Streamline business operations like customer interactions, call
              centers, and report creation with LLMs.
            </li>
            <li>Expand the use of generative AI with LLMOps. </li>
            <li>Tackle industry-specific challenges
              using LLMs, employing tools such as LangChain. </li>
              <li>Tailor and enhance
              LLMs for specific sector requirements through Reinforcement
              Learning with Human Feedback (RLHF). </li>
              <li>Craft bespoke prompts to
              produce creative and insightful text. </li>
              <li>Maintain the integrity,
              quality, and consistency of LLM outputs with GuardRails.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Enterprises;
