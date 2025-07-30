import React from 'react'

export default function About() {
  return <>
    <div className="w-full bg-[#1ABC9C] min-h-screen flex flex-col items-center justify-center px-4">
            
      <div className="title text-center">
        <h1 className='text-white text-4xl font-bold uppercase'>About Component</h1>
        <div className='flex justify-center items-center mt-2'>
          <div className='bg-white h-1 mx-auto mt-2 w-2/6'></div>
          <span className="star-1 text-white font-bold text-3xl">★</span>
          <div className='bg-white h-1 mx-auto mt-2 w-2/6'></div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row text-white justify-between pt-10 w-full md:w-3/4 gap-6 md:gap-0'>
        <p className='w-full md:w-1/2 md:ms-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p className='w-full md:w-1/2 md:ms-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>

    </div>
  </>
}
