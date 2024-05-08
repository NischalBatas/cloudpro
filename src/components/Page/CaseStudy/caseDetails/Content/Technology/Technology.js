import React from 'react'
import TechnologyHeading from './Content/TechnologyHeading'
import TechnologyContent from './Content/TechnologyContent'

const Technology = ({content}) => {
  return (
    <div id='technology_section'>
      <TechnologyHeading/>
      <div className="line-between-content w-full h-[1px] bg-[#D3ECFF]"></div>
      <TechnologyContent content={content}/>
    </div>
  )
}

export default Technology