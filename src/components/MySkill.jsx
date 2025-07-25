import React from 'react'
import bg from '../assets/graybcg.jpg'
function MySkill() {
  const features = [
    {
      heading: "Front-End Web Development",
      datas: [
        "HTML",
        "CSS",
        "JavaScripta",
        "ReactJS",
        "Tailwind CSS",
      ],
    },
    {
      heading: "Back-End Web Development ",
      datas: [
        "Django",
        "NodeJS",
      ]
    },
  ]
  return (
    <div className='w-full bg-cover ' style={{ backgroundImage: `url(${bg})`}}>
    <div className='max-w-6xl mx-auto font-semibold  px-10 pt-20 pb-15'>
       <h2 className='p-5 text-3xl text-[#4B0082]'>Skills I have...</h2>
       <div className='flex gap-5'>
        { features.map((feature, index) => 
            <div key={index} className='bg-white p-5 max-w-sm rounded-lg shadow-md text-lg'>
              <h3 className='text-2xl py-2'>{feature.heading}</h3>
              <ul className='text-gray-700'>
                {feature.datas.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
              </div>
        )}
      </div>
      
    </div>
    </div>
  )
}

export default MySkill
