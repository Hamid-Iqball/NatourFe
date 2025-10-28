import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import AppRoutes from './Routes/Routes'

function App() {
  return (
    <Router>
      <div className='font-lato min-h-screen flex flex-col'>
        <nav className='sticky top-0 z-50'>
          <Nav/>
          
        </nav>
        <main className='grow text-gray-600'>
          <AppRoutes />
        </main>
        <footer className='p-5 bg-amber-50 m-5'>
          <Footer/>
        </footer>
      </div>
    </Router>
  )
}

export default App