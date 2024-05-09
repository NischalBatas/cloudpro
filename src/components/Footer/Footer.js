import React from "react";
import FooterContent from "./FooterContent";
import FooterCopyRight from "./FooterCopyRight";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="text-white pb-20">
      <div className="flex flex-col gap-4 md:gap-1">
        <Contact />
        {/* <div className="w-full bg-cloud3" style={{ height: "1px" }}></div> */}
        <FooterContent />
        <div className="w-full bg-cloud3" style={{ height: "1px" }}></div>

        <FooterCopyRight />
      </div>
    </div>
  );
};

export default Footer;
