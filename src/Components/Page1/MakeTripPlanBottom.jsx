import React from 'react'

const MakeTripPlanBottom = () => {
  return (
    <div className='w-full flex items-center justify-evenly'>
    <div className='flex flex-col px-8 py-1 rounded-xl border-2 justify-center items-start'>
        <h4 >
            From
        </h4>
        <h2 className='text-xl font-semibold'>
            New Delhi
        </h2>
    </div>
    <div className='flex flex-col px-8 py-1 rounded-xl border-2 justify-center items-start'>
        <h4 >
            To
        </h4>
        <h2 className='text-xl font-semibold'>
            Mumbai
        </h2>
    </div>
    <div className='flex flex-col px-8 py-1 rounded-xl border-2 justify-center items-start'>
        <h4 >
            Departure <i class="ri-arrow-down-s-fill"></i>
        </h4>
        <h2 className='text-xl font-semibold'>
            10 July, 2024
        </h2>
    </div>
    <div className='flex flex-col px-8 py-1 rounded-xl border-2 justify-center items-start'>
        <h4 >
            Return <i className="ri-arrow-down-s-fill"></i>
        </h4>
        <h2 className='text-xl font-semibold'>
            17 July, 2024
        </h2>
    </div>
    
    <div className='flex flex-col px-8 py-1 rounded-xl border-2 justify-center items-start'>
        <h4 >
            Passengers
        </h4>
        <h2 className='text-xl font-semibold'>
            1 Adult, 0 Children
        </h2>
    </div>

    </div>
)
}

export default MakeTripPlanBottom