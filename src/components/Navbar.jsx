import React from 'react'

function Navbar() {
  return (
    <div>
        <ul className='fixed font-normal w-7xl flex justify-end gap-5 text-lg bg-transparent text-slate-800 py-5'>
            <li className='hover:text-[#4B0082] hover:font-semibold'>Home</li>
            <li className='hover:text-[#4B0082] hover:font-semibold'>About</li>
            <li className='hover:text-[#4B0082] hover:font-semibold'>Projects</li>
            <li className='hover:text-[#4B0082] hover:font-semibold'>Contact</li>
        </ul>
    </div>
  )
}
export default Navbar
