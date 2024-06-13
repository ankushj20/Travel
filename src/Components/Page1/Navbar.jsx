import React from 'react'
import NavLeft from './NavLeft'
import NavRight from "./NavRight"

const Navbar = () => {
  return (
    <div className='h-[15vh] w-full bg-[#00000062] text-white flex items-center justify-between px-6'>
      <img className='h-[30vh] w-[30vh]' src="\Logo\Journey-removebg-preview.png" alt="" />
      <NavLeft/>
      <NavRight/>
    </div>
  )
}

export default Navbar