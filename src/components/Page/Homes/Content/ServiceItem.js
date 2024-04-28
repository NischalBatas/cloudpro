import { serviceItem } from "@/db/serviceItem";
import Image from "next/image";
import React from "react";

const ServiceItem = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-4 gap-y-5">
      {serviceItem.map((item) => {
        return (
          <div className="md:max-w-[330px] bg-[#101218] p-4 rounded-md border border-[#1E2849] flex flex-col items-center">
            <div className="mb-5">
              <p className="text-white mb-1 text-[16px] font-semibold max-w-[265px] text-left">
                {item.title}
              </p>
              <p className="text-cloud3">{item.description}</p>
            </div>
            <Image
              width={250}
              height={250}
              src={item.image}
              alt="Image_product"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ServiceItem;
