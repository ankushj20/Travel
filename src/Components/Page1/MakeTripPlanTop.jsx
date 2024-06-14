import React from 'react'

const MakeTripPlanTop = () => {
  return (
    <div className='w-full  flex justify-between'>
       <div className='w-2/5 my-2 flex items-center justify-evenly '>
            <div className='flex-col flex items-center justify-center'>
                <h4 className='text-base'>Flight</h4>
                <i class="ri-plane-line text-xl rotate-45"></i>            
            </div>
            <div className='flex-col flex items-center justify-center'>
                <h4 className='text-base'>Hotels</h4>
                <i class="ri-hotel-line text-xl"></i>
            </div>
            <div className='flex-col flex items-center justify-center'>
                <h4 className='text-base'>Cruises</h4>
                <i class="ri-ship-fill text-xl"></i>            
            </div>
            <div className='flex-col flex items-center justify-center'>
                <h4 className='text-base'>Holidays</h4>
                <i class="ri-suitcase-3-fill text-xl"></i>
            </div>
       </div>
       <div className='w-2/5 flex items-center justify-evenly  text-black'>
          <h3> One way</h3>
          <h3>Round way</h3>
          <h3>Multiple city</h3>
       </div>
    </div>
  )
}

export default MakeTripPlanTop