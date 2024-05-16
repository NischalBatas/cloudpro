import React from "react";

const Loading = () => {
  return (
    <div className="overflow-hidden h-screen">
      <div className="flex flex-col justify-end h-[420px] md:h-[504px] bg-[#171717] w-full">
        <div className="navbar-main">
          <div className="main-container">
            <div className="pt-12">
              <p className="text-[14px] text-[#6083F3] font-semibold uppercase tracking-wider mb-[20px] max-w-[110px] h-[15px] animate-pulse bg-[#27292d] rounded-[6px]"></p>
              <p className="mt-2 text-[24px] md:text-[32px] font-semibold max-w-[615px] h-[24px] animate-pulse bg-[#27292d] rounded-[6px]"></p>
              <p className="mt-2 text-[24px] md:text-[32px] font-semibold max-w-[415px] h-[24px] animate-pulse bg-[#27292d] rounded-[6px]"></p>
            </div>
            <div className="flex items-center justify-between gap-5 flex-wrap mt-28 pb-4">
              <div className="flex gap-6">
                <span className="w-[100px] h-[16px] bg-[#27292d] rounded-[6px]"></span>
                <span className="flex items-center gap-1 w-[100px] h-[16px] animate-pulse bg-[#27292d] rounded-[6px]"></span>
              </div>
              <div className="flex gap-5">
                <div className="w-[28px] h-[18px] animate-pulse bg-[#27292d] rounded-[6px]"></div>
                <div className="w-[28px] h-[18px] animate-pulse bg-[#27292d] rounded-[6px]"></div>
                <div className="w-[28px] h-[18px] animate-pulse bg-[#27292d] rounded-[6px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-main tabs_main_service py-[28px] h-[80px] bg-[black] ">
        <div className="main-container flex justify-between gap-6 text-nowrap overflow-x-auto">
          <div className="w-[100px] h-[16px] animate-pulse bg-[#27292d] rounded-[6px]"></div>
          <div className="w-[100px] h-[16px] animate-pulse bg-[#27292d] rounded-[6px]"></div>
          <div className="w-[100px] h-[16px] animate-pulse bg-[#27292d] rounded-[6px]"></div>
          <div className="w-[100px] h-[16px] animate-pulse bg-[#27292d] rounded-[6px]"></div>
          <div className="w-[100px] h-[16px] animate-pulse bg-[#27292d] rounded-[6px]"></div>
        </div>
      </div>

      <div className="navbar-main bg-black py-6" id="introduction_section">
        <div className="main-container flex justify-between items-center flex-wrap md:flex-nowrap  gap-x-2 gap-y-4">
          <div className="md:max-w-[444px]">
            <p className="w-[200px] h-[20px] animate-pulse bg-[#27292d] rounded-[6px] mb-6"></p>
            <p className="w-[220px] mb-4 md:w-[450px] h-[14px] animate-pulse bg-[#27292d] rounded-[6px] mt-2"></p>
            <p className="w-[220px] mb-4 md:w-[450px] h-[14px] animate-pulse bg-[#27292d] rounded-[6px] mt-2"></p>
            <p className="w-[220px] mb-4 md:w-[450px] h-[14px] animate-pulse bg-[#27292d] rounded-[6px] mt-2"></p>
            <p className="w-[220px] mb-4 md:w-[450px] h-[14px] animate-pulse bg-[#27292d] rounded-[6px] mt-2"></p>
            <p className="w-[220px] mb-4 md:w-[450px] h-[14px] animate-pulse bg-[#27292d] rounded-[6px] mt-2"></p>
            <p className="w-[220px] mb-4 md:w-[450px] h-[14px] animate-pulse bg-[#27292d] rounded-[6px] mt-2"></p>
            <p className="w-[220px] mb-4 md:w-[450px] h-[14px] animate-pulse bg-[#27292d] rounded-[6px] mt-2"></p>
            <p className="w-[220px] mb-4 md:w-[450px] h-[14px] animate-pulse bg-[#27292d] rounded-[6px] mt-2"></p>
          </div>

          <p className="mt-2 text-[24px] md:text-[32px] font-semibold w-[245px] h-[224px] md:w-[325px] md:h-[244px] animate-pulse bg-[#27292d] rounded-[6px]"></p>
        </div>
      </div>

      <div className="flex flex-col justify-center h-[250px] md:h-[325px] bg-[#171717] w-full">
        <p className="mx-auto w-[220px] md:w-[450px] h-[18px] animate-pulse bg-[#27292d] rounded-[6px] mt-2"></p>
        <p className="mx-auto w-[200px] md:w-[400px] h-[18px] animate-pulse bg-[#27292d] rounded-[6px] mt-2"></p>
        <p className="mx-auto w-[180px] md:w-[350px] h-[18px] animate-pulse bg-[#27292d] rounded-[6px] mt-2"></p>
        <p className="mx-auto w-[160px] md:w-[310px] h-[18px] animate-pulse bg-[#27292d] rounded-[6px] mt-2"></p>
      </div>
    </div>
  );
};

export default Loading;
