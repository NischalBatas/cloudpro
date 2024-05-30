import React from "react";

const Banner = ({item}) => {
  return (
    <div
      className="flex flex-col justify-end h-[250px] md:h-[399px]  bg-no-repeat bg-center bg-cover"
      style={{
        // filter: "blur(2px)",
        zIndex: "-1",
        backgroundImage: "url('/Image/casestudy/am.svg')",
      }}
    >
      <p className="m-auto max-w-[519px] text-center font-bold text:[28px] md:text-[32px] md:leading-[48px]">
      {item.banner}
      </p>
    </div>
  );
};

export default Banner;
