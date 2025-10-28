import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center text-gray-800 gap-4 md:gap-0 py-4 px-4 md:px-0'>
        <div className='font-green-500 order-1 md:order-1'>
            <img src="./img/logo-green.png" alt="logo" className='h-8 md:h-10'/>
        </div>
        <div className='flex flex-col items-center md:items-end gap-3 order-2 md:order-2'>
            <div className='flex flex-wrap justify-center md:justify-center items-center gap-3 md:gap-5 font-thin text-sm md:text-base'>
            <p className='hover:text-green-500 cursor-pointer font-thin transition-all duration-300'>About</p>
            <p className='hover:text-green-500 cursor-pointer font-thin transition-all duration-300'>Download App</p>
            <p className='hover:text-green-500 cursor-pointer font-thin transition-all duration-300 whitespace-nowrap'>Become a guide</p>
            <p className='hover:text-green-500 cursor-pointer font-thin transition-all duration-300'>Career</p>
            <p className='hover:text-green-500 cursor-pointer font-thin transition-all duration-300'>Company</p>
            </div>
            <div className='font-thin text-xs md:text-sm text-center md:text-right'>
                @ Natours. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer