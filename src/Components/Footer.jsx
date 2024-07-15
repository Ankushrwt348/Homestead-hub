// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => {
    return (
        <div className='mb-5 sm:4xl lg:5xl '>
        <div className=' mt-10 border-t border-neutral-700 py-10 flex justify-around'>
            <div className=' flex items-center justify-center text-2xl tracking-wide font-bold sm:text-3xl lg:text-4xl'>
                <h1>Homestead <span className='bg-gradient-to-r from-orange-500 to-orange-700  text-transparent bg-clip-text'>Help</span></h1>
            </div>
            <div className="flex justify-between w-1/2 sm:w-1/4 lg:w-1/3 ">
                <div >
                    <h3 className='text-md font-semibold mb-4'>Resouces</h3>
                    <ul className='text-neutral-400'>
                        <li><a href="#">privacy-policy
                        </a></li>
                        <li><a href="#">About Us
                        </a></li>
                        <li><a href="#">Blog
                        </a></li>
                    </ul>
                </div>
                <div>
                <h3 className='text-md font-semibold mb-4'>Links</h3>

                    <ul className='text-neutral-500'>
                        <li><a href="#">faq
                        </a></li>
                        <li><a href="#">Terms-conditions
                        </a></li>
                        <li><a href="#">Contact</a></li>
                        </ul>
                       

                </div>
                <div>
                    <h3 className='text-md font-semibold mb-4'>Quick links</h3>
                    <ul className='text-neutral-500'>
                        <li><a href="#">Location
                        </a></li>
                        <li><a href="#">+91 99718 34301
                        </a></li>
                        <li><a href="#">Email id
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <p className='text-neutral-600 text-center'> Made by Ankush ❤️</p>
        </div>
    )
}

export default Footer