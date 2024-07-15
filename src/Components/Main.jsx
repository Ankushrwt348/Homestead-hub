/* eslint-disable no-unused-vars */
import React from 'react'
import video from '../assets/videoplayback.mp4'
import photo from '../assets/main.jpg'

const Main = () => {
    return (
        <>
            <div></div>
            <div className='mt-6 lg:mt-24 w-full flex-col flex justify-center items-center'>
                <div className='lg:space-y-10 space-y-7 m-10'>
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">Ac Repair & <span className='bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text'>Service</span> </h1>
                    <p className='text-xl sm:text-2xl lg:text-3xl text-center text-neutral-300 '>Get #1 AC service & AC repair experts in Delhi NCR, India</p>
                </div>
                <div className='flex justify-center m-5 space-x-20 '>
                  <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-700 text-lg py-3 px-4  rounded-md'>Book now</a>
                  <a href="#" className='py-3 px-4 border rounded-md'>Services</a>
                </div>
                <div className='flex justify-center mt-10 space-x-8 '>
                    <video className='w-1/3 border-orange-600 shadow-orange-400 border rounded-md ' src={video} autoPlay loop></video>
               <img src={photo} className='w-1/3 rounded-md border border-orange-600 shadow-orange-500' alt="" />
                </div>
                
            </div>
        </>
    )
}

export default Main