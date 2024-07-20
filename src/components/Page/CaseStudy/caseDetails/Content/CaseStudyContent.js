import Link from 'next/link';
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md';
import '../../casestudy.css'

import Loading from '../Loading';



async function getPosts() {
  const query = `query caseStudies {
            caseStudies(where: {orderby: {field: DATE, order: DESC}}) {
              edges {
                node {
                  casestudyfieldgroud {
                    conclusion
                    introduction
                    readTime
                    solution
                    technology
                    uploadDate
                    herotext
                    impactandresult
                    backgroundImage {
                      node {
                        altText
                        sourceUrl
                      }
                    }
                    caseStudyImage {
                      node {
                        altText
                        sourceUrl
                      }
                    }
                    caseStudySector
                    caseStudySectorDescription
                  }
                  date
                  title
                  casestudyId
                  slug
                }
              }
            }
          }`;

  const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next:{revalidate:50}
  });

  const { data } = await res.json();

  return data.caseStudies.edges;
}



const CaseStudyContent = async() => {
  const posts=await getPosts()
  const contents=posts.slice(0,3)
  // console.log('newdata4s',posts)

  return (
    <div className="navbar-main bg-white py-5 md:py-10">
    <div className='main-container'>
    <div><p className='font-semibold text-[24px] text-black'>You may also like</p></div>
    <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
          
          {contents ? 
          <>
          {contents.map((item, index) => {
                      return (
                      <div key={index}>
                          <Link href={`/case-studies/${item?.node?.slug}`} className="">
                          <div key={index} className="md:max-w-[324px] casestudy_product_container">
                            <div
                              className="h-[202px] md:max-w-[324px] relative  bg-no-repeat bg-cover rounded-lg"
                              style={{
                                backgroundImage: `url(${item?.node?.casestudyfieldgroud?.backgroundImage?.node?.sourceUrl})`,
                              }}
                            >
                              <div className="flex justify-between  px-4 pt-4  ">
                                <div className="text-white text-base  font-medium w-44">
                                {item?.node?.casestudyfieldgroud?.caseStudySectorDescription}
                                </div>
                                <div className="casestudy_product_arrow">
                                <MdOutlineArrowOutward className="casestudy_product_arrow_icon rounded-full  w-6 h-6 text-xs p-1" />
                              </div>
                              </div>
                            </div>
          
                            <div className="flex gap-2 items-center text-xs mt-3 text-white">
                              <div className="bg-cloud px-2 rounded-full py-1">
                              {item?.node?.casestudyfieldgroud?.caseStudySector}
                              </div>
                              <div className="text-[10px] text-[#909090] tracking-wider">
                              {item?.node?.casestudyfieldgroud?.readTime} Read
                              </div>
                            </div>
          
                            <div className="my-4">
                              <div className="casestudy_product_title font-semibold text-[16px] text-[#000]">
                              {item?.node?.title}
                              </div>
                              <div className="casestudy_product_description mt-2 text-[14px] text-[#666666] leading-6">
                              {item?.node?.casestudyfieldgroud?.introduction}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      );
                    })}
          </>
                  :'no data'}
          
                  </div>
    </div>
  </div>
  )
}

export default CaseStudyContent