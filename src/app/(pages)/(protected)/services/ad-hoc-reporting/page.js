import AdHoc from '@/components/Page/Services/AdHoc/AdHoc'
import React from 'react'
import { introductionAdhoc } from "@/db/services/introduction";
const page = () => {
  return (
    <div>
        <AdHoc/>
    </div>
  )
}

export default page


export async function generateMetadata() {
  const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}${introductionAdhoc.image}`;

  return {
    title: introductionAdhoc.title,
    description: introductionAdhoc.description,
    // image: imageUrl,
    openGraph: {
      title: introductionAdhoc.title,
      description: introductionAdhoc.description,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: introductionAdhoc.title,
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/services/ad-hoc-reporting`,
    },
    twitter: {
      card: "summary_large_image",
      title: introductionAdhoc.title,
      description: introductionAdhoc.description,
      creator: introductionAdhoc.title,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: introductionAdhoc.title,
        },
      ],
    },
  };
}