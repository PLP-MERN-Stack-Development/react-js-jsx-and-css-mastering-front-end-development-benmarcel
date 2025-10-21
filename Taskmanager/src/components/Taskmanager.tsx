import {useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import type {item} from '../types'
import Button from './Button';
import Task from './Task';
const Taskmanager = () => {
    const [taskInput, setTaskInput] = useState("");
  const { storedValue, addTask, deleteTask, toggleTaskCompletion } = useLocalStorage();

  return (
    <>
  

<form
  action=""
  onSubmit={(e) => {
    e.preventDefault();
    addTask(taskInput);
    setTaskInput("");
  }}
  // Flex layout for horizontal alignment, gap for spacing, and margin-bottom
  className='flex space-x-3 mb-6 p-4 rounded-lg 
             bg-gray-100 dark:bg-gray-700 
             shadow-md dark:shadow-xl'
>
  <input
    type="text"
    value={taskInput}
    onChange={(e) => setTaskInput(e.target.value)}
    placeholder="What needs to be done?"
    // Input styling: takes up maximum space (flex-grow), padding, focus styles
    className='grow px-4 py-2 border rounded-lg 
               focus:outline-none focus:ring-2 focus:ring-blue-500 
               bg-white dark:bg-gray-600 dark:text-gray-100 
               border-gray-300 dark:border-gray-500'
  />
  
  {/* The Button component already handles its own primary styling */}
  <Button type="submit" variant="primary" disabled={!taskInput.trim()}>
    Add Task
  </Button>
</form>
      {storedValue.map((task: item) => (
        <Task key={task.id} task={task} onDelete={deleteTask} onToggle={toggleTaskCompletion} />
      ))}
    </>
  )
}

export default Taskmanager