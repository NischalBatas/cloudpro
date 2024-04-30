import React from "react";

const Introduction = () => {
  return (
    <div className="lg:pb-16 relative w-full h-[400px] lg:h-[705px] z-20">
      <div
        className="w-full absolute bg-no-repeat bg-center bg-cover  h-[400px] lg:h-[705px] z-10"
        style={{
          filter: "blur(2px)",
          zIndex: "-1",
          backgroundImage: "url('/Image/about.svg')",
        }}
      >   </div>
        <div className="hidden lg:flex gap-4 bg-[#080808] p-4 w-[90%] lg:w-[60%] mx-4 rounded-md"
        style={{position: "absolute",
            top: "100%",
            // bottom:'-10%',
            left: "50%",
            transform: "translate(-50%, -50%)"}}
        >
          <div>
            <p className="uppercase text-cloud text-[14px]">About Us</p>
            <p className="text-[40px] font-semibold">Innovation is in our DNA.</p>
            <p className="text-[14px]">Get in Touch</p>
          </div>

          <div>
            <p className="text-[14px] max-w-[790px]">
              At Cloud Pro AI, we are driven by a passion for innovation and a
              commitment to empowering businesses through cutting-edge cloud
              solutions. Our journey began with a vision to redefine the
              landscape of artificial intelligence and data engineering,
              providing our clients with unparalleled services that propel them
              toward success. With a dedicated team of experts, we navigate the
              complexities of cloud architecture, data lakes, and machine
              learning to deliver comprehensive solutions tailored to meet the
              unique needs of each client. We pride ourselves on fostering a
              culture of excellence, continuous learning, and client-centricity.
              At Cloud Pro AI, we don't just provide services; we forge
              partnerships, turning visions into reality and aspirations into
              achievements. Join us on a transformative journey where the
              possibilities are limitless, and the future is powered by
              innovation.
            </p>
          </div>
        </div>
   
    </div>
  );
};

export default Introduction;
