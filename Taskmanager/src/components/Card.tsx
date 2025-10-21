// import React from 'react'
interface CardProps {
  userid?: string;
  id: number;
  title: string;
  completed: boolean;
}
const Card = ({ id, title, completed }: CardProps) => {
  return (
    <div className="bg-white rounded shadow p-4 dark:bg-gray-800 dark:text-white hover:shadow-lg transition-shadow duration-300">
      <h2 id={`card-${id}`}>{title}</h2>
      <p>Completed: {completed ? "Yes" : "No"}</p>
    </div>
  )
}

export default Card