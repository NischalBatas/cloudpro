"use client";
import Image from "next/image";
import React from "react";
import "./enterprises.css";
import * as Tabs from "@radix-ui/react-tabs";
import { enterprises } from "@/db/alconsulting/enterprises";

const Enterprises = () => {
  return (
    <div className="navbar-main py-16 ">
      <div className="main-container ">
        <Tabs.Root
          className="TabsRoot gap-6 lg:gap-4 flex-wrap lg:flex-nowrap overflow-hidden"
          defaultValue="tab1"
        >
          <div>
            <p className="font-medium text-[16px] max-w-[376px]">
              Give your enterprise an advantage with our comprehensive data
              science tools, featuring Generative AI and Machine Learning.
            </p>

            <Tabs.List className="TabsList" aria-label="Manage your account">
              {enterprises.map((item, index) => {
                return (
                  <>
                    <Tabs.Trigger  key={index} className="TabsTrigger" value={`tab${item.id}`}>
                      {item.title}
                    </Tabs.Trigger>
                    <div className="hr-line"></div>
                  </>
                );
              })}
            </Tabs.List>
          </div>

          <Tabs.Content className="TabsContent" value="tab1">
            <div className="relative">
              <div
                className="absolute top-15 left-15 lg:w-[535px] lg:h-[383px] bg-cloud rounded"
                style={{ zIndex: "-1" }}
              ></div>
              <div className="lg:w-[535px] lg:h-[383px] bg-white rounded text-black p-4">
                <p className="max-w-[381px] text-[16px] font-medium">
                  Utilize Large Language Models (LLMs) for Automation and
                  Innovation:
                </p>
                <ul className="text-[#393939] text-[14px] mt-5 list-disc px-6 leading-7">
                  <li className="">
                    Streamline business operations like customer interactions,
                    call centers, and report creation with LLMs.
                  </li>
                  <li>Expand the use of generative AI with LLMOps. </li>
                  <li>
                    Tackle industry-specific challenges using LLMs, employing
                    tools such as LangChain.
                  </li>
                  <li>
                    Tailor and enhance LLMs for specific sector requirements
                    through Reinforcement Learning with Human Feedback (RLHF).
                  </li>
                  <li>
                    Craft bespoke prompts to produce creative and insightful
                    text.
                  </li>
                  <li>
                    Maintain the integrity, quality, and consistency of LLM
                    outputs with GuardRails.
                  </li>
                </ul>
              </div>
            </div>
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="tab2">
            <div className="relative">
              <div
                className="absolute top-15 left-15 lg:w-[535px] lg:h-[383px] bg-cloud rounded"
                style={{ zIndex: "-1" }}
              ></div>
              <div className="lg:w-[535px] lg:h-[383px] bg-white rounded text-black p-4">
                <p className="max-w-[381px] text-[16px] font-medium">
                  Craft bespoke prompts to produce creative and insightful text:
                </p>
                <ul className="text-[#393939] text-[14px] mt-5 list-disc px-6 leading-7">
                  <li className="">
                    Streamline business operations like customer interactions,
                    call centers, and report creation with LLMs.
                  </li>
                  <li>Expand the use of generative AI with LLMOps. </li>
                  <li>
                    Tackle industry-specific challenges using LLMs, employing
                    tools such as LangChain.
                  </li>
                  <li>
                    Tailor and enhance LLMs for specific sector requirements
                    through Reinforcement Learning with Human Feedback (RLHF).
                  </li>
                  <li>
                    Craft bespoke prompts to produce creative and insightful
                    text.
                  </li>
                  <li>
                    Maintain the integrity, quality, and consistency of LLM
                    outputs with GuardRails.
                  </li>
                </ul>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default Enterprises;
