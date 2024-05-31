"use client";
import Image from "next/image";
import React from "react";
import FormFields from "../FormFields/FormFields";
import toast, { Toaster } from "react-hot-toast";
import NewsletterSlider from "@/components/SplideSlider/NewsletterSlider";
import './NewsletterForm.css'
const NewsletterForm = () => {
  return (
    <div className="NewsletterForm_main">
      <div className="newsletter_main_content flex flex-col pt-24 pb-10   bg-no-repeat md:bg-center md:bg-cover">
        <div className="main-container4  md:bg-[black]  rounded-[16px] p-[24px] md:p-[55px]">
          <div className="grid md:grid-cols-2 gap-10 md:gap-10">
            <div>
              <div className="md:max-w-[424px]">
                <div className="max-w-[366px]">
                  <span className="max-w-[366px] text-[24px] md:text-[32px] leading-8 md:leading-[42px] font-bold">
                    Get Notified with our newsletter
                  </span>
                </div>
                <p className="mt-2 md:mt-3  text-[16px] leading-[24px]">
                  Subscribe to our newsletter and stay up to date with the
                  latest news, updates, and products. Get valuable insights into
                  the world of AI
                </p>
              </div>

              <Toaster
                position="bottom-right"
                toastOptions={{
                  style: {
                    fontSize: "14px",
                    fontWeight: "600",
                    background: "#fff",
                  },
                }}
              />
              {/* <div className="hidden md:flex items-center flex-col justify-center">
         
           <Image className=" mt-10" width={200} height={200} src='/Image/notification/qr.png'/>
           <span className="mt-2 text-[12px] text-[#b0b0b0]">Please scan the QR code to access the form.</span>
           </div> */}
              <NewsletterSlider />
            </div>

            <FormFields />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
