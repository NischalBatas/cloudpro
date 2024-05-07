import React from 'react'
import TechnologyHeading from './Content/TechnologyHeading'
import TechnologyContent from './Content/TechnologyContent'

const Technology = ({content}) => {
  return (
    <div>
      <TechnologyHeading/>
      <TechnologyContent content={content}/>
    </div>
  )
}

export default Technology