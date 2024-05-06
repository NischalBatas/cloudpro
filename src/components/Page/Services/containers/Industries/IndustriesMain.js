import React from 'react'
import IndustriesItem from './IndustriesItem'

const IndustriesMain = () => {
  return (
    <div className="navbar-main bg-[#EDF6FF] py-10 ">
    <div className="main-container flex flex-wrap items-center justify-between">
 <div className="max-w-[417px]">
   <p className="font-bold text-[#071518] text-[36px] leading-10">Impact Across Industries.</p>
   <p className="text-[16px] text-[#393939] mt-4">
     Our tailored solutions spans across diverse industries and has
     impacted multiple businesses. Know how it can help your business grow.
   </p>
 </div>
<IndustriesItem/>
 </div>
</div>
  )
}

export default IndustriesMain