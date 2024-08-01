
import CaseStudy from '@/components/Page/CaseStudy/CaseStudy'
import React from 'react'

const page = () => {
  return (
    <div>
        <CaseStudy/>
 
    </div>
  )
}

export default page

export async function generateMetadata(){
  const imageUrl =  "https://www.cloudpro.ai/Image/logo/cloudprotheme.jpg";

  return {
    title: "CaseStudies",
    description: "We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your Business and Infrastructure Readiness for the Ultimate Technological Leap.",
    // image: imageUrl,
    openGraph: {
      title: "CaseStudies",
      description: "We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your Business and Infrastructure Readiness for the Ultimate Technological Leap.",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: "CaseStudies",
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/case-studies`,
    },
    twitter: {
      card: "summary_large_image",
      title: "CaseStudies",
      description: "We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your Business and Infrastructure Readiness for the Ultimate Technological Leap.",
      creator: "CaseStudies",
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: "CaseStudies",
        },
      ],
    },
  };
}