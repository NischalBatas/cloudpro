"use client"
import { useRouter } from "next/navigation";
import React from "react";

import Link from "next/link";

const IntroductionMain = ({content}) => {
  const router = useRouter();
  const onHandleSubmit = (path) => {
    router.push(path);
  };
  return (
    <div className="pb-6 md:pb-16 relative w-full h-[680px]">
 
          <div  className="w-full bg-no-repeat bg-center bg-cover h-full z-10" style={{
            // filter: "blur(5px)",
            zIndex: "-1",
            backgroundImage: `url(${content.image})`,
          }}>
            {/* <div 
              className="w-full absolute bg-no-repeat bg-center bg-cover h-full z-10"
              style={{
                // filter: "blur(5px)",
                zIndex: "-1",
                backgroundImage: `url(${content.image})`,
              }}
            ></div> */}
            <div
              className="navbar-main pt-24 h-full pb-4 "
              style={{ zIndex: "11" }}
            >
              <div className="main-container flex flex-col justify-end h-full">
                <div className="service_main_path">
                  <Link href="/" className="mr-1">
                    Services
                  </Link>
                  <span className="">/ {content.path} </span>
                </div>
                <p className="text-xl md:text-2xl lg:text-4xl service_main_title">
                 {content.title}
                </p>
                <div className="service_main_description">
                  {content.description}
                </div>

                <div>
                  <button
                    onClick={() => {
                      onHandleSubmit("/contact?action=message");
                    }}
                    className="service_main_button"
                  >
                    {content.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
  
    </div>
  );
};

export default IntroductionMain;
