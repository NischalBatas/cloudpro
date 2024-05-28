import Image from "next/image";
import React from "react";
import FormFields from "../FormFields/FormFields";

const NewsletterForm = () => {
  return (
    <div className="">
      <div
        className="newsletter_main_content flex flex-col pt-24 pb-10   bg-no-repeat md:bg-center md:bg-cover"
       
      >
  <div className="main-container4  md:bg-[black]  rounded-[16px] p-[24px] md:p-[55px]">
        
        <div className="grid md:grid-cols-2 gap-10 md:gap-4">
        <div className="md:max-w-[424px]">
         <div className="max-w-[366px]">
         <span className="max-w-[366px] text-[24px] md:text-[32px] leading-8 md:leading-[42px] font-bold">Get Notified with our newsletter</span>
         </div>
             <p className="mt-2 md:mt-3  text-[16px] leading-[24px]">
               Subscribe to our newsletter and stay up to date with the latest
               news, updates, and products. Get valuable insights into the world of
               AI
             </p>
             <Image className="mt-8" width={280} height={280} src='/Image/notification/qr.png'/>
           </div>
   
           <FormFields/>
        </div>
         </div>

      </div>

    
    </div>
  );
};

export default NewsletterForm;
