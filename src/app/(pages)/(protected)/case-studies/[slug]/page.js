import Footer from '@/components/Footer/Footer';
import Loading from '@/components/Page/CaseStudy/Loading';
import CaseDetails from '@/components/Page/CaseStudy/caseDetails/CaseDetails'
import BannerOne from '@/components/Page/CaseStudy/caseDetails/Content/BannerOne';
import BannerTwo from '@/components/Page/CaseStudy/caseDetails/Content/BannerTwo';
import BreadCrumb from '@/components/Page/CaseStudy/caseDetails/Content/BreadCrumb';
import CaseStudyContent from '@/components/Page/CaseStudy/caseDetails/Content/CaseStudyContent';
import Conclusion from '@/components/Page/CaseStudy/caseDetails/Content/Conclusion';
import Introduction from '@/components/Page/CaseStudy/caseDetails/Content/Introduction';
import Newsletter from '@/components/Page/CaseStudy/caseDetails/Content/Newsletter';
import Solution from '@/components/Page/CaseStudy/caseDetails/Content/Solution';
import Tabs from '@/components/Page/CaseStudy/caseDetails/Content/Tabs';
import Technology from '@/components/Page/CaseStudy/caseDetails/Content/Technology/Technology';
import React from 'react'
import { caseStudy } from "@/db/casestudy/casestudy";

export async function getSinglePost(slug) {
  const query = `
    query caseStudyBySlug {
      casestudyBy(slug: "${slug}") {
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
            content(format: RENDERED)
      
      }
    }
  `;

  const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next:{revalidate:50}
  });

  const { data } = await res.json();

  return data.casestudyBy;
}


const page = async(props) => {
  let slugs = props.params.slug;
  const posts = await getSinglePost(slugs);
  return (
    <div className="">
    {posts ? (
      <>
   
        <BreadCrumb caseData={posts} />
        {/* <div className="main-container" dangerouslySetInnerHTML={{__html:posts.content}}></div> */}
        <Tabs />
        <Introduction caseData={posts} />
        <BannerOne caseData={posts} />
        <Solution caseData={posts} />
        <Technology caseData={posts} />
        <BannerTwo caseData={posts}  />
        <Conclusion caseData={posts} />

        <div className="line-between-content w-full h-[1px] bg-[#F2F2F2]"></div>
        <CaseStudyContent content={caseStudy} />
        <Newsletter contentType="CASE_SUDY" contentTitle={posts.title} contentCategory={posts.casestudyfieldgroud.caseStudySector}/>
        <Footer />
      </>
    ) : (
      <Loading />
    )}
  </div>
  )
}

export default page

export async function generateMetadata(props){
  const post = await  getSinglePost(props.params.slug);

  if (!post) {
    return {}
  }
  const canonicalUrl = `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/case-studies/${props.params.slug}`;

  return {
    title: post.title,
    description: post.casestudyfieldgroud.herotext,
    // image:post.casestudyfieldgroud.caseStudyImage.node.sourceUrl,
    openGraph: {
      title: post.title,
      description:
        post.casestudyfieldgroud.herotext,

      images:
        {
          url: post.casestudyfieldgroud.caseStudyImage.node.sourceUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: post.title,
        },
      locale: "en_US",
      type: "website",
      url: canonicalUrl,

    },

    twitter: {
      card: post.title,
      title: post.title,
      description:
      post.casestudyfieldgroud.herotext,
      creator: post.title,
      images: {
        url: post.casestudyfieldgroud.caseStudyImage.node.sourceUrl, // Must be an absolute URL
        alt: post.title,
      },
    },
  }
}