import ToolsSlider from "@/components/SplideSlider/ToolsSlider";
import React from "react";

const Tools = ({ item }) => {
  const tools = item.tools;
  return (
    <div className="navbar-main py-20">
        <div className="main-container">
        <div className="max-w-[504px]">
        <span className="text-[24px] font-bold">Empowering Innovation:</span>
        <p className="text-[18px]">
          Tools and Technologies Behind Our Services
        </p>
      </div>
        <ToolsSlider tools={tools}/>
  
        </div>
    </div>
  );
};

export default Tools;
