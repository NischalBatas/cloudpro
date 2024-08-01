import Image from "next/image";
import React from "react";
import Blog from "./BlogItems/Blog";

import Footer from "../Footer/Footer";

const BlogTemp = () => {
  return (
    <div>
      <div className="h-[473px] bg-[#4D73EB]  pt-12 pb-12 text-center  flex flex-col justify-center items-center">
        <Image
          width={250}
          height={250}
          src="/Image/logo/logo-white.svg"
          alt="logo"
        />
      </div>

      <div className="navbar-main bg-white">
        <div className="main_container5 relative bottom-48 ">
          <div
            className="h-[502px] relative  bg-no-repeat bg-cover rounded-[16px]"
            style={{
              backgroundImage: `url(/Image/emailtemp/2.svg)`,
            }}
          >
            <div className="flex flex-col h-full justify-end  px-8 pt-4  ">
            <div className="pb-6 max-w-[420px]">
                          <div className=" font-semibold text-[20px] text-[#fff]">
                            Navigating Modern Cyber Threats: Protecting Your Digital Assets
                          </div>
                          <div className="blogs_product_description mt-1 text-[15px] text-[#c6c8c9] leading-6">
                            Explore the latest in cyber threats and cybersecurity strategies. From ransomware to state-sponsored hacking, learn how to protect your digital assets in an evolving
                          </div>
                        </div>
            </div>
          </div>

          <div className="mt-[121px]">
            <div className="text-center text-[#000] text-[24px] font-bold  mb-[25px]">
              <p>FEATURED ARTICLES</p>
            </div>
            <Blog />
          </div>
        </div>
      </div>
     
      <Footer/>
    </div>
  );
};

export default BlogTemp;
