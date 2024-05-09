import React from "react";
import FooterContent from "./FooterContent";
import FooterCopyRight from "./FooterCopyRight";
import Contact from "../Page/Homes/Content/Contact";

const Footer = () => {
  return (
    <div className="navbar-main bg-cover  text-white py-10">
      <div className="footer_width flex flex-col gap-4 md:gap-1">
        <Contact />
        <div className="w-full bg-cloud3" style={{ height: "1px" }}></div>
        <FooterContent />
        <div className="w-full bg-cloud3" style={{ height: "1px" }}></div>

        <FooterCopyRight />
      </div>
    </div>
  );
};

export default Footer;
