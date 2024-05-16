"use client"
import { caseStudy } from "@/db/casestudy/casestudy";
import Link from "next/link";
import React, { useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./casestudy.css";
import { motion,useInView } from "framer-motion";
import { GET_CASE_STUDY } from "@/components/container/graphql/queries/getCaseStudy";
import { useQuery } from "@apollo/client";
import Loading from "./Loading";
import Newsletter from "./caseDetails/Content/Newsletter";

const CaseStudy = () => {
  const {loading,error,data}=useQuery(GET_CASE_STUDY)
  if (error) return <p>Error: {error.message}</p>;

  // if (!data || !data.caseStudies || !data.caseStudies.edges) {
  //     return <p>No data available.</p>;
  // }
  console.log(data)

  return (
   <>
   {data ? 
    <div className="">
    <div className="h-[420px] md:h-[504px]  pt-12 pb-12 text-center  flex flex-col justify-center items-center">
      <p className="text-[32px] md:text-[48px] font-bold">Case Studies</p>
      <p className="py-2 md:p-0 text-[12px] md:text-[14px] md:leading-6 max-w-[514px] text-[#bebebe]">
        We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
        Business and Infrastructure Readiness for the Ultimate Technological
        Leap.
      </p>
    </div>

    <div className="navbar-main bg-white ">
      <div className="main-container relative bottom-28  grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-y-8 my-6">
        {data.caseStudies.edges.map((item, index) => {
          return (
         <div  key={index}>
             <Link href={`/casestudy/${item.node.slug}`} className="">
              <div
               
                className="md:max-w-[324px] casestudy_product_container"
              >
                <div
                  className="h-[202px] md:max-w-[324px] relative  bg-no-repeat bg-cover rounded-lg"
                  style={{
                    backgroundImage: `url(${item.node.casestudyfieldgroud.caseStudyImage.node.sourceUrl})`,
                  }}
                >
                  <div className="flex justify-between  px-4 pt-4  ">
                    <div className="text-white text-base  font-medium w-44">
                      {item.node.casestudyfieldgroud.caseStudySectorDescription}
                    </div>
                    <div className="casestudy_product_arrow">
                      <MdOutlineArrowOutward className="casestudy_product_arrow_icon rounded-full  w-6 h-6 text-xs p-1" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 items-center text-xs mt-3 text-white">
                  <div className="bg-cloud px-2 rounded-full py-1">
                    {item.node.casestudyfieldgroud.caseStudySector}
                  </div>
                  <div className="text-[10px] text-[#909090] tracking-wider">
                    {item.node.casestudyfieldgroud.readTime} Read
                  </div>
                </div>

                <div className="my-4">
                  <div className="casestudy_product_title font-semibold text-[16px] text-[#000]">
                    {item.node.title}
                  </div>
                  <div className="casestudy_product_description mt-2 text-[14px] text-[#666666] leading-6">
                    {item.node.casestudyfieldgroud.introduction}
                  </div>
                </div>
              </div>
            </Link>
         </div>
          );
        })}
      </div>
    </div>

    <Newsletter/>


  </div>
  : (<Loading/>)}
   </>
  );
};

export default CaseStudy;

// "use client"
// import { caseStudy } from "@/db/casestudy/casestudy";
// import Link from "next/link";
// import React, { useRef } from "react";
// import { MdOutlineArrowOutward } from "react-icons/md";
// import "./casestudy.css";
// import { motion,useInView } from "framer-motion";

// const CaseStudy = () => {
//   const ref=useRef(null)
//   const isInView=useInView(ref,{once:true})

//   const container={
//     hidden:{opacity:0},
//     visible:{
//       opacity:1,
//       scale:1,
//       transition:{
//         delayChildren:0.1,
//         staggerChildren:0.3
//       }
//     }
//   }

//   const items={
//     hidden:{opacity:0},
//     visible:{opacity:1}
//   }
//   return (
//     <div className="">
//       <div className="h-[420px] md:h-[504px]  pt-12 pb-12 text-center  flex flex-col justify-center items-center">
//         <p className="text-[32px] md:text-[48px] font-bold">Case Studies</p>
//         <p className="py-2 md:p-0 text-[12px] md:text-[14px] md:leading-6 max-w-[514px] text-[#bebebe]">
//           We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
//           Business and Infrastructure Readiness for the Ultimate Technological
//           Leap.
//         </p>
//       </div>

//       <div className="navbar-main bg-white ">
//         <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? "visible" : "hidden"} className="main-container relative bottom-28  grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-y-8 my-6">
//           {caseStudy.map((item, index) => {
//             return (
//            <motion.div  key={index} variants={items}>
//                <Link href={`/casestudy/${item.id}`} className="">
//                 <div
                 
//                   className="md:max-w-[324px] casestudy_product_container"
//                 >
//                   <div
//                     className="h-[202px] md:max-w-[324px] relative  bg-no-repeat bg-cover rounded-lg"
//                     style={{
//                       backgroundImage: `url(${item.image})`,
//                     }}
//                   >
//                     <div className="flex justify-between  px-4 pt-4  ">
//                       <div className="text-white text-base  font-medium w-44">
//                         {item.sector}
//                       </div>
//                       <div className="casestudy_product_arrow">
//                         <MdOutlineArrowOutward className="casestudy_product_arrow_icon rounded-full  w-6 h-6 text-xs p-1" />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex gap-2 items-center text-xs mt-3 text-white">
//                     <div className="bg-cloud px-2 rounded-full py-1">
//                       {item.category}
//                     </div>
//                     <div className="text-[10px] text-[#909090] tracking-wider">
//                       {item.published}
//                     </div>
//                   </div>

//                   <div className="my-4">
//                     <div className="casestudy_product_title font-semibold text-[16px] text-[#000]">
//                       {item.title}
//                     </div>
//                     <div className="casestudy_product_description mt-2 text-[14px] text-[#666666] leading-6">
//                       {item.description}
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//            </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>


//     </div>
//   );
// };

// export default CaseStudy;