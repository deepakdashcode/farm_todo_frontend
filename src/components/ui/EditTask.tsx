'use client'

import { useFormState } from 'react-dom'
import React, { useEffect } from 'react'
import { edit_todo } from '@/actions/actions'
import toast from 'react-hot-toast'
import SubmitButton from './SubmitButton'
import { useState } from 'react'


interface Task {
    id: number;
    content: string;
    is_completed: boolean; // Optional prop
  }

export default function EditTask({task, placeholder}: {task: Task,placeholder: string}) {
  const [value, setValue] = useState(task.content)
  const [state, formAction] = useFormState(edit_todo, {status: "", message: ""})
  const {status, message} = state

  useEffect(()=>{
    if(status == "Success")
    {
      toast.success(message)
    }
    else if(status == 'Error'){
      toast.error(message)
    }
  }, [state])


  const handleSubmit = () => {
    const id:number = task.id
    const content:string = value
    const is_completed:boolean = task.is_completed
    formAction({id, content, is_completed})
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
}

  return (
    <form className='flex flex-col justify-between items-center gap-x-3 w-full' action={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder={placeholder} required name='edit_task' value={value}
        className='w-full px-2 py-1 border border-gray-100 rounded-md'
        />
        <SubmitButton/>
    </form>
  )
}
