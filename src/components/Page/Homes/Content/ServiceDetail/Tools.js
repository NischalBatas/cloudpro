import ToolsSlider from "@/components/SplideSlider/ToolsSlider";
import React from "react";
import "../../slider.css";
import Link from "next/link";
import Image from "next/image";
const Tools = ({ item }) => {
  const service_providers = item.tools_services.service_providers;
  const tools = item.tools_services.tools;
  return (
    <div className="home_service_tools navbar-main py-20">
      <div className="main-container">
        <div className="max-w-[504px]">
          <span className="text-[24px] font-bold">Empowering Innovation:</span>
          <p className="text-[18px]">
            Tools and Technologies Behind Our Services
          </p>
        </div>
        {/* <ToolsSlider tools={tools}/> */}

        <div className="mt-10 flex flex-col">
          <span className="text-[20px] font-semibold">Major Service Providers</span>
          <div className="mt-2 flex justify-start flex-wrap text-center gap-6">
          {service_providers.map((item, index) => {
            return (
              <div key={index}>
                <Link target="_blank" href={item.url}>
                  <Image
                    className="rounded-[6px] max-w-[117px] h-[117px]"
                    width={117}
                    height={117}
                    src={item.image}
                    alt="tools image"
                  />
                  <div>
                    <span className="text-[14px] whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
          </div>
        </div>

        <div className="mt-10 flex flex-col">
          <span className="text-[20px] font-semibold">Tools and Technologies</span>
          <div className="mt-2 flex justify-start flex-wrap text-center gap-6">
          {tools.map((item, index) => {
            return (
              <div key={index}>
                <Link target="_blank" href={item.url}>
                  <Image
                    className="rounded-[6px] max-w-[117px] h-[117px]"
                    width={117}
                    height={117}
                    src={item.image}
                    alt="tools image"
                  />
                  <div>
                    <span className="text-[14px] whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default Tools;
