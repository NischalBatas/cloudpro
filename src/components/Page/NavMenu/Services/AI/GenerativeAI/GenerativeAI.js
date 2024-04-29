import React from 'react'
import Introduction from './content/Introduction'
import BusinessGrowth from './content/BusinessGrowth'
import Impact from './content/Impact'
import Solutions from './content/Solutions'
import Empower from './content/Empower'
import Journey from './content/Journey'
import Services from './content/Services'
import ContactUs from './content/ContactUs'
import Products from './content/Products'
import Industries from './content/Industries'
import Faq from './content/Faq'

const GenerativeAI = () => {
  return (
    <div>
        <Introduction/>
        {/* <BusinessGrowth/> */}
        <Impact/>
        <Products/>
        <Industries/>
        <Faq/>
        {/* <Solutions/> */}
        {/* <Empower/> */}
        
        <Journey/>
        <Services/>
        <ContactUs/>

       
    </div>
  )
}

export default GenerativeAI