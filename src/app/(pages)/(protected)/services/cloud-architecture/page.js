import ArchitectureConsulting from '@/components/Page/Services/ArchitectureConsulting/ArchitectureConsulting '
import React from 'react'
import { introductionarchitectureConsulting } from "@/db/services/introduction";
const page = () => {
  return (
    <div>
        <ArchitectureConsulting/>
    </div>
  )
}

export default page

export async function generateMetadata() {
  const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}${introductionarchitectureConsulting.image}`;

  return {
    title: introductionarchitectureConsulting.title,
    description: introductionarchitectureConsulting.description,
    // image: imageUrl,
    openGraph: {
      title: introductionarchitectureConsulting.title,
      description: introductionarchitectureConsulting.description,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: introductionarchitectureConsulting.title,
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/services/${introductionarchitectureConsulting.path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: introductionarchitectureConsulting.title,
      description: introductionarchitectureConsulting.description,
      creator: introductionarchitectureConsulting.title,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: introductionarchitectureConsulting.title,
        },
      ],
    },
  };
}