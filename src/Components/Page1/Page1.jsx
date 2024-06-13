import React from 'react'
import Navbar from './Navbar'
import Page1Text from './Page1Text'
import MakeTripSection from './MakeTripSection'

const Page1 = () => {
  return (
    <div className='h-[100vh] w-[100vw] bg-backGroundImage relative bg-cover bg-center'>
      <Navbar/>
      <Page1Text/>
      <MakeTripSection/>


    </div>
  )
}

export default Page1