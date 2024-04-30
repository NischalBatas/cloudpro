import React from "react";
import Fields from "./Fields";

const Empower = () => {
  return (
    <div className="navbar-main bg-cloud1 py-14">
      <div className="w-full md:w-5/12">
        <div className="text-white text-xl lg:text-2xl font-semibold ">
          Empowering Industries with Tailored Generative AI Solutions
        </div>
        <div className="text-cloud2 text-sm py-3 leading-6 ">
          Cloud Pro AI's expertise in generative AI extends across various
          sectors, addressing specific industry pain points and unlocking
          growth:
        </div>
      </div>

      <Fields/>
    </div>
  );
};

export default Empower;
