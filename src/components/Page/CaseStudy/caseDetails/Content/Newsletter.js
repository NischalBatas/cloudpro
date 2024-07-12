import React from 'react'
import NewsletterForm from './NewsletterForm/NewsletterForm'

const Newsletter = ({contentType,contentTitle,contentCategory}) => {
  return (
 
      
    <div
  className="navbar-main flex flex-col justify-center min-h-[250px] md:h-[399px] bg-[#101012]  bg-no-repeat bg-center bg-cover"
  style={{
    // filter: "blur(2px)",
    zIndex: "-1",
    // backgroundImage: "url('/Image/casestudy/am.svg')",
  }}
>
      <div className="flex  flex-col md:justify-center md:items-center py-5">
      <span className="font-bold text-[32px] max-w-[479px]">Get Notified by our newsletter</span>
      <p className="mt-[8px] text-[16px] leading-6 md:text-center max-w-[488px]">
        Subscribe to our newsletter and stay upto date with the latest news,
        updates and exclusive offers. Get valuable insights.
      </p>
      {/* <div className="flex flex-wrap justify-between mt-6 border-[1px] p-1 rounded-[9px] border-[#d2d2d2]">
        <input className="bg-transparent text-[14px] leading-6 pl-2 placeholder-white  md:w-[290px]" placeholder="Enter your email"/>
        <button className="bg-black px-3 md:px-5 py-2 rounded-[10px] text-[14px]">Subscribe</button>
       
      </div> */}
      <NewsletterForm contentType={contentType} contentTitle={contentTitle} contentCategory={contentCategory}/>
      </div>
    </div>
  
 
  )
}

export default Newsletter