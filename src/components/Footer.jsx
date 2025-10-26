import React from 'react'

function Footer() {
  return (
    <div className='flex justify-between items-center text-gray-800'>
        <div className='font-green-500'>
            <img src="./img/logo-green.png" alt="logo" className='h-10'/>
        </div>
        <div className=''>
            <div className='flex justify-center items-center gap-5 font-thin'>

            <p className='hover:text-green-500 cursor-pointer font-thin transition-all duration-300'>About</p>
            <p className='hover:text-green-500 cursor-pointer font-thin transition-all duration-300'>Download App</p>
            <p className='hover:text-green-500 cursor-pointer font-thin transition-all duration-300'>Become a guide</p>
            <p className='hover:text-green-500 cursor-pointer font-thin transition-all duration-300'>Career</p>
            <p className='hover:text-green-500 cursor-pointer font-thin transition-all duration-300'>Company</p>
            </div>
            <div className='font-thin'>
                @ Natours. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer