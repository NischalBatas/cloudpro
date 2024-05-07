import Link from 'next/link';
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md';
import '../../casestudy.css'
const CaseStudyContent = ({content}) => {
    const contents=content.slice(0,3)
  return (
    <div className="navbar-main bg-white py-20">
    <div className='main-container'>
    <div><p className='font-semibold text-[24px] text-black'>You may also like</p></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-y-8 my-6">
      {contents.map((item, index) => {
        return (
          <Link href='/casestudy/1' className="">
            <div key={index} className="md:max-w-[324px] casestudy_product_container">
              <div
                className="h-[202px] md:max-w-[324px] relative  bg-no-repeat bg-cover rounded-lg"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="flex justify-between  px-4 pt-4  ">
                  <div className="text-white text-base  font-medium w-44">
                    {item.sector}
                  </div>
                  <div className="casestudy_product_arrow">
                  <MdOutlineArrowOutward className="casestudy_product_arrow_icon rounded-full  w-6 h-6 text-xs p-1" />
                </div>
                </div>
              </div>

              <div className="flex gap-2 items-center text-xs mt-3 text-white">
                <div className="bg-cloud px-2 rounded-full py-1">
                  {item.category}
                </div>
                <div className="text-[10px] text-[#909090] tracking-wider">
                  {item.published}
                </div>
              </div>

              <div className="my-4">
                <div className="casestudy_product_title font-semibold text-[16px] text-[#000]">
                  {item.title}
                </div>
                <div className="casestudy_product_description mt-2 text-[14px] text-[#666666] leading-6">
                  {item.description}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
    </div>
  </div>
  )
}

export default CaseStudyContent