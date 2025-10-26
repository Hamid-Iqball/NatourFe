import React from 'react'

function Nav() {
  return (
    <div className='grid grid-cols-3 items-center max-w-full mx-4 p-4 bg-black/70 mt-4 text-green-50'>
        <div className='flex justify-start items-center gap-10'>
            <h2>All Tours</h2>
            <input type="text" placeholder='Search' />
        </div>
        <div className='flex justify-center'>
            <img  src='./img/logo-white.png' alt='logo' className='h-10' />
        </div>
        <div className='flex justify-end items-center gap-10'>
            <h2>My Bookings</h2>
            <img src="./img/user.png" alt="user" />
            <h2>
                Hamid 
            </h2>
        </div>
    </div>
  )
}

export default Nav