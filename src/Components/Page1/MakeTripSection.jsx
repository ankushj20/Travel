import React from 'react'
import MakeTripPlanTop from './MakeTripPlanTop'
import MakeTripPlanBottom from './MakeTripPlanBottom'

const MakeTripSection = () => {
  return (
    <div className='h-1/4 w-4/5 flex flex-col justify-between py-4 bg-white overflow-hidden top-90 rounded-3xl left-1/2 translate-x-[-50%] absolute'>
        <MakeTripPlanTop/>
        <MakeTripPlanBottom/>
    </div>
  )
}

export default MakeTripSection