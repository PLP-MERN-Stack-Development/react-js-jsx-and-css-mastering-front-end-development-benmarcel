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
        <div className="text-2xl font-bold mb-2">Task Flow</div>
      {/* navigation links */}
      <nav className="flex space-x-4">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/resources" className={({ isActive }) => (isActive ? 'active' : '')}>Resources</NavLink>
        <NavLink to="/tasks" className={({ isActive }) => (isActive ? 'active' : '')}>Tasks</NavLink>
      </nav>
      {/* theme toggle button */}
      <button onClick={toggleTheme} className="ml-4 focus:outline-none ">
        {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
      </button>
      {/* hamburger menu */}
      <div className="md:hidden">
        <button className="focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {/* mobile menu */}
      <div className={`md:hidden absolute top-16 left-0 w-full bg-white text-black p-4 dark:bg-gray-900 transition-transform ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <nav className="flex flex-col space-y-2">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <NavLink to="/resources" className={({ isActive }) => (isActive ? 'active' : '')}>Resources</NavLink>
          <NavLink to="/tasks" className={({ isActive }) => (isActive ? 'active' : '')}>Tasks</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar