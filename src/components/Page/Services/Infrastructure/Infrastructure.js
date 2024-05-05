import React from 'react'
import Introduction from './content/Introduction'
import BusinessGrowth from './content/BusinessGrowth'
import Impact from './content/Impact'
import Solutions from './content/Solutions'
import Empower from './content/Empower'
import Journey from './content/Journey'
import Services from './content/Services'
import Products from './content/Products'
import Industries from './content/Industries'
import Faq from './content/Faq'
import Enterprises from './content/Enterprises'
import ContactInfo from '../AdHoc/content/ContactInfo'

const Infrastructure = () => {
  return (
    <div>
        <Introduction/>
        {/* <BusinessGrowth/> */}
        <Impact/>
        <Enterprises/>
        <Products/>
        <Industries/>
        <Faq/>
        {/* <Solutions/> */}
        {/* <Empower/> */}
        
        <Journey/>
        <Services/>
        <ContactInfo/>

       
    </div>
  )
}

export default Infrastructure