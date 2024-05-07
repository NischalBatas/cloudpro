import React from 'react'

const BannerTwo = () => {
  return (
    <div
    className="flex flex-col items-center justify-center text-center h-[250px] md:h-[315px]  bg-no-repeat bg-center bg-cover"
    style={{
      // filter: "blur(2px)",
      zIndex: "-1",
      backgroundImage: "url('/Image/casestudy/ga.svg')",
    }}
  >

   <p className="mb-10 tracking-wider uppercase pb-2 text-[14px] border-b-[1px] border-[#b4b4b4]">Impact and Results</p>
    <p className="max-w-[589px] font-bold text:[24px] md:text-[32px] md:leading-[48px]">
    Streamlined data management, reducing manual processes by 60%.
    </p>
   
  </div>
  )
}

export default BannerTwo