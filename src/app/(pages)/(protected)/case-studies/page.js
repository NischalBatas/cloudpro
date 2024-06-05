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

export function generateMetadata({ params }) {
  return {
    title:"CaseStudies",
  }
}