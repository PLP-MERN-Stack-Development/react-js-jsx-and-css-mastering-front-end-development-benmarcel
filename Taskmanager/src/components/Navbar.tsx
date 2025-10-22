import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { useTheme } from '../context/useContext';
import {FaSun, FaMoon} from 'react-icons/fa';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

  return (
    // floating navbar
  
    <header className="bg-[#F5F6FA] text-black p-4 flex justify-between items-center shadow-md rounded relative">
        {/* logo */}
        <div className="text-2xl font-bold">Task Flow</div>
      {/* navigation links */}
      <nav className="space-x-4 hidden md:flex">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>Home</NavLink>
        <NavLink to="/resources" className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>Resources</NavLink>
        <NavLink to="/tasks" className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>Tasks</NavLink>
      </nav>
     
      {/* hamburger menu */}
      <div className="md:hidden right-0 mr-6 flex items-center">
        <button className="focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
       {/* theme toggle button */}
      <button onClick={toggleTheme} className="ml-4 focus:outline-none md:static absolute right-2 md:right-16">
        {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
      </button>
      {/* mobile menu */}
      <div className={`top-16 left-0 w-full  md:static mt-4 bg-white text-black p-4 dark:bg-gray-900 ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col space-y-2">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>Home</NavLink>
          <NavLink to="/resources" className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>Resources</NavLink>
          <NavLink to="/tasks" className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>Tasks</NavLink>
        </nav>
      </div>
    </header>
    
  )
}

export default Navbar