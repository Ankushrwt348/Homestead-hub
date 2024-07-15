// eslint-disable-next-line no-unused-vars
import React from 'react'

const Services = () => {
    return (
        <div name='Services'>
            <div className='relative mt-20 border-b border-neutral-800 min-h-[700px]'>
                <div className="text-center">
                    <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-lg font-medium px-2 py-1 uppercase text-center '>Services</span>
                    <h2 className='text-4xl sm:6xl lg:7xl mt-8 tracking-wide lg:mt-15'> Services <span className='bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text'>We provide</span></h2>
                </div>
                <div className=" flex flex-wrap justify-center items-center mt-10 lg:mt-20">
                    <div className='w-full sm:w-1/2 lg:w-1/3 border border-orange-500 rounded-md m-10 p-5'>
                        <h5 className='mt-2 mb-6 text-2xl'>AC Installation and Uninstallation</h5>
                        <p className='text-neutral-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero accusamus eos,</p>
                    </div>
                    <div className='w-full sm:w-1/2 lg:w-1/3 border rounded-md m-10 border-orange-500 p-5'>
                        <h5 className='mt-2 mb-6 text-2xl'>Split AC Service/Repair</h5>
                        <p className='text-neutral-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero accusamus eos,</p>
                    </div>
                    <div className='w-full sm:w-1/2 lg:w-1/3 border rounded-md m-10 p-5 border-orange-500'>
                        <h5 className='mt-2 mb-6 text-2xl'>Window AC Service/Repair</h5>
                        <p className='text-neutral-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero accusamus eos, </p>
                    </div>
                    <div className='w-full sm:w-1/2 lg:w-1/3 border rounded-md m-10 border-orange-500 p-5'>
                        <h5 className='mt-2 mb-6 text-2xl'>Annual Maintaince Service</h5>
                        <p className='text-neutral-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero accusamus eos, </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Services