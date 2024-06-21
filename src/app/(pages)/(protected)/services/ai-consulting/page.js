import AIConsulting from '@/components/Page/Services/AI consulting/AIConsulting '
import React from 'react'
import { introductionaiConsulting } from "@/db/services/introduction";

const page = () => {
  return (
    <div>
        <AIConsulting/>
    </div>
  )
}

export default page

export async function generateMetadata() {
  const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}${introductionaiConsulting.image}`;

  return {
    title: introductionaiConsulting.title,
    description: introductionaiConsulting.description,
    // image: imageUrl,
    openGraph: {
      title: introductionaiConsulting.title,
      description: introductionaiConsulting.description,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: introductionaiConsulting.title,
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/services/${introductionaiConsulting.path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: introductionaiConsulting.title,
      description: introductionaiConsulting.description,
      creator: introductionaiConsulting.title,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: introductionaiConsulting.title,
        },
      ],
    },
  };
}