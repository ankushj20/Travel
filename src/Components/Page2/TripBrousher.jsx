import React from 'react'

const TripBrousher = ({image, placename,desc}) => {
  return (
    <div className='w-[20vw] h-[54vh] p-3 rounded-lg hover:scale-[0.9] transition-all bg-slate-300'>
        <div className='w-full h-[35vh]  '>
            <img className='h-full w-full object-cover  object-center' src={image} alt="" />        
            <h1 className='text-3xl font-bold p-1 '>{placename}</h1>
            <p className='text-sm font-medium px-1'>{desc} <br /> <span className='text-blue-500'>More Details.....</span></p>
        </div>        
    </div>

  )
}

export default TripBrousher