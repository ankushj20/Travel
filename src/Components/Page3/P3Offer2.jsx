import React from 'react'

const P3Offer2 = ({image, placeName, offerPercentage, price}) => {
  return (
    
    <div className='w-[23vw] h-[24vh] p-3 rounded-lg flex hover:scale-[0.9] transition-all bg-slate-300'    >
        <div className='w-2/5 h-full bg-white rounded-t-lg'>
            <img className='w-full h-4/5 rounded-t-lg' src={image} alt="" />
            <h4 className='text-center font-bold py-1'>{placeName}</h4>
        </div>
        <div className='w-1/2 h-full py-1 pl-4 relative '>
            <h2 className='font-bold text-xl leading-5 	'>Festive sale by vistara</h2>
            <h5 className='py-1 font-normal leading-4 text-[15px]'>Book domestic flights starting</h5>
            <h4 className=' font-bold '>{offerPercentage}% Off</h4>
            <h2 className='text-[#F9181C] font-bold'>@ Just Rs. <span className='text-xl'>{price}</span></h2>
            <div className='w-full h-[5vh]  items-center justify-end flex mt-1 absolute top-[19vh]'>
                <i className="ri-arrow-right-s-line  text-xl text-center h-[27px] w-[27px] rounded-full text-white bg-[#F16566]"></i>
            </div>
        </div>
        
    </div>

)
}

export default P3Offer2