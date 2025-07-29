import React from 'react'

export default function About() {
  return<>
    <div className="w-full bg-[#1ABC9C] h-screen flex flex-col items-center justify-center">
            
            <div className="title">
                <h1 className='text-white text-4xl font-bold uppercase'>About Component</h1>
                    <div className='flex justify-center items-center mt-2'>
                        <div className='bg-white h-1 mx-auto mt-2 w-2/6'></div>
                        <span className="star-1 text-white font-bold text-3xl">★</span>
                        <div className='bg-white h-1 mx-auto mt-2 w-2/6'></div>
                    </div>
            </div>
            <div className='flex text-white px-10 justify-between pt-10 w-3/4 '>
            <p className='w-1/2 ms-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className='w-1/2 ms-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            </div>
    </>
}
