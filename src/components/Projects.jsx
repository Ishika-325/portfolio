import React from 'react'

function Projects() {
  return (

    <div className='w-6xl  mx-auto pt-[168px] pb-15 '>

        <h2 className='text-3xl font-semibold text-indigo-800 text-center p-5'>My Projects...</h2>

        <div className='flex gap-5'>
        <div className='bg-white w-sm my-5'>
            <div className=' w-full h-60'>
                <img></img>
            </div>
            <div className='p-3'>
            <h2 className=' text-center font-medium text-lg'>My blog</h2>
            <p className='text-center text-gray-700 text-lg'>This is a blog project using react frontend</p>
            <div className='text-center'><a>view</a></div>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Projects
