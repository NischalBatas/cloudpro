"use client"
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const IntroductionMain = ({content}) => {
  const router = useRouter();
  const onHandleSubmit = (path) => {
    router.push(path);
  };
  return (
    <div className="pb-16 relative w-full h-[680px]">
      {content.map((item, index) => {
        return (
          <>
            <div key={index}
              className="w-full absolute bg-no-repeat bg-center bg-cover h-[680px] z-10"
              style={{
                // filter: "blur(5px)",
                zIndex: "-1",
                backgroundImage: `url(${item.image})`,
              }}
            ></div>
            <div
              className="navbar-main pt-24 h-full pb-4 "
              style={{ zIndex: "11" }}
            >
              <div className="main-container flex flex-col justify-end h-full">
                <div className="service_main_path">
                  <Link href="/" className="mr-1">
                    Services
                  </Link>
                  <span className="">/ {item.path} </span>
                </div>
                <p className="text-xl md:text-2xl lg:text-4xl service_main_title">
                 {item.title}
                </p>
                <div className="service_main_description">
                  {item.description}
                </div>

                <div>
                  <button
                    onClick={() => {
                      onHandleSubmit("/contactus");
                    }}
                    className="service_main_button"
                  >
                    {item.button}
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default IntroductionMain;
