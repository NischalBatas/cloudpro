"use client"
import React, { useEffect } from "react";

import BreadCrumb from "./Content/BreadCrumb";
import Introduction from "./Content/Introduction";
import BannerOne from "./Content/BannerOne";
import Solution from "./Content/Solution";
import { solution1 } from "@/db/casestudy/content/solution";
import CaseStudyContent from "./Content/CaseStudyContent";
import { caseStudy } from "@/db/casestudy/casestudy";
import Conclusion from "./Content/Conclusion";
import BannerTwo from "./Content/BannerTwo";
import Technology from "./Content/Technology/Technology";
import { impactAndResult1 } from "@/db/casestudy/content/impactAndResult";
import { technology1 } from "@/db/casestudy/content/technology";
import Link from "next/link";
import Tabs from "./Content/Tabs";
      

const CaseDetails = () => {
  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();

      const targetId = e.target.getAttribute('href').substring(1); // Remove the '#'
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const margin = 50; // Adjust this value as requirement
        window.scrollTo({
          top: targetElement.offsetTop - margin,
          behavior: 'smooth'
        });
      }
    };

    const anchors = document.querySelectorAll('.tabs_main_service a');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []); //
  return (
    <div>
      <BreadCrumb />
      <Tabs/>
      <Introduction />
      <BannerOne />
      <Solution content={solution1} />
      <Technology content={technology1}/>
      <BannerTwo content={impactAndResult1}/>
      <Conclusion />

      <div className="line-between-content w-full h-[1px] bg-[#F2F2F2]"></div>
      <CaseStudyContent content={caseStudy} />
    </div>
  );
};

export default CaseDetails;
