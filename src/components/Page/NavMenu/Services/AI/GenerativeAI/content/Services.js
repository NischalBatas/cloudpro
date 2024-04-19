import Image from "next/image";
import React from "react";
import { services } from "@/db/services";
import { MdOutlineArrowOutward } from "react-icons/md";
const Services = () => {
  return (
    <div className="flex flex-wrap justify-between bg-white  rounded mt-5 md:mt-10 px-2 md:px-5 gap-2">
      <div className="max-w-72 py-2 md:py-5">
        <div
          className="relative bg-no-repeat"
          style={{
            width: "297px",
            height: "185.15px",
            backgroundImage: "url('/Image/process/cloudbg.svg')",
          }}
        >
          <Image
            width={280}
            height={280}
            src="/Image/process/cloud2.svg"
            alt="process_image"
            className="flex justify-center m-auto h-full"
          />
        </div>

        <div>
          <div className="text-2xl font-semibold mb-2">
            Generative AI And ML
          </div>
          <div className="text-cloud3 text-sm">
            Unlock the Power of Intelligent Creation with CloudPro AI In the era
            of data-driven innovation, Generative Artificial Intelligence (AI)
          </div>
        </div>
      </div>

      <div className="services-line hidden md:block"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 md:py-5 ">
        {services.map((item, index) => {
          return (
            <div key={index} className="max-w-96">
              <div className="font-semibold flex items-center text-lg gap-1">{item.title} <MdOutlineArrowOutward /></div>
              <div className="text-cloud3 text-sm my-1">{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
