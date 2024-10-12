import React from 'react'
import Todo from './Todo'
import { log } from 'console';
interface Task {
    id: number;
    content: string;
    is_completed: boolean; // Optional prop
  }
export default async function TodoTable() {
    const response = await fetch('http://localhost:8000/todos/');
    const data = await response.json();

    const todolist: Task[] = data.sort((a: Task, b: Task)=> a.id - b.id)
    
  return (
    <table className='w-full'>
        <thead>
            <tr className='flex justify-between items-center px-2 py-1 bg-gray-100 shadow-md'>
                <th>Task</th>
                <th>Actions</th>
            </tr>
        </thead>
        
        <tbody>
            {
                todolist.map((task)=>(
                    <Todo key={task.id} task={task} />
                ))
            }
            
        </tbody>
    </table>
  )
}
