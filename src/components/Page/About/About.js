import React from 'react'
import Results from './content/Results'
import Introduction from './content/Introduction'
import Mission from './content/Mission'
import ProfifleMessage from './content/ProfifleMessage'

const About = () => {
  return (
    <div className=''>
        <Introduction/>
        <Mission/>
           <Results/>
            <ProfifleMessage/>
    </div>
  )
}

export default About