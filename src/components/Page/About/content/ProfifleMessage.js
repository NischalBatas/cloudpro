import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
const ProfifleMessage = () => {
  return (
    <div className="navbar-main my-20 mb-28">
      <div className="main-container bg-[#0E0E1A] p-8 flex items-center justify-center md:justify-start flex-wrap md:flex-nowrap gap-8  rounded-md  m-auto">
        <div className="relative min-w-[210px] lg:min-w-[232px] h-[240px] lg:h-[260px]">
          <div
            className=" absolute top-2 left-2 min-w-[210px] lg:w-[232px] h-[240px] lg:h-[260px] bg-cloud rounded"
            style={{ zIndex: "1" }}
          ></div>
          <div className=" w-full">
            <Image
              className="relative rounded-md min-w-[210px] lg:w-[232px] h-[240px] lg:h-[260px]"
              width={232}
              height={260}
              src="/Image/profile.svg"
              alt="profile_pic"
              style={{ zIndex: "2" }}
            />
          </div>
        </div>

        <div className="col-span-2">
          <p className="font-bold text-[32px]">Message From CEO</p>
          <p className="text-[12px] lg:text-[14px] text-[#AFAFB5] mt-2 ">
            With over a decade of experience in the IT industry, I bring a
            wealth of knowledge in diverse domains to my role. My focus is on
            innovation, especially in harnessing Data and AI technologies. This
            expertise is crucial in developing cutting-edge software products
            that keep our clients at the forefront of the digital landscape. I
            am deeply passionate about using data for effective decision-making.
            In leading our team, I emphasize creativity and technical
            excellence, constantly pushing the boundaries in AI and software
            development. This approach fosters a culture where breakthroughs are
            not just possible, but expected.
          </p>
          <div className="mt-4 flex justify-between items-center">
            <div>
            <p className="font-semibold text-[14px]">Nimesh Kuinkel</p>
            <p className="font-medium uppercase text-[#5677E1] text-[14px]">
              CEO & Founder
            </p>
            </div>

            <div className="bg-[#171b33] p-2 rounded-full">
            <FaLinkedin className=" "/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfifleMessage;
