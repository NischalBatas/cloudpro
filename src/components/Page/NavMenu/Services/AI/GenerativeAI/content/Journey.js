import Image from "next/image";
import React from "react";
import Services from "./Services";

const Journey = () => {
  return (
    <div className="navbar-main py-10 md:py-20 bg-cloudbg2">
      <div className="business-growth-main flex flex-wrap md:flex-nowrap justify-between gap-2">
        <div className="w-full md:w-6/12">
          <div className="text-2xl lg:text-4xl font-semibold w-full md:w-9/12">
            Embark on Your AI Journey with Cloud ProAI
          </div>
          <div className="text-cloud3 text-sm py-3 leading-6 w-full md:w-11/12 leading-7 mt-3">
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
      <Services/>
    </div>
  );
};

export default Journey;