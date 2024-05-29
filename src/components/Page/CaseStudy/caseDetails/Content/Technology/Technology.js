import React from 'react'
import TechnologyHeading from './Content/TechnologyHeading'
import TechnologyContent from './Content/TechnologyContent'
import '../../../casestudy.css'
const Technology = ({content,caseData}) => {
  return (
    <div id='technology_section'>
      <TechnologyHeading/>
      <div className="line-between-content w-full h-[1px] bg-[#D3ECFF]"></div>
      {caseData ? 
      <TechnologyContent caseData={caseData} content={content}/>
    :
    (<p>Loading..</p>)}
    </div>
  )
}

export default Technology