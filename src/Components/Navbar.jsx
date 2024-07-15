/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import logo2 from '../assets/logggo.png'

import { Menu, X } from "lucide-react"
const Navbar = () => {
  const [mobiledrawer, setmobiledrawer] = useState(false);
  const togglenav = () => {
    setmobiledrawer(!mobiledrawer);
  }
  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur border-b border-neutral-700/80'>
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className='size-10 mr-1' src={logo} alt="" />
            <span className='text-xl tracking-tight'>Homestead hub</span>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-10'>
            <li>
              <a href="#">pricing</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>

          </ul>
          <div className="hidden lg:flex justify-center space-x-10 items-center">
            <a href="#" className='border py-2 px-3 rounded-md'>sign in</a>
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-5 rounded-md'>Create an account</a>
          </div>
          <div className="lg:hidden md:flex flex-cols justify-end">
            <button onClick={togglenav} >
              {mobiledrawer ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobiledrawer && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden ">
            <ul className='space-y-5 mb-4'> <li>
              <a href="#">pricing</a>
            </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
            </ul>
            <div className='flex space-x-5'>
              <a href="#" className='border py-2 px-3 rounded-md '>sign in</a>
              <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an account</a>
            </div>
          </div>

        )}
      </div>
    </nav>
  )
}

export default Navbar