import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const [login, setLogin] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='mx-4 p-4 bg-black/70 mt-4 text-green-50'>
        {/* Desktop Navigation */}
        <div className='hidden lg:grid grid-cols-3 items-center'>
            <div className='flex justify-start items-center gap-6 xl:gap-10'>
                <Link to='/tours' className='hover:text-green-400 transition-colors cursor-pointer text-sm xl:text-base'>All Tours</Link>
                <input type="text" placeholder='Search' className='px-3 py-1 text-gray-800 rounded text-sm xl:text-base' />
            </div>
            <div className='flex justify-center'>
                <Link to='/'><img  src='./img/logo-white.png' alt='logo' className='h-8 xl:h-10' /></Link>
            </div>
            <div className='flex justify-end items-center gap-6 xl:gap-10'>
                {login ? <>
                    <Link to='/my-bookings' className='hover:text-green-400 transition-colors cursor-pointer text-sm xl:text-base'>My Bookings</Link>
                    <img src="./img/user.png" alt="user" className='h-8 w-8 rounded-full' />
                    <h2 className='text-sm xl:text-base'>Hamid</h2>
                </> :
                <>
                    <Link to='/login' className='cursor-pointer hover:text-green-400 transition-colors text-sm xl:text-base'>Login</Link>
                    <Link to='/signup' className='bg-transparent transition-all duration-300 border border-green-500 hover:bg-green-500 hover:text-green-50 cursor-pointer px-3 py-1 xl:px-4 xl:py-2 rounded-full text-sm xl:text-base'>Sign Up</Link>
                </>
                }
            </div>
        </div>

        {/* Mobile Navigation */}
        <div className='lg:hidden'>
            <div className='flex justify-between items-center'>
                <Link to='/'><img  src='./img/logo-white.png' alt='logo' className='h-8' /></Link>

                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className='text-green-50 hover:text-green-400 transition-colors hover:cursor-pointer'
                >
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        {mobileMenuOpen ? (
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        ) : (
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className='mt-4 pb-4 border-t border-green-500/30'>
                    <div className='flex flex-col gap-4 mt-4'>
                        <input type="text" placeholder='Search' className='px-3 py-2 text-gray-800 rounded text-sm w-full' />
                        <Link to='/tours' className='hover:text-green-400 transition-colors cursor-pointer text-sm py-2'>All Tours</Link>
                        {login ? (
                            <>
                                <Link to='/my-bookings' className='hover:text-green-400 transition-colors cursor-pointer text-sm py-2'>My Bookings</Link>
                                <div className='flex items-center gap-3 py-2'>
                                    <img src="./img/user.png" alt="user" className='h-6 w-6 rounded-full' />
                                    <span className='text-sm'>Hamid</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to='/login' className='cursor-pointer hover:text-green-400 transition-all duration-300 text-sm py-2' onClick={() => setMobileMenuOpen(false)}>Login</Link>
                                <Link to='/signup' className='bg-transparent transition-all duration-300 border border-green-500 hover:bg-green-500 hover:text-green-50 cursor-pointer px-4 py-2 rounded-full  text-sm text-center' onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Nav