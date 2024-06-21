import React from 'react'
import P3Offer2 from './P3Offer2'
import P3ExploreButton from './P3ExploreButton'

const P3Offers = () => {
  const data = [
    {image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Paris", offerPercentage: "20", price:"17,999"},
    {image: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Maldives",  offerPercentage: "8", price:"9,999"},
    {image: "https://images.unsplash.com/photo-1586820672103-2272d8490ade?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Thailand", offerPercentage: "5", price:"15,999"},
    {image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Bali", offerPercentage: "10", price:"19,999"},
    {image: "https://images.unsplash.com/photo-1553913861-c46db5573ced?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Egypt", offerPercentage: "20", price:"13,999"},
    {image: "https://images.unsplash.com/photo-1542114740389-9b46fb1e5be7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Singapore",offerPercentage: "15", price:"25,999"},
    {image: "https://images.unsplash.com/photo-1541347086890-306e30adfa41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Newzeland", offerPercentage: "35", price:"26,999"},
    {image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Dubai", offerPercentage: "25", price:"29,999"},
    {image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "London", offerPercentage: "35", price:"32,999"},
    {image: "https://images.unsplash.com/photo-1580741186862-c5d0bf2aff33?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Goa", offerPercentage: "20", price:"8,999"},
    {image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Darjeeling", offerPercentage: "10", price:"16,999"} ,
    {image: "https://images.unsplash.com/photo-1622225074638-1d80c0388697?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Dharmshala", offerPercentage: "7", price:"11,999"},
    {image: "https://images.unsplash.com/photo-1612638039814-1a67ea727114?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Kasol", offerPercentage: "5", price:"11,999"},


  ]
  return (
    <div className='w-full min-h-[40vh] p-3 rounded-lg flex flex-wrap gap-6 justify-evenly px-20'>
        
        {data.map((item, index)=>(
            <P3Offer2 image={item.image} placeName={item.placeName} offerPercentage={item.offerPercentage} price={item.price}/>
        ))}
          <P3ExploreButton  />

    </div>
  )
}

export default P3Offers