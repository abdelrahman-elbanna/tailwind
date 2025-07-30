import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return <>
    <footer className='bg-gray-700 pt-5'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-around items-center text-white gap-6 px-4'>
        <div className='text-center w-full lg:w-1/3 text-white'>
          <h3 className='text-3xl font-semibold'>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>

        <div className='text-center w-full lg:w-1/3 text-white'>
          <h3 className='text-3xl font-semibold'>AROUND THE WEB</h3>
          <p>Stay connected with us on social media</p>
          <div className='flex justify-center gap-4 mt-2 flex-wrap'>
            <Link to={"https://facebook.com"}>
              <div className='border rounded-full w-8 h-8 flex justify-center items-center'>
                <i className="_icon_oxsk2_1 fa-brands fa-facebook icon"></i>
              </div>
            </Link>
            <Link to={"https://twitter.com"}>
              <div className='border rounded-full w-8 h-8 flex justify-center items-center'>
                <i className="_icon_oxsk2_1 fa-brands fa-twitter icon"></i>
              </div>
            </Link>
            <Link to={"https://instagram.com"}>
              <div className='border rounded-full w-8 h-8 flex justify-center items-center'>
                <i className="_icon_oxsk2_1 fa-brands fa-linkedin-in icon"></i>
              </div>
            </Link>
            <Link to={"https://instagram.com"}>
              <div className='border rounded-full w-8 h-8 flex justify-center items-center'>
                <i className="_icon_oxsk2_1 fa-solid fa-globe icon"></i>
              </div>
            </Link>
          </div>
        </div>

        <div className='text-center w-full lg:w-1/3 text-white'>
          <h3 className='text-3xl font-semibold'>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, licensed Tailwind <br /> theme created by Route</p>
        </div>
      </div>

      <div className='bg-gray-800 text-center h-15 text-white mt-5'>
        <p className='py-4'>Copyright © Abdelrahman Elbanna 2025</p>
      </div>
    </footer>
  </>
}
