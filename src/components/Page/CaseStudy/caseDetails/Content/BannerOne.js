import React from "react";

const BannerOne = () => {
  return (
    <div
      className="flex flex-col justify-end h-[420px] md:h-[504px]  bg-no-repeat bg-center bg-cover"
      style={{
        // filter: "blur(2px)",
        zIndex: "-1",
        backgroundImage: "url('/Image/casestudy/am.svg')",
      }}
    >
      <p className="m-auto max-w-[839px] text-center font-bold text-[32px] leading-[48px]">
        Enabled real-time health analytics, processing data queries in minutes,
        dramatically improving operational efficiency and patient care
        responsiveness.
      </p>
    </div>
  );
};

export default BannerOne;
