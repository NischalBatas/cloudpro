import Link from 'next/link';
import React, { useRef } from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md';
import { motion, useInView } from "framer-motion";
import '../../casestudy.css'
import { GET_CASE_STUDY } from '@/components/container/graphql/queries/getCaseStudy';
import { useQuery } from '@apollo/client';
import Loading from '../Loading';

const CaseStudyContent = () => {
  const {loading,error,data}=useQuery(GET_CASE_STUDY)
  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <Loading />;
  // if (!data || !data.caseStudies || !data.caseStudies.edges) {
  //     return <p>No data available.</p>;
  // }
  console.log(data)
  const checkCaseData=data?.caseStudies?.edges
  const contents=checkCaseData.slice(-3)

  return (
    <div className="navbar-main bg-white py-14">
    <div className='main-container'>
    <div><p className='font-semibold text-[24px] text-black'>You may also like</p></div>
    <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-6">
          
          {contents.map((item, index) => {
                      return (
                      <div key={index}>
                          <Link href={`/case-studies/${item.node.slug}`} className="">
                          <div key={index} className="md:max-w-[324px] casestudy_product_container">
                            <div
                              className="h-[202px] md:max-w-[324px] relative  bg-no-repeat bg-cover rounded-lg"
                              style={{
                                backgroundImage: `url(${item.node.casestudyfieldgroud.backgroundImage.node.sourceUrl})`,
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
  </div>
  )
}

export default CaseStudyContent