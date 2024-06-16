import React from 'react'

const Pge4Suggestion = () => {
  return (
    <div className='w-full h-[30vh] flex items-center justify-center gap-16'>
        <button className='px-8 py-3 bg-[#F16566] rounded-full text-white'>Back page</button>
        <div className='flex gap-4'>
            <h4 className='text-xl font-semibold border-2 px-5 py-3 rounded-full' >1</h4>
            <h4 className='text-xl font-semibold border-2 px-5 py-3 rounded-full'>2</h4>
            <h4 className='text-xl font-semibold border-2 px-5 py-3 rounded-full'>3</h4>
            <h4 className='text-xl font-semibold border-2 px-5 py-3 rounded-full'>4</h4>
            <h4 className='text-xl font-semibold border-2 px-5 py-3 rounded-full'>...</h4>
            <h4 className='text-xl font-semibold border-2 px-5 py-3 rounded-full'>9</h4>
        </div>
        <button className='px-8 py-3 bg-[#F16566] rounded-full text-white'>Next page</button>
    </div>
)
}

export default Pge4Suggestion