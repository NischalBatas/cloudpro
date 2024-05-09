import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FooterCopyRight = () => {
  return (
    <div className="footer_width flex justify-between items-center gap-2 flex-wrap pt-4">
      <div className="flex  gap-4 text-cloud2 text-[10px] md:text-sm">
        <Link href="#" className="font-semibold">2024 CloudProAI. LLC.</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms of Sevices</Link>
      </div>

      <div className="flex  gap-4 text-cloud2 text-[16px]">
        <Link href="#"><FaXTwitter /></Link>
        <Link href="#"><FaLinkedin /></Link>
        <Link href="#"><FaInstagram /></Link>
      </div>
    </div>
  );
};

export default FooterCopyRight;
