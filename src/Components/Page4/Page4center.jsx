import React from 'react'
import P4CenterLeft from './P4CenterLeft'
import P4CenterRight from './P4CenterRight'

const Page4center = () => {
  return (
    <div className='w-[90vw] h-[60vh] mx-[5vw] flex  border-b-2 border-b-zinc-500'>
        <P4CenterLeft/>
        <P4CenterRight/>
    </div>
  )
}

export default Page4center