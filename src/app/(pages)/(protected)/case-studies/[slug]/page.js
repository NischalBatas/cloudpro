import CaseDetails from '@/components/Page/CaseStudy/caseDetails/CaseDetails'
import React from 'react'

const page = (props) => {
  return (
    <div>
        <CaseDetails props={props}/>
    </div>
  )
}

export default page

export function generateMetadata({ params }) {
  return {
    title:params.slug,
  }
}