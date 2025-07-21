import React from 'react'

function Footer() {
  return (
    <div>
        <div className='w-full bg-black text-gray-300 text-center py-6'>
            <p>© 2025 Ishika Gupta • Learner</p>
             <div className="flex justify-center gap-4 mt-2">
        <a href="https://github.com/ishikagupta" target="_blank" className="hover:underline">GitHub</a>
        <a href="mailto:ishika@example.com" className="hover:underline">Email</a>
        <a href="https://linkedin.com/in/ishikagupta" target="_blank" className="hover:underline">LinkedIn</a>
        <a href="/resume.pdf" target="_blank" className="hover:underline">Resume</a>
      </div>
      <p className="mt-2 text-gray-300">Built with ❤️ using React & Tailwind CSS</p>
        </div>
      
    </div>
  )
}

export default Footer
