import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Introduction = ({item}) => {
  return (
   <div className='navbar-main py-[32px] md:py-[42px]'>
     <div className="pb-[42px] main-container flex justify-between items-center gap-5 flex-wrap md:flex-nowrap">
    <Image className="max-w-[412px] h-auto"
        width={412}
        height={412}
        src={item.introduction.image}
        alt="product_image"
        priority
      />
      <div className="md:max-w-[520px]">
        <span className="text-[#5677E1] text-[10px] font-medium rounded-[8px] px-[16px] py-[8px] bg-[#0c111f]">{item.introduction.category}</span>
        <div className="mt-[29px] mb-[5px]">
        <p className=" text-[24px] md:text-[32px] font-bold md:leading-[41px] tracking-[0.96px] capitalize">
          {item.introduction.title}
        </p>
        </div>
        <p className="text-[#B5B5B5] mt-2 mb-[24px] text-[14px] md:text-[16px] md:leading-[28px]">
          {item.introduction.description}
        </p>

        <Link href='/contact?action=message' className=" text-[14px] px-[16px] py-[12px] rounded-[8px] bg-white text-black">{item.introduction.button}</Link>
      </div>
    </div>
   </div>
  )
}

export default Introduction