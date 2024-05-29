import IndustriesSliderTab from '@/components/SplideSlider/IndustriesSliderTab'
import Link from 'next/link'
import React from 'react'
import '../industriesDetail.css'
const IndustriesTab = ({item}) => {
  return (
    <div className='main-tabs navbar-main bg-[#121315] fixed top-[50px] md:top-[60px] w-full z-[998]'>
        <div className='main-container2 flex  flex-nowrap gap-[24px] items-center whitespace-nowrap text-nowrap  '>
        <span className='uppercase text-[#5677E1] text-[14px] font-semibold tracking-[0.39px]'>Industries</span>      
<div>
<div className='h-[32px] w-[1px] bg-[#4661B9] block'></div>
</div>
        {/* <ul className='flex justify-between  overflow-y-scroll  w-full gap-[32px] text-[#83858B]  uppercase text-[12px] tracking-[0.12px] pt-[18px]'>
            <li className='text-[#fff] font-semibold border-b-[3px] h-[35px]'><Link href='/'>E-commerce</Link></li>
            <li className='hover:text-[#fff]'><Link href='/'>Retail</Link></li>
            <li className='hover:text-[#fff]'><Link href='/'>Fintech/Banking</Link></li>
            <li className='hover:text-[#fff]'><Link href='/'>Edtech</Link></li>
            <li className='hover:text-[#fff]'><Link href='/'>Manufacturing</Link></li>
            <li className='hover:text-[#fff]'><Link href='/'>Construction</Link></li>
            <li className='hover:text-[#fff]'><Link href='/'>Technology</Link></li>
            <li className='hover:text-[#fff]'><Link href='/'>Energy</Link></li>
            <li className='hover:text-[#fff]'><Link href='/'>Security</Link></li>
        </ul> */}
<IndustriesSliderTab itemId={item}/>
        
        </div>
    </div>
  )
}

export default IndustriesTab