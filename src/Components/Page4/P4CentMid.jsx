import React from 'react'
import P4CentMidLeft from './P4CentMidLeft'
import P4CentMidRight from './P4CentMidRight'

const P4CentMid = () => {
  return (
    <div className='w-[90vw] mx-[5vw] h-[60vh] flex  border-b-2 border-b-zinc-500'>
        <P4CentMidLeft/>
        <P4CentMidRight/>
    </div>
  )
}

export default P4CentMid