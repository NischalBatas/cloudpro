import React from 'react'

const Newsletter = () => {
  return (
    <div>
      
    <div
  className="navbar-main flex flex-col justify-center min-h-[250px] md:h-[399px]  bg-no-repeat bg-center bg-cover"
  style={{
    // filter: "blur(2px)",
    zIndex: "-1",
    backgroundImage: "url('/Image/casestudy/am.svg')",
  }}
>
      <div className="flex flex-col md:justify-center md:items-center py-5">
      <span className="font-semibold text-[24px] leading-8">Get Notification by our newsletter</span>
      <p className="mt-2 text-[14px] leading-6 md:text-center max-w-[456px]">
        Subscribe to our newsletter and stay upto date with the latest news,
        updates and exclusive offers. Get valuable insights.
      </p>
      <div className="flex flex-wrap justify-between mt-6 border-[1px] p-1 rounded-[9px] border-[#d2d2d2]">
        <input className="bg-transparent text-[14px] leading-6 pl-2 placeholder-white  md:w-[290px]" placeholder="Enter your email"/>
        <button className="bg-black px-3 md:px-5 py-2 rounded-[10px] text-[14px]">Subscribe</button>
      </div>
      </div>
    </div>
  
  </div>
  )
}

export default Newsletter