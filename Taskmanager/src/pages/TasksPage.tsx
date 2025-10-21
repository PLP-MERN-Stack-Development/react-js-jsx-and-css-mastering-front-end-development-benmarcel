// import React from 'react'
import Taskmanager from '../components/Taskmanager'
// import { useTheme } from '../context/useContext'


const TasksPage = () => {
  


  return (
    <div className="bg-gray-100 h-full dark:bg-gray-900 dark:text-white w-full mx-auto p-4 md:p-8 text-black font-sans antialiased">
      <h1 className="text-3xl font-bold mb-6 tracking-tight">Tasks Manager</h1>
      <Taskmanager />
    </div>
  )
}

export default TasksPage;