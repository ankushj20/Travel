import React from 'react'
import TripBrousher from './TripBrousher'

const AlltripsBrousher = () => {
  const data = [
    {image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Paris", description: "Paris, the City of Light, captivates with its iconic landmarks."},
    {image: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Maldives", description: "The Maldives, a tropical paradise, is renowned for its crystal-clear waters"},
    {image: "https://images.unsplash.com/photo-1586820672103-2272d8490ade?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Thailand", description: "Thailand, the Land of Smiles, offers a rich tapestry of cultural heritage and stunning beaches."},
    {image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Bali", description: "Bali, the Island of the Gods, enchants with its lush landscapes and serene temples"},
    {image: "https://images.unsplash.com/photo-1553913861-c46db5573ced?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Egypt", description: "Egypt, a land of ancient wonders, boasts majestic pyramids and a rich historical legacy."},
    {image: "https://images.unsplash.com/photo-1542114740389-9b46fb1e5be7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Singapore", description: "Singapore, a modern metropolis, dazzles with its stunning skyline and lush gardens"},
    {image: "https://images.unsplash.com/photo-1541347086890-306e30adfa41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Newzeland", description: "New Zealand, a natural paradise, captivates with its breathtaking landscapes and adventure activities"},
    {image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Dubai", description: "Dubai, a futuristic city, amazes with its iconic skyscrapers, luxury shopping, and vibrant nightlife."},
    {image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "London", description: "London, a cultural hub, charms with its historic landmarks, diverse cuisine, and vibrant theatre."},
    {image: "https://images.unsplash.com/photo-1580741186862-c5d0bf2aff33?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Goa", description: "Goa, India's beach paradise, entices with its golden shores, vibrant nightlife, and Portuguese heritage."},
    {image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Darjeeling", description: "Darjeeling, nestled in the Himalayas, charms with tea gardens, stunning views, and colonial architecture."} ,
    {image: "https://images.unsplash.com/photo-1622225074638-1d80c0388697?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Dharmshala", description: "Dharamshala, Himachal Pradesh, beckons with serene mountains, Tibetan culture, and spiritual retreats."},
    {image: "https://images.unsplash.com/photo-1612638039814-1a67ea727114?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", placeName: "Kasol", description: "Kasol, nestled in the Parvati Valley, captivates with its scenic beauty and hippie culture."},


  ]
  return (
    <div className='w-full h-min-[70vh] flex items-center px-[8vw]  flex-wrap gap-5 '>
        {data.map((item, index)=>(
          <TripBrousher image={item.image} placename={item.placeName} desc={item.description}/>

        ))}
        

    </div>
  )
}

export default AlltripsBrousher