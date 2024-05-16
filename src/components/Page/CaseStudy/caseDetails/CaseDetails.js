// "use client"
// import React, { useEffect } from "react";

// import BreadCrumb from "./Content/BreadCrumb";
// import Introduction from "./Content/Introduction";
// import BannerOne from "./Content/BannerOne";
// import Solution from "./Content/Solution";
// import { solution1 } from "@/db/casestudy/content/solution";
// import CaseStudyContent from "./Content/CaseStudyContent";
// import { caseStudy } from "@/db/casestudy/casestudy";
// import Conclusion from "./Content/Conclusion";
// import BannerTwo from "./Content/BannerTwo";
// import Technology from "./Content/Technology/Technology";
// import { impactAndResult1 } from "@/db/casestudy/content/impactAndResult";
// import { technology1 } from "@/db/casestudy/content/technology";
// import Link from "next/link";
// import Tabs from "./Content/Tabs";
      

// const CaseDetails = () => {
//   useEffect(() => {
//     const handleClick = (e) => {
//       e.preventDefault();

//       const targetId = e.target.getAttribute('href').substring(1); // Remove the '#'
//       const targetElement = document.getElementById(targetId);

//       if (targetElement) {
//         const margin = 50; // Adjust this value as requirement
//         window.scrollTo({
//           top: targetElement.offsetTop - margin,
//           behavior: 'smooth'
//         });
//       }
//     };

//     const anchors = document.querySelectorAll('.tabs_main_service a');
//     anchors.forEach(anchor => {
//       anchor.addEventListener('click', handleClick);
//     });

//     // Clean up the event listener when the component unmounts
//     return () => {
//       anchors.forEach(anchor => {
//         anchor.removeEventListener('click', handleClick);
//       });
//     };
//   }, []); //
//   return (
//     <div>
//       <BreadCrumb />
//       <Tabs/>
//       <Introduction />
//       <BannerOne />
//       <Solution content={solution1} />
//       <Technology content={technology1}/>
//       <BannerTwo content={impactAndResult1}/>
//       <Conclusion />

//       <div className="line-between-content w-full h-[1px] bg-[#F2F2F2]"></div>
//       <CaseStudyContent content={caseStudy} />
//     </div>
//   );
// };

// export default CaseDetails;


"use client"
import React, { useEffect, useState } from "react";

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
import { useRouter } from "next/navigation";
import { GET_ONE_CASE_STUDY } from "@/components/container/graphql/queries/gerOneCaseStudy";
import { useQuery } from "@apollo/client";
import Loading from "./Loading";
import Newsletter from "./Content/Newsletter";
import Footer from "@/components/Footer/Footer";
      

const CaseDetails = ({props}) => {
  const [caseData, setCaseData] = useState(null);
  const [loading,setLoading]=useState(true)

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
  }, [caseData]); //





  useEffect(() => {
    let slugs=props.params.slug
    fetch('https://blogscloudproai-7a4c2b.ingress-erytho.ewp.live/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query caseStudyBySlug($slug: String!) {
          casestudyBy(slug: $slug) {
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
                slug
               
          
          }
        }
      `, variables: { slug: slugs },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("CaseDetail",data);
        setCaseData(data);
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Optionally, set an error state here for user feedback
      });
  }, []);



  return (
    <div className="">
      {caseData ?  
      <>
      <BreadCrumb caseData={caseData.data.casestudyBy}/>
  

  <Tabs/>
  <Introduction caseData={caseData.data.casestudyBy}/>
  <BannerOne caseData={caseData.data.casestudyBy}/>
  <Solution caseData={caseData.data.casestudyBy} content={solution1} />
  <Technology caseData={caseData.data.casestudyBy} content={technology1}/>
  <BannerTwo caseData={caseData.data.casestudyBy} content={impactAndResult1}/>
  <Conclusion caseData={caseData.data.casestudyBy}/>

  <div className="line-between-content w-full h-[1px] bg-[#F2F2F2]"></div>
  <CaseStudyContent content={caseStudy} />
  <Newsletter/>
  <Footer/>
      </>


      : (<Loading/>)}
    </div>
  );
};

export default CaseDetails;
