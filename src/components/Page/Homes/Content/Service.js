import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="navbar-main bg-cloudbg2 py-8 px-1">
      <p className="text-2xl font-semibold w-80">
        We Provide Best Cloud Services
      </p>
      <div className="grid grid-cols-3 mt-10 gap-5 lg:gap-10 place-content-stretch">
        <div className="bg-white p-4 rounded-md" >
          <div className="relative mb-5">
            <Image
              width={100}
              height={100}
              src="/Image/process/cloudbg.svg"
              alt="cloud"
              className="w-full"
            />
            <Image
              width={100}
              height={100}
              src="/Image/process/cloud1.svg"
              className="absolute"
              alt="cloud"
              style={{
                width: "175px",
                height: "113.75px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
          <div>
            <p className="text-cloud text-xl font-semibold">
              Cloud Engineering Services
            </p>
            <p className="text-cloud3 text-sm py-2">
              Cloud engineering services encompass the strategic planning,
              implementation, and management
            </p>
          </div>

          <button className="bg-cloudBtn2 border text-sm font-medium px-2 py-1 float-right rounded mt-3">
            View More
          </button>
        </div>
        <div className="col-span-2 bg-white p-4 rounded-md">
          <div>
            <button className="bg-cloudBtn2 border text-sm font-medium px-2 py-1 float-right rounded">
              View More
            </button>
            <p className="text-cloud text-xl font-semibold">
              Generative AI And ML
            </p>
            <p className="text-cloud3 text-sm py-2 w-10/12">
              Unlock the Power of Intelligent Creation with CloudPro AI In the
              era of data-driven innovation, Generative Artificial Intelligence
              (AI)
            </p>
          </div>

          <div className="relative mt-5">
            <Image
              width={100}
              height={100}
              src="/Image/process/cloudbg.svg"
              alt="cloud"
              className="w-full h-52"
            />
            <Image
              width={100}
              height={100}
              src="/Image/process/cloud2.svg"
              className="absolute"
              alt="cloud"
              style={{
                width: "464px",
                height: "193px",
                top: "69%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
        <div className="bg-white p-4 rounded-md">
      <div className="flex justify-end">
      <button className="bg-cloudBtn2 border text-sm font-medium px-2 py-1 mb-2 rounded">
              View More
            </button>
      </div>
          <div>
           
            <p className="text-cloud text-xl font-semibold">Data Engineering</p>
            <p className="text-cloud3 text-sm py-2 pb-5">
              Data engineering services encompass the design, development, and
              management of robust data architecture
            </p>
          </div>

          <div className="relative">
            <Image
              width={100}
              height={100}
              src="/Image/process/cloudbg.svg"
              alt="cloud"
              className="w-full"
            />
            <Image
              width={100}
              height={100}
              src="/Image/process/cloud4.svg"
              className="absolute"
              alt="cloud"
              style={{
                width: "258px",
                height: "136px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
        <div className="bg-white p-4 rounded-md">
          <button className="bg-cloudBtn2 border text-sm font-medium px-2 py-1 mb-3 float-right rounded">
            View More
          </button>
          <div className="relative mb-5">
            <Image
              width={100}
              height={100}
              src="/Image/process/cloudbg.svg"
              alt="cloud"
              className="w-full"
            />
            <Image
              width={100}
              height={100}
              src="/Image/process/cloud1.svg"
              className="absolute"
              alt="cloud"
              style={{
                width: "175px",
                height: "113.75px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
          <div>
            <p className="text-cloud text-xl font-semibold">
              BI & Data Analytics
            </p>
            <p className="text-cloud3 text-sm py-2">
              Business Intelligence (BI) and Data Analytics services are
              critical for organizations aiming to harness the power of data.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md">
          <div className="relative mb-5">
            <Image
              width={100}
              height={100}
              src="/Image/process/cloudbg.svg"
              alt="cloud"
              className="w-full"
            />
            <Image
              width={100}
              height={100}
              src="/Image/process/cloud1.svg"
              className="absolute"
              alt="cloud"
              style={{
                width: "175px",
                height: "113.75px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
          <div>
            <p className="text-cloud text-xl font-semibold">
              AI Powered Web/APP Development
            </p>
            <p className="text-cloud3 text-sm py-2">
              In the ever-evolving AI landscape, web applications stand as the
              cornerstone of innovation, offering dynamic and.
            </p>
          </div>

          <button className="bg-cloudBtn2 border text-sm font-medium px-2 py-1 float-right rounded">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
