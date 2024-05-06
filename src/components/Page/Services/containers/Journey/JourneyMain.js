import Image from "next/image";
import React from "react";


const JourneyMain = () => {
  return (
    <div className="navbar-main py-10 md:py-20 bg-cloudbg2">
      <div className="main-container business-growth-main flex flex-wrap-reverse lg:flex-nowrap justify-between gap-2">
        <div className="w-full lg:w-6/12">
          <div className="text-black text-[32px] font-bold max-w-[404px] leading-10">
            Embark on Your AI Journey with Cloud ProAI
          </div>
          <div className="text-black text-sm py-3  lg:max-w-[464px] leading-7 mt-3">
            The future of business innovation and growth is inextricably linked
            to the capabilities of generative AI. With Cloud Pro AI, your
            business is poised to navigate this new frontier with confidence,
            leveraging the full spectrum of AI's capabilities to revolutionize
            operations, engage customers, and outpace competition. <br />
            <br />
            Cloud Pro AI is not just a service provider but a partner committed
            to ensuring that the generative AI solutions evolve with your
            business, addressing new challenges and seizing opportunities.
            Contact Cloud Pro AI today to discover how generative AI can
            transform your business, driving unprecedented growth and success in
            the digital era.
          </div>
        </div>

        <div>
          <Image
            width={509}
            height={386.41}
            src="/Image/process/generativeapp/cloud13.svg"
            alt="images_cloud"
          />
        </div>
      </div>
      
    </div>
  );
};

export default JourneyMain;
