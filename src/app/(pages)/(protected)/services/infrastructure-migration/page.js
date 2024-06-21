import Infrastructure from '@/components/Page/Services/Infrastructure/Infrastructure'
import React from 'react'
import { introductioninfrastructureMigrationUpgrades } from "@/db/services/introduction";
const page = () => {
  return (
    <div>
        <Infrastructure/>
    </div>
  )
}

export default page

export async function generateMetadata() {
  const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}${introductioninfrastructureMigrationUpgrades.image}`;

  return {
    title: introductioninfrastructureMigrationUpgrades.title,
    description: introductioninfrastructureMigrationUpgrades.description,
    // image: imageUrl,
    openGraph: {
      title: introductioninfrastructureMigrationUpgrades.title,
      description: introductioninfrastructureMigrationUpgrades.description,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: introductioninfrastructureMigrationUpgrades.title,
        },
      ],
      locale: "en_US",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/services/${introductioninfrastructureMigrationUpgrades.path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: introductioninfrastructureMigrationUpgrades.title,
      description: introductioninfrastructureMigrationUpgrades.description,
      creator: introductioninfrastructureMigrationUpgrades.title,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: introductioninfrastructureMigrationUpgrades.title,
        },
      ],
    },
  };
}