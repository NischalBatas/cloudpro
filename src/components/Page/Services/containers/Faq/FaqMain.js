import React from 'react'
import FaqContainer from './content/FaqContainer'
import FaqContent from './content/FaqContent'

const FaqMain = ({content}) => {
  return (
    <div className="navbar-main py-20 ">
      <div className="main-container flex justify-between flex-wrap gap-2">
        <FaqContainer />
        <FaqContent contents={content} />
      </div>
    </div>
  )
}

export default FaqMain