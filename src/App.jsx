import React from 'react'
import "./index.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MySkill from './components/MySkill'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {
  return (
    <div className='bg-gray-100'>
     <div >
      <Navbar />
      <Hero />
      
      
     </div >
      <Projects/>
      <MySkill />
      <Contact />
    </div>
  )
}

export default App
