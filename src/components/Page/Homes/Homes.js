import React from "react";
import Introduction from "./Content/Introduction";
import Partners from "./Content/Partners";
import Service from "./Content/Service";
import Features from "./Content/Features";
import Industries from "./Content/Industries";

const Homes = () => {
  return (
    <div>
      <Introduction />
      <Partners/>
      <Service/>
      <Features/>
      <Industries/>
      {/* <div className="my-10 relative m-auto w-96">
        <div className="bg-cloud line-svg" style={{width:'20px', height:'20px'}}></div>
        <svg width="194" height="93">
        <path d="M1 0.5V45.5C1 54.3366 8.16344 61.5 17 61.5H177C185.837 61.5 193 68.6634 193 77.5V93" stroke="#242424" fill="none"/>

        </svg>
      </div>

      <div className="my-10 relative m-auto w-96">
        <div className="bg-cloud lines-svg" style={{width:'100px', height:'20px'}}></div>
     
      </div> */}
    </div>
  );
};

export default Homes;
