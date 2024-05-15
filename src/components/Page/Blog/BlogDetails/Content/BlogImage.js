import Image from 'next/image';
import React from 'react'
import { TbShare2 } from "react-icons/tb";

const BlogImage = () => {
  return (
    <div className='navbar-main mt-[22px] bg-white text-[#000]'>
        <div className='main-container flex items-center justify-between'>
            <p>May 20, 2024</p>
            <TbShare2 />
        </div>
        <Image width={1500} height={500} src='/Image/blog/blogBackground.png' alt='Blog Background'/>
    </div>
  )
}

export default BlogImage