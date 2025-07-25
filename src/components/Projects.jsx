import React from 'react'

function Projects() {
  const projects = [
    {
      imgsrc: "",
      title: "My Blog",
      tag: "This is a blog project using react frontend",
      anchor: "",
    },
  ]
  return (

    <div className='max-w-6xl  px-10 mx-auto pt-[168px] pb-15 '>

        <h2 className='text-3xl font-semibold text-[#4B0082] text-center p-5'>My Projects...</h2>

        <div className='flex gap-5'>
          { projects.map((project, index) => (
            <div className='bg-white w-sm my-5 shadow-lg rounded-lg'>
            <div className=' w-full h-60'>
                <img></img>
            </div>
            <div className='p-3 shadow-md'>
            <h2 className=' text-center font-medium text-lg'>{project.title}</h2>
            <p className='text-center text-gray-700 text-lg'>{project.tag}</p>
            <div className='text-center'><a>view</a></div>
            </div>
        </div>

          ))}
        
        </div>
      
    </div>
  )
}

export default Projects
