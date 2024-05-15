"use client"
import React from "react";
import ImpactContent from "./ImpactContent";

const ImpactMain = ({ content }) => {
  return (
    <div className="navbar-main bg-cloudBtn2 py-16 text-black">
      <div className="main-container">
        <div>
          <div className="text-[20px] md:text-[24px] ">
            <span className="font-semibold ">Why</span> {content.title}
          </div>
        </div>

        <div
          className="w-full bg-cloud4 my-2 md:my-9"
          style={{ height: "1px" }}
        ></div>
        <ImpactContent content={content} />
      </div>
    </div>
  );
};

export default ImpactMain;
