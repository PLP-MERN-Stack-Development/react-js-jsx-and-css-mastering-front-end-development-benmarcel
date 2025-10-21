import type { item } from "../types";
import Button from "./Button";
// Define the props for the Task component
interface TaskProps {
  task: item;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const Task = ({ task, onDelete, onToggle }: TaskProps) => {
  return (
    <div className="bg-white rounded shadow p-4 mb-4 dark:bg-gray-800 dark:text-white">
      <h3>{task.text.toLocaleUpperCase()}</h3>
      <p>Created at: {task.createdAt}</p>
     <div className=" mt-4 space-x-2">
       <Button variant="secondary" onClick={() => onToggle(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </Button>
      <Button variant="danger" onClick={() => onDelete(task.id)}>Delete</Button>
     </div>
    </div>
  )
}

export default Task
