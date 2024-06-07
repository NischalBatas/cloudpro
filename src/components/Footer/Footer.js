import React from "react";
import FooterContent from "./FooterContent";
import FooterCopyRight from "./FooterCopyRight";
import Contact from "./Contact";
import FooterLogo from "./FooterLogo";
import Banner from "./Banner";

const Footer = () => {
  return (
    <div className="text-white bg-[#0E0E0E] relative z-[100]  px-5 pt-10">
      <div className="flex flex-col gap-4 md:gap-1">
        {/* <Contact /> */}
        <Banner/>
        {/* <div className="w-full bg-cloud3" style={{ height: "1px" }}></div> */}
        <FooterContent />
        {/* <div className="w-full bg-cloud3" style={{ height: "1px" }}></div> */}

        <FooterCopyRight />
        <FooterLogo/>
      </div>
    </div>
  );
};

export default Footer;
