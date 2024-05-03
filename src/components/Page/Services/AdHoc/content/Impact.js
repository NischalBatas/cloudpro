import React from "react";
import Testimonial from "./Testimonial";

const Impact = () => {
  return (
    <div className="navbar-main bg-cloudBtn2 py-16 text-black">
      <div className="main-container">
      <div className="wow animate__animated animate__fadeInRight animate__slow">
        <div className="text-[20px] md:text-[24px] ">
          <span className="font-semibold ">Why</span> implement Ad-hoc Reporting Solution
        </div>
      </div>

      <div
        className="w-full bg-cloud4 my-2 md:my-9"
        style={{ height: "1px" }}
      ></div>
      <Testimonial />
      </div>
    </div>
  );
};

export default Impact;
