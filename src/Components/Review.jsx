// eslint-disable-next-line no-unused-vars
import React from 'react'
import user1 from '../assets/profile-pictures/dilajla.jpg'
import user2 from '../assets/profile-pictures/ganja.jpg'
import user3 from '../assets/profile-pictures/mohit.jpg'
import user4 from '../assets/profile-pictures/user4.jpg'
import user5 from '../assets/profile-pictures/user5.jpg'
import user6 from '../assets/profile-pictures/user6.jpg'

const Review = () => {
    return (
        <div className='mt-10 tracking-wide' name='Review'>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center py-10 lg:py-10'>What people are saying</h2>
            <div className='flex flex-wrap justify-center'>
            <div className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <div className='font-thin bg-neutral border border-neutral-800 rounded-md text-md p-6'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto velit temporibus fuga officiis molestiae aspernatur eius, sed molestias neque culpa possimus laboriosam incidun</p>
                        <div className='flex items-start mt-6'>
                            <img src={user1} alt="img" className='size-16 mr-6  border rounded-full border-neutral-300' />
                            <div >
                                <h6 className='mb-2'>Aniket </h6>
                                <span>Dwarka, West Delhi</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <div className='font-thin bg-neutral border border-neutral-800 rounded-md text-md p-6'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto velit temporibus fuga officiis molestiae aspernatur eius, sed molestias neque culpa possimus laboriosam incidun</p>
                        <div className='flex items-start mt-6'>
                            <img src={user2} alt="img" className='size-16 mr-6  border rounded-full border-neutral-300' />
                            <div className=''>
                                <h6 className='mb-2'>Deepak baghel</h6>
                                <span>Azadpur, Delhi</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <div className='font-thin bg-neutral border border-neutral-800 rounded-md text-md p-6'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto velit temporibus fuga officiis molestiae aspernatur eius, sed molestias neque culpa possimus laboriosam incidun</p>
                        <div className='flex items-start mt-6'>
                            <img src={user3} alt="img" className='size-16 mr-6  border rounded-full border-neutral-300' />
                            <div className=''>
                                <h6 className='mb-2'>Mohit</h6>
                                <span>Laxmi Nagar, East Delhi</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <div className='font-thin bg-neutral border border-neutral-800 rounded-md text-md p-6'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto velit temporibus fuga officiis molestiae aspernatur eius, sed molestias neque culpa possimus laboriosam incidun</p>
                        <div className='flex items-start mt-6'>
                            <img src={user4} alt="img" className='size-16 mr-6  border rounded-full border-neutral-300' />
                            <div className=''>
                                <h6 className='mb-2'>Ankush Rawat</h6>
                                <span>Laxmi Nagar, East Delhi</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <div className='font-thin bg-neutral border border-neutral-800 rounded-md text-md p-6'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto velit temporibus fuga officiis molestiae aspernatur eius, sed molestias neque culpa possimus laboriosam incidun</p>
                        <div className='flex items-start mt-6'>
                            <img src={user5} alt="img" className='size-16 mr-6  border rounded-full border-neutral-300' />
                            <div className=''>
                                <h6 className='mb-2'>Aditya Rawat</h6>
                                <span>Laxmi Nagar, East Delhi</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <div className='font-thin bg-neutral border border-neutral-800 rounded-md text-md p-6'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto velit temporibus fuga officiis molestiae aspernatur eius, sed molestias neque culpa possimus laboriosam incidun</p>
                        <div className='flex items-start mt-6'>
                            <img src={user6} alt="img" className='size-16 mr-6  border rounded-full border-neutral-300' />
                            <div className=''>
                                <h6 className='mb-2'>Aniket Singh</h6>
                                <span>Dwarka, East Delhi</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Review