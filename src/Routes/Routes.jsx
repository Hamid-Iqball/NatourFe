import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Overview from '../pages/Overview'
import Tour from '../pages/Tour'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import MyBookings from '../pages/MyBookings'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Overview />} />
      <Route path='/overview' element={<Overview />} />
      <Route path='/tour/:id' element={<Tour />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/my-bookings' element={<MyBookings />} />
    </Routes>
  )
}

export default AppRoutes