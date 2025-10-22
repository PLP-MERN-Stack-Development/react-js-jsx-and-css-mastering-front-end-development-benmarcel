// import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className=" bg-gray-500 text-white p-4 text-center bottom-0 w-full dark:bg-gray-700 transition-colors duration-300 mt-auto">
        {/* quick links */}
        <div className="mb-2 flex justify-center space-x-4 flex-col md:flex-row items-center">
          <Link to="/" className="text-white hover:underline text-center">Home</Link>
          <Link to="/resources" className="text-white hover:underline text-center">Resources</Link>
          <Link to="/tasks" className="text-white hover:underline text-center">Tasks</Link>
        </div>

      <p>&copy; {new Date().getFullYear()} Task flow. All rights reserved.</p>
    </footer>
  )
}

export default Footer