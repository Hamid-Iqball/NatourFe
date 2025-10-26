import React from 'react'
import Tour from './pages/Tour'
import Nav from './components/Nav'
import Footer from './components/Footer'
function App() {
  return (
    <div className='font-lato min-h-screen flex flex-col'>
      <nav>
        <Nav/>
      </nav>
      <main className='grow'>
        <Tour/>
      </main>
      <footer className='p-5'>
        <Footer/>
      </footer>
    </div>
  )
}

export default App