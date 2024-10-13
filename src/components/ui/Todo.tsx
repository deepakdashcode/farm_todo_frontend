'use client'

import React from 'react'
import { CiSquareCheck } from 'react-icons/ci';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { ToolTip } from '../ToolTip';
import { Modal } from './Modal';
import { delete_todo, edit_status } from '@/actions/actions';
import toast from 'react-hot-toast';

interface Task {
    id: number;
    content: string;
    is_completed: boolean; // Optional prop
  }
export default function Todo({task}: {task:Task}) {


  const handleStatus = async () => {
    const response = await edit_status(task.id, task.content, task.is_completed)

    if(response.status == 'Success')
    {
      toast.success("Status updated")
    }
    else if(response.status == 'Error'){
      toast.error('Some Error Occurred')
    }
  }


  const handleDelete = async () => {
    const response = await delete_todo(task.id)
    if(response.status == 'Success')
    {
      toast.success("Todo Deleted")
    }
    else if(response.status == 'Error'){
      toast.error('Some Error Occurred')
    }
  }
  return (
    <tr className='flex justify-between items-center border-b border-gray-200 px-2 py-2'>
        <td>
          {task.content}
        </td>
        <td className='flex gap-x-2'>

            <ToolTip tooltip_content='Mark as Completed'>
              <button onClick={handleStatus}>
            <CiSquareCheck size={28} className={`${task.is_completed ? "text-green-800" : "text-gray-400"}`}/>
            </button>
            </ToolTip>
            
            <ToolTip tooltip_content='Edit'>
            
            <Modal edit={true} title='Edit Todo' hint='' task={task}>
            <FiEdit size={24} className='text-blue-500 cursor-pointer'/>
            </Modal>
            
            </ToolTip>
            
            <ToolTip tooltip_content='Delete Task'>
              <button onClick={handleDelete}>
            <FiTrash2 size={24} className='text-red-600 cursor-pointer'/>
            </button>
            </ToolTip>
        
        </td>
    </tr>
  )
}
