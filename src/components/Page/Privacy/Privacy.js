import React from 'react'
import Introduction from './Content/Introduction'
import Sidebar from './Content/Sidebar'
import PolicyInfo from './Content/PolicyInfo'

const Privacy = () => {
  return (
    <div className='privacy_main_content pt-18 bg-white'>
        <Introduction/>
        <div className='text-[#000] relative navbar-main top-[18rem] md:top-[24rem] pb-10'>
            <div className='main-container  privacy_main_content_policy gap-6'>
            <Sidebar/>
            <PolicyInfo/>
            </div>
        </div>
    </div>
  )
}

export default Privacy