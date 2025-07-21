import React from 'react'

function MySkill() {
  return (
    <div className='w-full bg-zinc-100'>
    <div className='max-w-6xl mx-auto font-semibold  px-10 pt-20 pb-15'>
       <h2 className='p-5 text-3xl text-[#4B0082]'>Skills I have...</h2>
       <div>
          <div className='bg-white p-5 max-w-sm rounded-lg shadow-md text-lg'>
            <h3 className='text-2xl py-2'>Front-End Web Development</h3>
            <ul className='text-gray-700'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React JS</li>
                <li>Tailwind CSS</li>
            </ul>
          </div>

        
       </div>
      
    </div>
    </div>
  )
}

export default MySkill
