import React, { useState } from 'react'
import img1 from './assets/imgi_1_poert1.png'
import img2 from './assets/imgi_2_port2.png'
import img3 from './assets/imgi_3_port3.png'

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [img1, img2, img3, img1, img2, img3];

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center relative py-10">
        <div className="title">
          <h1 className='text-center text-slate-700 text-4xl font-bold uppercase'>contact section</h1>
          <div className='flex justify-center items-center mt-2'>
            <div className='bg-slate-700 h-1 mx-auto mt-2 w-2/6'></div>
            <span className="star-1 text-slate-700 font-bold text-3xl">★</span>
            <div className='bg-slate-700 h-1 mx-auto mt-2 w-2/6'></div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4 mx-auto mt-10'>
          {images.map((img, index) => (
            <div
              key={index}
              className='rounded-2xl overflow-hidden relative group cursor-pointer'
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} className='rounded-2xl' alt={`object-img-${index}`} />
              <div className='bg-[#1ABC9C]/70 absolute top-0 left-0 w-full h-full hidden group-hover:block transition ease-in-out duration-300'>
                <span className='text-white font-bold text-7xl flex items-center justify-center h-full'>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="selected"
              className="max-w-[80%] max-h-[80%] rounded-2xl shadow-xl cursor-pointer"
            />
          </div>
        )}
      </div>
    </>
  );
}
