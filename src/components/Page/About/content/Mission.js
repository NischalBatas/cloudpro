import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <div className="navbar-main bg-white pt-[2rem] lg:pt-[14rem] pb-16" >
      <div className="main-container flex justify-between gap-6 lg:gap-8 flex-wrap lg:flex-nowrap">
        <div>
          <p className="text-cloud uppercase text-[14px]">Our Mission</p>
          <p className="text-[32px] font-bold leading-9 text-[#080808] mt-2 mb-3 max-w-[376px]">
            Your success is our mission
          </p>
          <p className="text-[14px] text-[#080808] lg:max-w-[498px]">
            In the ever-evolving landscape of technology, businesses face the
            constant challenge of staying ahead in a digital world. At our
            consulting firm, we understand the importance of innovation and
            adaptation. With a dedicated focus on data engineering, cloud
            engineering, web app development, AI, Machine Learning, and
            Generative AI services, our mission is clear: to empower
            organizations to harness the transformative power of technology. We
            provide tailored solutions that not only address current needs but
            also prepare clients for future challenges. Through expertise,
            collaboration, and a commitment to excellence, we strive to help our
            clients thrive in an increasingly competitive and data-driven
            environment. Our mission is to be at the forefront of technological
            advancement and provide top-notch services that empower businesses
            to innovate, grow, and succeed. We exist to empower organizations
            with the tools and expertise they need to thrive in a data-centric
            world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 justif gap-4">
          <div className="p-4 max-w-[295px] max-h-[295px] bg-cloud rounded flex flex-col items-center">
            <Image
              width={120}
              height={120}
              src="/Image/inno.svg"
              alt="mission_image"
            />
            <p className="text-[14px] mt-3">Innovative Solutions</p>
          </div>

          <div className="p-5 max-w-[295px] max-h-[295px] bg-cloud rounded flex flex-col items-center">
            <Image
              width={120}
              height={120}
              src="/Image/target.svg"
              alt="mission_image"
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
            <p className="text-[14px] mt-3">Client-Centric Approach</p>
          </div>

          <div className="p-5 max-w-[295px] max-h-[295px] bg-cloud rounded flex flex-col items-center">
            <Image
              width={120}
              height={120}
              src="/Image/target.svg"
              alt="mission_image"
            />
            <p className="text-[14px] mt-3">Innovative Solutions</p>
          </div>

          <div className="p-5 max-w-[295px] max-h-[295px] bg-cloud rounded flex flex-col items-center">
            <Image
              width={120}
              height={120}
              src="/Image/inno.svg"
              alt="mission_image"
            />
            <p className="text-[14px] mt-3">Innovative Solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
