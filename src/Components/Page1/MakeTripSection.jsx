import React from 'react'
import MakeTripPlanTop from './MakeTripPlanTop'
import MakeTripPlanBottom from './MakeTripPlanBottom'
import SearchButton from './SearchButton'

const MakeTripSection = () => {
  return (
    <div className='h-[30vh] w-4/5 flex flex-col justify-between py-4  bg-[#fcfafa62] overflow-hidden top-[65vh] rounded-3xl left-1/2 translate-x-[-50%] absolute'>
        <MakeTripPlanTop/>
        <MakeTripPlanBottom/>
        <SearchButton/>
    </div>
  )
}

export default MakeTripSection