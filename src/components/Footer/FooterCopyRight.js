import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

const FooterCopyRight = () => {
  return (
    <div className="footer_width flex justify-between items-center gap-2 flex-wrap pt-4">
      <div className="flex flex-wrap items-center gap-3 md:gap-8 text-cloud2 text-[12px] md:text-[14px]">
        <Link href='/'><Image width={124} height={14.289} src='/Image/logo/logo-white.svg' alt="footer_logo" /></Link>
        <Link href="#" className="font-semibold">2024 CloudPro.AI</Link>
        <Link target="_blank" href="/privacy-policy">Privacy Policy</Link>
        <Link href="#">Terms of Sevices</Link>
      </div>

      <div className="flex  items-center gap-[18px] text-cloud2 text-[24px]">
        <Link href="#"><FaXTwitter /></Link>
        <Link target="_blank" href="https://www.youtube.com/@CloudProAI"><FaYoutube /></Link>
        <Link target="_blank" href="https://www.linkedin.com/company/cloudproai/"><FaLinkedin /></Link>
        {/* <Link href="#"><FaInstagram /></Link> */}
      </div>
    </div>
  );
};

export default FooterCopyRight;
