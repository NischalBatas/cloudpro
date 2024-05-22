import Image from 'next/image';
import React from 'react'
import { TbShare2 } from "react-icons/tb";

const BlogImage = () => {
  return (
    <div className='navbar-main bg-white text-[#000] relative'>
      <div className='hidden md:block w-full h-[320px] bg-black absolute' 
       style={{position: "absolute",
       top: "0%",
       left: "0%",
       transform: "translate(-0%, -0%)",
      zIndex:'1'}}
       ></div>
         <div  style={{zIndex:'2'}} className="relative main-container   pt-8 pb-0 w-full mx-4 rounded-md gap-6">
          <div>
            <div className="pb-4 main-container text-black  md:text-white flex items-center justify-between">
              <p>May 20, 2024</p>
              <TbShare2 />
            </div>
            <Image
              width={1500}
              height={387}
              src="/Image/blog/blogBackground.png"
              alt="Blog Background"
              className='rounded-[8px]'
            />
            <p className="pt-[22px] text-[16px] leading-[24px]">
              Alternative data is like finding hidden treasures in unexpected
              places and resources. They are information collected from sources
              that are different from the usual ones everyone uses and
              retrieves.This kind can give us insights that regular sources
              might miss. can give us insights that regular sources might miss.
              But what counts as alternative data can change depending on the
              industry and what kind of data everyone else is using.
            </p>
          </div>
        </div>  </div>
  )
}

export default BlogImage