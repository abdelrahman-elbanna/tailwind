import React from 'react'
import boy from './assets/boy.svg'


export default function Home() {
  return<>
    <div className="w-full bg-[#1ABC9C] h-screen flex flex-col items-center justify-center">
        <div className="w-1/6 mb-10">
            <img className='w-full' src={boy} alt="Boy" />
        </div>
        <div className="title">
            <h1 className='text-white text-4xl font-bold uppercase'>start Framework</h1>
                <div className='flex justify-center items-center mt-2'>
                    <div className='bg-white h-1 mx-auto mt-2 w-2/6'></div>
                    <span className="star-1 text-white font-bold text-3xl">★</span>
                    <div className='bg-white h-1 mx-auto mt-2 w-2/6'></div>
                </div>
        </div>
        <p className='text-white text-lg mt-2 mx-auto'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
  </>

}
