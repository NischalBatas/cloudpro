import BigData from '@/components/Page/Services/BigData/BigData'
import React from 'react'
import { introductionbigDataConsulting } from "@/db/services/introduction";
const page = () => {
  return (
    <div>
        <BigData/>
    </div>
  )
}

export default page

export async function generateMetadata() {
  const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}${introductionbigDataConsulting.image}`;

  return {
    title: introductionbigDataConsulting.title,
    description: introductionbigDataConsulting.description,
    // image: imageUrl,
    openGraph: {
      title: introductionbigDataConsulting.title,
      description: introductionbigDataConsulting.description,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: introductionbigDataConsulting.title,
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/services/${introductionbigDataConsulting.path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: introductionbigDataConsulting.title,
      description: introductionbigDataConsulting.description,
      creator: introductionbigDataConsulting.title,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: introductionbigDataConsulting.title,
        },
      ],
    },
  };
}