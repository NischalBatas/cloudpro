
import { services } from '@/db/services/services';
import Image from 'next/image';
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
const ServiceMain = () => {
  return (
    <div className="navbar-main bg-[#EDF6FF] rounded  py-10">
    <div className="main-container flex flex-wrap md:flex-nowrap items-center justify-between gap-2">
  <div className="md:w-4/12 py-2 md:py-5 m-auto md:m-0 flex flex-col gap-5 items-center justify-center">
     <div className="flex flex-col items-center justify-center">
       <Image
         width={259}
         height={259}
         src="/Image/process/cloud14.svg"
         alt="process_image"
         className="flex justify-center m-auto h-full"
       />
       {/* <p className="text-black font-bold text-[24px]">Generative AI And ML</p> */}
     </div>

   </div>

   {/* <div className="services-line hidden md:block"></div> */}
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-2 md:py-5 ">
     {services.map((item, index) => {
       return (
         <div key={index} className="max-w-96">
           <div className="text-[#071518] font-bold flex items-center text-[16px] gap-1">
             {item.title} <MdOutlineArrowOutward />
           </div>
           <div className="text-cloud3 text-[14px] my-1">{item.description}</div>
         </div>
       );
     })}
   </div>
   </div>
 </div>
  )
}

export default ServiceMain