import React from 'react'

const FooterBlock = () => {
    
  return (
    <div className='w-[25vw] h-[80vh]  px-4 py-4 bg-zinc-100'>
        <h2 className='text-2xl font-bold  px-4'>Services We Offer</h2>
        <div className='w-full h-30vh flex items-start justify-center flex-col  my-10 px-4'>
            <h4 className='font-semibold'>Flight Booking</h4>
            <h4 className='font-semibold'>Lodging</h4>
            <h4 className='font-semibold'>Destination</h4>
            <h4 className='font-semibold'>International Holidays</h4>
            <h4 className='font-semibold'>Book Bus Ticket</h4>
            <h4 className='font-semibold'>Book Train Tickets</h4>
            <h4 className='font-semibold'>Activities</h4>
            <h4 className='font-semibold'>Cheap Tickets</h4>
            <h4 className='font-semibold'>Holidays in India</h4>
        </div>
        <div className='w-full h-[10vh] flex items-center justify-between px-4 pr-32 '>
            <i className="text-2xl ri-instagram-line"></i>
            <i className="text-2xl ri-twitter-x-line"></i>
            <i className="text-2xl ri-facebook-circle-fill"></i>
            <i className="text-2xl ri-linkedin-box-fill"></i>
            <i className="text-2xl ri-pinterest-fill"></i>    
        </div>
        <h3 className='py-4 px-4'>Copyright 2024 Travel service, All Rights reserved</h3>
    </div>
  )
}

export default FooterBlock