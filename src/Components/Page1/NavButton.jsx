import React from 'react'

const NavButton = () => {
  return (
    <div className='flex gap-6'>
        <button className='bg-amber-500	hover:scale-75 hover:bg-amber-300	transition-all font-bold py-2 px-5 rounded-full'>
            Sign Up
        </button>
        <button className=' hover: hover:scale-75 border-2 transition-all font-bold py-2 px-5 rounded-full'>
            Log In
        </button>
        
        
    </div>
  )
}

export default NavButton