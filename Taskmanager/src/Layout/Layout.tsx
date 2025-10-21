// import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ThemeProvider from '../context/ThemeProvider'

const Layout = () => {
  return (
    <ThemeProvider>
      <div className='bg-[#F5F6FA] min-h-screen flex flex-col dark:bg-gray-900 dark:text-white transition-colors duration-300'>
        <Navbar />
        <main className='min-h-full'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
