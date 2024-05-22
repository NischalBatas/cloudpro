import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Introduction = () => {
  return (
   <div className='navbar-main pt-[20px] md:pt-[36px]'>
     <div className="pb-[42px] main-container flex justify-between items-center gap-5 flex-wrap md:flex-nowrap">
    <Image
        width={412}
        height={412}
        src="/Image/serviceItem/2.svg"
        alt="product_image"
      />
      <div className="md:max-w-[520px]">
        <span className="text-[#5677E1] text-[10px] font-medium rounded-[8px] px-[16px] py-[8px] bg-[#0c111f]">Artificial Intelligence</span>
        <div className="mt-[29px] mb-[5px]">
        <p className=" text-[24px] md:text-[32px] font-bold md:leading-[41px] tracking-[0.96px] capitalize">
          Drive Your Business Forward with CloudPro AI's Advanced AI Services 
        </p>
        </div>
        <p className="text-[#B5B5B5] mt-2 mb-[24px] text-[14px] md:text-[16px] md:leading-[28px]">
          Welcome to CloudPro AI Services Category, where artificial
          intelligence drives transformative change. Our AI Services are
          designed to empower businesses with cutting-edge AI solutions,
          enabling them to stay ahead in a rapidly evolving technological
          landscape. 
        </p>

        <Link href='/contact?action=message' className=" text-[14px] px-[16px] py-[12px] rounded-[8px] bg-white text-black">Speak to an Expert</Link>
      </div>
    </div>
   </div>
  )
}

export default Introduction