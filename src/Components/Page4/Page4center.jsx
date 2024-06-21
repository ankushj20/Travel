import React from 'react'
import P4CenterLeft from './P4CenterLeft'
import P4CenterRight from './P4CenterRight'

const Page4center = () => {
  const data = [
    {image: "https://images.unsplash.com/photo-1606220975728-f94e0d9ed642?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", place: "Kasol", desc: "Kasol, a quaint village nestled in the Parvati Valley of Himachal Pradesh, offers a budget-friendly escape amidst stunning natural beauty. Accommodation options range from budget guesthouses to affordable hostels, catering to backpackers and travelers seeking a relaxed atmosphere. The village is renowned for its picturesque landscapes, with opportunities for hiking, exploring local cafes, and soaking in the peaceful ambiance by the Parvati River. Budget-friendly eateries serve a variety of cuisines, including local Himachali dishes and international fare, making Kasol a perfect destination for those looking to unwind without breaking the bank."},
    {image: "https://images.unsplash.com/photo-1601225612316-b4733315a717?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", place: "Thailand", desc: "Thailand, known for its affordability, offers budget-friendly options for travelers seeking an unforgettable experience on a budget. From bustling street markets where you can bargain for souvenirs and delicious street food for just a few baht, to affordable guesthouses and hostels that cater to backpackers, Thailand provides ample opportunities to explore its rich culture and stunning landscapes without straining your wallet. Whether you're exploring the ancient temples of Bangkok, relaxing on the beautiful beaches of Phuket and Krabi, or immersing yourself in the vibrant nightlife of Chiang Mai, Thailand ensures that every penny spent delivers maximum value and memorable experiences."},
    {image: "https://images.unsplash.com/photo-1600450575743-43793ba079d3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", place: "Dubai", desc: "Dubai, often associated with luxury, also offers budget-friendly experiences for savvy travelers. Opt for affordable accommodations in neighborhoods like Deira and Bur Dubai, where guesthouses and budget hotels provide comfortable stays without breaking the bank. Explore the city's cultural sites such as the Dubai Museum and Al Fahidi Historical Neighborhood, which offer insights into the city's rich heritage at minimal cost. Enjoy shopping at traditional souks like the Gold Souk and Spice Souk, where you can haggle for deals on spices, textiles, and souvenirs. For dining, local eateries and street food stalls offer delicious options at reasonable prices, providing a taste of authentic Emirati and international cuisines. Lastly, take advantage of free or low-cost activities such as visiting public beaches, exploring parks like Safa Park, or admiring the iconic Burj Khalifa from the outside. Dubai can be enjoyed on a budget with careful planning and by seeking out the city's many affordable attractions and experiences."}
  ]
  return (
    <div className='w-[90vw] h-[60vh] mx-[5vw] flex  border-b-2 border-b-zinc-500'>
        <P4CenterLeft/>
        <P4CenterRight/>
    </div>
  )
}

export default Page4center