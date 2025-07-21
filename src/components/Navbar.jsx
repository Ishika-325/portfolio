import React from 'react'

function Navbar() {
  return (
    <div className='w-screen fixed z-50 shadow-sm'>
      <div className='font-semibold max-w-6xl mx-auto px-4 text-lg bg-transparent text-slate-800 py-5'>
        <ul className='flex gap-5 justify-end'>
          <li className='hover:text-[#4B0082] hover:font-semibold cursor-pointer'>Home</li>
          <li className='hover:text-[#4B0082] hover:font-semibold cursor-pointer'>About</li>
          <li className='hover:text-[#4B0082] hover:font-semibold cursor-pointer'>Projects</li>
          <li className='hover:text-[#4B0082] hover:font-semibold cursor-pointer'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
