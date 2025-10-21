import { useEffect, useState } from "react";
import type {item} from "../types";


const useLocalStorage = () => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem("taskData");
    return item ? JSON.parse(item) : [];
  });

  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(storedValue));
  }, [storedValue]);

    // add task
  const addTask = (text: string) => {
    if (text.trim() === "") return;
    const newTask: item = {
      id: new Date().getTime(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setStoredValue((prevTasks: item[]) => [...prevTasks, newTask]);
  };
  // delete task
  const deleteTask = (id: number) => {
    setStoredValue((prevTasks: item[]) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };
  // toggle task completion
  const toggleTaskCompletion = (id: number) => {
    setStoredValue((prevTasks: item[]) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return { storedValue, addTask, deleteTask, toggleTaskCompletion };
};

export default useLocalStorage;
