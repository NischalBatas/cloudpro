import BiReport from '@/components/Page/Services/BiReport/BiReport'
import React from 'react'
import { introductionbiReportDashboard } from "@/db/services/introduction";
const page = () => {
  return (
    <div>
        <BiReport/>
    </div>
  )
}

export default page

export async function generateMetadata() {
  const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}${introductionbiReportDashboard.image}`;

  return {
    title: introductionbiReportDashboard.title,
    description: introductionbiReportDashboard.description,
    // image: imageUrl,
    openGraph: {
      title: introductionbiReportDashboard.title,
      description: introductionbiReportDashboard.description,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: introductionbiReportDashboard.title,
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/services/${introductionbiReportDashboard.path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: introductionbiReportDashboard.title,
      description: introductionbiReportDashboard.description,
      creator: introductionbiReportDashboard.title,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: introductionbiReportDashboard.title,
        },
      ],
    },
  };
}