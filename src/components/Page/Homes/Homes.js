import React from "react";
import Introduction from "./Content/Introduction";
import Partners from "./Content/Partners";
import Service from "./Content/Service";
import Features from "./Content/Features";
import Industries from "./Content/Industries";
import Image from "next/image";
import Testominial from "./Content/Testominial";
import Results from "../About/content/Results";
import CaseStudy from "./Content/CaseStudy";
import Product from "./Content/Product";
import Footer from "./Content/Footer/Footer";


const Homes = () => {
  return (
    <div>
      {/* <div className="bg-cloud line-svg" style={{width:'20px', height:'20px'}}></div>
      <svg width="786" height="681" viewBox="0 0 786 681" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1272_988)">
<path d="M85 0H0V299H85V0Z" fill="url(#paint0_linear_1272_988)"/>
<path d="M185 0H101V353H185V0Z" fill="url(#paint1_linear_1272_988)"/>
<path d="M284 0H200V478H284V0Z" fill="url(#paint2_linear_1272_988)"/>
<path d="M384 0H300V586H384V0Z" fill="url(#paint3_linear_1272_988)"/>
<path d="M485 0H401V586H485V0Z" fill="url(#paint4_linear_1272_988)"/>
<path d="M585 0H501V478H585V0Z" fill="url(#paint5_linear_1272_988)"/>
<path d="M685 0H601V353H685V0Z" fill="url(#paint6_linear_1272_988)"/>
<path d="M786 0H701V299H786V0Z" fill="url(#paint7_linear_1272_988)"/>
<line x1="0.5" y1="2.18561e-08" x2="0.499987" y2="299" stroke="url(#paint8_linear_1272_988)"/>
<line x1="84.5" y1="2.18561e-08" x2="84.5" y2="299" stroke="url(#paint9_linear_1272_988)"/>
<line x1="101.5" y1="2.18561e-08" x2="101.5" y2="353" stroke="url(#paint10_linear_1272_988)"/>
<line x1="200.5" y1="2.18561e-08" x2="200.5" y2="478" stroke="url(#paint11_linear_1272_988)"/>
<line x1="300.5" y1="2.18561e-08" x2="300.5" y2="586" stroke="url(#paint12_linear_1272_988)"/>
<line x1="184.5" y1="2.18561e-08" x2="184.5" y2="353" stroke="url(#paint13_linear_1272_988)"/>
<line x1="283.5" y1="2.18561e-08" x2="283.5" y2="478" stroke="url(#paint14_linear_1272_988)"/>
<line x1="383.5" y1="2.18561e-08" x2="383.5" y2="586" stroke="url(#paint15_linear_1272_988)"/>
<line x1="484.5" y1="2.18561e-08" x2="484.5" y2="586" stroke="url(#paint16_linear_1272_988)"/>
<line x1="501.5" y1="2.18561e-08" x2="501.5" y2="478" stroke="url(#paint17_linear_1272_988)"/>
<line x1="584.5" y1="2.18561e-08" x2="584.5" y2="478" stroke="url(#paint18_linear_1272_988)"/>
<line x1="601.5" y1="2.18561e-08" x2="601.5" y2="353" stroke="url(#paint19_linear_1272_988)"/>
<line x1="701.5" y1="2.18561e-08" x2="701.5" y2="299" stroke="url(#paint20_linear_1272_988)"/>
<line x1="684.5" y1="2.18561e-08" x2="684.5" y2="353" stroke="url(#paint21_linear_1272_988)"/>
<line x1="785.5" y1="2.18561e-08" x2="785.5" y2="299" stroke="url(#paint22_linear_1272_988)"/>
<line x1="401.5" y1="2.18561e-08" x2="401.5" y2="586" stroke="url(#paint23_linear_1272_988)"/>
<path opacity="0.32" d="M764 310C764 514.898 597.898 681 393 681C188.102 681 22 514.898 22 310C22 105.102 188.102 2.5 393 2.5C597.898 2.5 764 105.102 764 310Z" fill="url(#paint24_radial_1272_988)"/>
</g>
<defs>
<linearGradient id="paint0_linear_1272_988" x1="42.5" y1="-0.410383" x2="42.5" y2="299.41" gradientUnits="userSpaceOnUse">
<stop stop-color="#5B7FF0" stop-opacity="0.18"/>
<stop offset="1" stop-color="#0A0B26" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_1272_988" x1="143.001" y1="-0.410288" x2="143.001" y2="353.41" gradientUnits="userSpaceOnUse">
<stop stop-color="#5B7FF0" stop-opacity="0.18"/>
<stop offset="1" stop-color="#0A0B26" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_1272_988" x1="242" y1="-0.410106" x2="242" y2="478.41" gradientUnits="userSpaceOnUse">
<stop stop-color="#5B7FF0" stop-opacity="0.18"/>
<stop offset="1" stop-color="#0A0B26" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_1272_988" x1="342" y1="-0.410043" x2="342" y2="586.41" gradientUnits="userSpaceOnUse">
<stop stop-color="#5B7FF0" stop-opacity="0.18"/>
<stop offset="1" stop-color="#0A0B26" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_1272_988" x1="443" y1="-0.410043" x2="443" y2="586.41" gradientUnits="userSpaceOnUse">
<stop stop-color="#5B7FF0" stop-opacity="0.18"/>
<stop offset="1" stop-color="#0A0B26" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear_1272_988" x1="543.001" y1="-0.410106" x2="543.001" y2="478.41" gradientUnits="userSpaceOnUse">
<stop stop-color="#5B7FF0" stop-opacity="0.18"/>
<stop offset="1" stop-color="#0A0B26" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_1272_988" x1="643" y1="-0.410288" x2="643" y2="353.41" gradientUnits="userSpaceOnUse">
<stop stop-color="#5B7FF0" stop-opacity="0.18"/>
<stop offset="1" stop-color="#0A0B26" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_1272_988" x1="743.5" y1="-0.410383" x2="743.5" y2="299.41" gradientUnits="userSpaceOnUse">
<stop stop-color="#5B7FF0" stop-opacity="0.18"/>
<stop offset="1" stop-color="#0A0B26" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint8_linear_1272_988" x1="-0.5" y1="-2.18561e-08" x2="-0.500013" y2="299" gradientUnits="userSpaceOnUse">
<stop stop-color="#5677E1" stop-opacity="0.09"/>
<stop offset="1" stop-color="#5677E1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint9_linear_1272_988" x1="83.5" y1="-2.18561e-08" x2="83.5" y2="299" gradientUnits="userSpaceOnUse">
<stop stop-color="#5677E1" stop-opacity="0.09"/>
<stop offset="1" stop-color="#5677E1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint10_linear_1272_988" x1="100.5" y1="-2.18561e-08" x2="100.5" y2="353" gradientUnits="userSpaceOnUse">
<stop stop-color="#5677E1" stop-opacity="0.09"/>
<stop offset="1" stop-color="#5677E1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint11_linear_1272_988" x1="199.5" y1="-2.18561e-08" x2="199.5" y2="478" gradientUnits="userSpaceOnUse">
<stop stop-color="#5677E1" stop-opacity="0.09"/>
<stop offset="1" stop-color="#5677E1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint12_linear_1272_988" x1="299.5" y1="-2.18561e-08" x2="299.5" y2="586" gradientUnits="userSpaceOnUse">
<stop stop-color="#5677E1" stop-opacity="0.09"/>
<stop offset="1" stop-color="#5677E1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint13_linear_1272_988" x1="183.5" y1="-2.18561e-08" x2="183.5" y2="353" gradientUnits="userSpaceOnUse">
<stop stop-color="#5677E1" stop-opacity="0.09"/>
<stop offset="1" stop-color="#5677E1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint14_linear_1272_988" x1="282.5" y1="-2.18561e-08" x2="282.5" y2="478" gradientUnits="userSpaceOnUse">
<stop stop-color="#5677E1" stop-opacity="0.09"/>
<stop offset="1" stop-color="#5677E1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint15_linear_1272_988" x1="382.5" y1="-2.18561e-08" x2="382.5" y2="586" gradientUnits="userSpaceOnUse">
<stop stop-color="#5677E1" stop-opacity="0.09"/>
<stop offset="1" stop-color="#5677E1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint16_linear_1272_988" x1="483.5" y1="-2.18561e-08" x2="483.5" y2="586" gradientUnits="userSpaceOnUse">
<stop stop-color="#5677E1" stop-opacity="0.09"/>
<stop offset="1" stop-color="#5677E1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint17_linear_1272_988" x1="500.5" y1="-2.18561e-08" x2="500.5" y2="478" gradientUnits="userSpaceOnUse">
<stop stop-color="#5677E1" stop-opacity="0.09"/>
<stop offset="1" stop-color="#5677E1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint18_linear_1272_988" x1="583.5" y1="-2.18561e-08" x2="583.5" y2="478" gradientUnits="userSpaceOnUse">
<stop stop-color="#5677E1" stop-opacity="0.09"/>
<stop offset="1" stop-color="#5677E1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint19_linear_1272_988" x1="600.5" y1="-2.18561e-08" x2="600.5" y2="353" gradientUnits="userSpaceOnUse">
<stop stop-color="#5677E1" stop-opacity="0.09"/>
<stop offset="1" stop-color="#5677E1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint20_linear_1272_988" x1="700.5" y1="-2.18561e-08" x2="700.5" y2="299" gradientUnits="userSpaceOnUse">
<stop stop-color="#5677E1" stop-opacity="0.09"/>
<stop offset="1" stop-color="#5677E1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint21_linear_1272_988" x1="683.5" y1="-2.18561e-08" x2="683.5" y2="353" gradientUnits="userSpaceOnUse">
<stop stop-color="#5677E1" stop-opacity="0.09"/>
<stop offset="1" stop-color="#5677E1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint22_linear_1272_988" x1="784.5" y1="-2.18561e-08" x2="784.5" y2="299" gradientUnits="userSpaceOnUse">
<stop stop-color="#5677E1" stop-opacity="0.09"/>
<stop offset="1" stop-color="#5677E1" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint23_linear_1272_988" x1="400.5" y1="-2.18561e-08" x2="400.5" y2="586" gradientUnits="userSpaceOnUse">
<stop stop-color="#5677E1" stop-opacity="0.09"/>
<stop offset="1" stop-color="#5677E1" stop-opacity="0"/>
</linearGradient>
<radialGradient id="paint24_radial_1272_988" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(393 310) rotate(90) scale(371)">
<stop stop-color="#6083F3"/>
<stop offset="1" stop-color="#384C8D" stop-opacity="0"/>
</radialGradient>
<clipPath id="clip0_1272_988">
<rect width="786" height="681" fill="white"/>
</clipPath>
</defs>
</svg> */}

      <Introduction />
      <Partners />
      <Service />
      {/* <Features /> */}
      <Industries />
      <Testominial />
      {/* <Results /> */}
      <CaseStudy />
      <Product/>
     
      {/* <div className="my-10 relative m-auto w-96">
        <div className="bg-cloud line-svg" style={{width:'20px', height:'20px'}}></div>
        <svg width="194" height="93">
        <path d="M1 0.5V45.5C1 54.3366 8.16344 61.5 17 61.5H177C185.837 61.5 193 68.6634 193 77.5V93" stroke="#242424" fill="none"/>

        </svg>
      </div>

      <div className="my-10 relative m-auto w-96">
        <div className="bg-cloud lines-svg" style={{width:'100px', height:'20px'}}></div>
     
      </div> */}
    </div>
  );
};

export default Homes;
