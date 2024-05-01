import { industries } from '@/db/industries';
import Image from 'next/image';
import React from 'react'

const IndustriesCategory = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 place-content-end lg:mx-auto flex-wrap gap-4 my-10">
    {industries.map((item, index) => {
      return (
        <div
          key={index}
          className=" flex flex-col items-center "
        >
          <div className="flex justify-center items-center w-[100px] h-[100px] p-4 rounded-md border border-[#B0D5F9]">
          <Image
            width={54}
            height={54}
            src={item.image}
            alt="image_industries"
          />
          </div>
          <p className="text-black text-[14px] px-4 mt-2">{item.title}</p>
        </div>
      );
    })}
  </div>
  )
}

export default IndustriesCategory