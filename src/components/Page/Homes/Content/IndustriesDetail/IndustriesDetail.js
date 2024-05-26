import React from 'react'
import IndustriesTab from './IndustriesTab/IndustriesTab'
import Introduction from './Introduction/Introduction'
import IndustriesService from './IndustriesService/IndustriesService'
import Banner from './Banner/Banner'
import Footer from '@/components/Footer/Footer'
import IndustriesServiceReason from './IndustriesServiceReasons/IndustriesServiceReason'
import Product from '../Product'
import CaseStudyContent from '@/components/Page/CaseStudy/caseDetails/Content/CaseStudyContent'

const IndustriesDetail = () => {
  return (
    <div className='pt-[72px]'>
        <IndustriesTab/>
       <Introduction/>
       <IndustriesService/>
       <Banner/>
       <IndustriesServiceReason/>
       <CaseStudyContent/>
       <Product/>
       <Footer/>
    </div>
  )
}

export default IndustriesDetail