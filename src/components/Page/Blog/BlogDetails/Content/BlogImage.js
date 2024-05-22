import Image from 'next/image';
import React from 'react'
import { TbShare2 } from "react-icons/tb";

const BlogImage = ({posts}) => {
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
              src={posts.featuredImage.node.link}
              alt="Blog Background"
              className='max-h-[387px] rounded-[8px]'
            />
            <p className="pt-[22px] text-[16px] leading-[24px]">
            {posts.blogfield.description}
            </p>
          </div>
        </div>  </div>
  )
}

export default BlogImage