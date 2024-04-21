import Image from "next/image";
import React from "react";

const Testominial = () => {
  return (
    <div className="navbar-main py-14 testominial-main">
      <div className="testominial-main w-full md:w-8/12 lg:w-5/12">
        <div className="font-semibold text-4xl">What our client say</div>
        <div className="text-cloud3 mt-4">
          We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
          Business and Infrastructure Readiness for the Ultimate Technological
          Leap.
        </div>
      </div>

      <div className="flex gap-2 mt-8 owl-carousel owl-theme w-full ">
        <div className="testominial-items flex gap-4 bg-cloud7 p-4 rounded-md w-full">
          <Image
            width={186}
            height={269}
            src="/Image/fields/Rectangle678.jpg"
            alt="profile_image"
            style={{ width: "186px", height: "269px" }}
            className="rounded-md"
          />

          <div className="flex gap-2">
            <div className=" flex flex-col justify-between gap-4 md:gap-6 md:py-5">
              <div className=" text-sm text-cloud">
                We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
                Business and Infrastructure Readiness for the Ultimate
                Technological Leap.We're Gen AI-Ready and Eager to Collaborate.
                Let's Assess Your Business and Infrastructure Readiness for the
                Ultimate Technological Leap.
              </div>
              <div>
                <div className="font-semibold text-nowrap">Sujan Timilsina</div>
                <div className="text-cloud3 text-sm text-nowrap">
                  Founder / Stagezero
                </div>
              </div>
            </div>
            <div className="services-line hidden md:block"></div>
            <div className="flex flex-col justify-end items-center gap-4 text-nowrap">
              <div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-semibold">20%</div>
                  <div className="text-sm text-cloud3">Business Growth</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-2xl font-semibold">3000K</div>
                  <div className="text-sm text-cloud3">Daily New sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testominial-items flex gap-4 bg-cloud7 p-4 rounded-md w-full">
          <Image
            width={186}
            height={269}
            src="/Image/fields/Rectangle679.jpg"
            alt="profile_image"
            style={{ width: "186px", height: "269px" }}
            className="rounded-md"
          />

          <div className="flex gap-2">
            <div className=" flex flex-col justify-between gap-4 md:gap-6 md:py-5">
              <div className=" text-sm text-cloud">
                We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
                Business and Infrastructure Readiness for the Ultimate
                Technological Leap.We're Gen AI-Ready and Eager to Collaborate.
                Let's Assess Your Business and Infrastructure Readiness for the
                Ultimate Technological Leap.
              </div>
              <div>
                <div className="font-semibold text-nowrap">Sujan Timilsina</div>
                <div className="text-cloud3 text-sm text-nowrap">
                  Founder / Stagezero
                </div>
              </div>
            </div>
            <div className="services-line hidden md:block"></div>
            <div className="flex flex-col justify-end items-center gap-4 text-nowrap">
              <div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-semibold">20%</div>
                  <div className="text-sm text-cloud3">Business Growth</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-2xl font-semibold">3000K</div>
                  <div className="text-sm text-cloud3">Daily New sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testominial-items flex gap-4 bg-cloud7 p-4 rounded-md w-full">
          <Image
            width={186}
            height={269}
            src="/Image/fields/Rectangle678.jpg"
            alt="profile_image"
            style={{ width: "186px", height: "269px" }}
            className="rounded-md"
          />

          <div className="flex gap-2">
            <div className=" flex flex-col justify-between gap-4 md:gap-6 md:py-5">
              <div className=" text-sm text-cloud">
                We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
                Business and Infrastructure Readiness for the Ultimate
                Technological Leap.We're Gen AI-Ready and Eager to Collaborate.
                Let's Assess Your Business and Infrastructure Readiness for the
                Ultimate Technological Leap.
              </div>
              <div>
                <div className="font-semibold text-nowrap">Sujan Timilsina</div>
                <div className="text-cloud3 text-sm text-nowrap">
                  Founder / Stagezero
                </div>
              </div>
            </div>
            <div className="services-line hidden md:block"></div>
            <div className="flex flex-col justify-end items-center gap-4 text-nowrap">
              <div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-semibold">20%</div>
                  <div className="text-sm text-cloud3">Business Growth</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-2xl font-semibold">3000K</div>
                  <div className="text-sm text-cloud3">Daily New sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testominial;
