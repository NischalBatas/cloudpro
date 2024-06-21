import DataVisual from '@/components/Page/Services/DataVisual/DataVisual'
import React from 'react'
import { introductiondataVisualizationSolutions } from "@/db/services/introduction";
const page = () => {
  return (
    <div>
        <DataVisual/>
    </div>
  )
}

export default page

export async function generateMetadata() {
  const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}${introductiondataVisualizationSolutions.image}`;

  return {
    title: introductiondataVisualizationSolutions.title,
    description: introductiondataVisualizationSolutions.description,
    // image: imageUrl,
    openGraph: {
      title: introductiondataVisualizationSolutions.title,
      description: introductiondataVisualizationSolutions.description,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: introductiondataVisualizationSolutions.title,
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/services/data-visualization`,
    },
    twitter: {
      card: "summary_large_image",
      title: introductiondataVisualizationSolutions.title,
      description: introductiondataVisualizationSolutions.description,
      creator: introductiondataVisualizationSolutions.title,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: introductiondataVisualizationSolutions.title,
        },
      ],
    },
  };
}