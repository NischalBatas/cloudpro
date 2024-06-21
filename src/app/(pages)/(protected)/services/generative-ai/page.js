import GenerativeAI from '@/components/Page/Services/GenerativeAI/GenerativeAI'
import React from 'react'
import { introductiongenerativeAIApplications } from "@/db/services/introduction";
const page = () => {
  return (
    <div>
        <GenerativeAI/>
    </div>
  )
}

export default page

export async function generateMetadata() {
  const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}${introductiongenerativeAIApplications.image}`;

  return {
    title: introductiongenerativeAIApplications.title,
    description: introductiongenerativeAIApplications.description,
    // image: imageUrl,
    openGraph: {
      title: introductiongenerativeAIApplications.title,
      description: introductiongenerativeAIApplications.description,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: introductiongenerativeAIApplications.title,
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/services/generative-ai`,
    },
    twitter: {
      card: "summary_large_image",
      title: introductiongenerativeAIApplications.title,
      description: introductiongenerativeAIApplications.description,
      creator: introductiongenerativeAIApplications.title,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: introductiongenerativeAIApplications.title,
        },
      ],
    },
  };
}