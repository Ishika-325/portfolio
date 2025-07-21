import React from 'react'
import me from '../assets/me2.png'
import About from './About'

function Hero() {
  return (
    
    <div id='home'  className='py-20 pt-24 w-full bg-gray-200'>
      <div className='flex pb-20 max-w-6xl flex-col md:flex-row px-10 mx-auto justify-between '>
        <div className='my-5 py-5'>
          <p className='text-gray-500 text-3xl font-medium'>Hello,   <span className='text-gray-700 '>  I am </span></p>
          <h1 className='text-gray-900 text-5xl font-semibold italic '>Ishika Gupta</h1>
          <br></br>
          <h2 className='text-2xl'>Aspiring Software Engineer and Developer</h2>
          <br></br>
          <div className='flex gap-5 mt-2'>
          <button className='p-3 px-5 bg-[#4B0082] text-white font-semibold rounded-lg'>My Projects </button>
          <button className='p-3 px-5 border-2 border-[#4B0082] font-semibold text-[#4B0082] rounded-lg'>Resume </button>
          </div>
        </div>
        <div className="mt-8 md:mt-0 flex justify-center py-5 ">
        <div className="w-72 h-72 bg-white rounded-2xl shadow-lg shadow-inner  overflow-hidden">
          
          <img src={me} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
      </div>

      <About />
    </div>
      
    
  )
}

export default Hero
