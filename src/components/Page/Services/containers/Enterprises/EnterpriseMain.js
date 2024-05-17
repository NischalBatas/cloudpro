"use client";
import React from 'react'
import "./content/enterprises.css";
import * as Tabs from "@radix-ui/react-tabs";



const EnterpriseMain = ({content}) => {
  return (
    <div className="navbar-main py-16 ">
    <div className="main-container ">
      <Tabs.Root
        className="TabsRoot2 gap-6 lg:gap-4 flex-wrap md:flex-nowrap items-center overflow-hidden"
        defaultValue="tab1"
      >
        <div>
          <p className="font-medium text-[16px] max-w-[379px]">
           {content.heading}
          </p>

          <Tabs.List className="TabsList2" aria-label="Manage your account">
            {content.data.map((item, index) => {
              return (
                <div key={index}>
                  <Tabs.Trigger
                    
                    className="TabsTrigger2"
                    value={`tab${item.id}`}
                  >
                    {item.title}
                  </Tabs.Trigger>
                  <div className="hr-line"></div>
                </div>
              );
            })}
          </Tabs.List>
        </div>
        {content.data.map((item, index) => {
          return (
            <Tabs.Content
              key={index}
              className="TabsContent2"
              value={`tab${item.id}`}
            >
              <div className="relative">
                <div
                  className="absolute top-15 left-15 lg:w-[535px] lg:h-[383px] bg-cloud rounded"
                  style={{ zIndex: "-1" }}
                ></div>
                <div className="max-w-[400px] lg:max-w-[535px] min-h-[383px] bg-white rounded text-black p-4">
                  <p className="max-w-[381px] text-[16px] font-medium">
                    {item.title}
                  </p>
                  <ul className="text-[#393939] text-[14px] mt-5 list-disc px-6 leading-7">
                    {item.list.map((item, index) => {
                      return (
                        <li key={index} className="">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Tabs.Content>
          );
        })}
      </Tabs.Root>
    </div>
  </div>
  )
}

export default EnterpriseMain