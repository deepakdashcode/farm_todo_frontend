'use client'

import { useFormState } from 'react-dom'

import React, { useEffect } from 'react'
import { add_todo } from '@/actions/actions'
import { useRef } from 'react'
import toast from 'react-hot-toast'
import SubmitButton from './SubmitButton'
export default function AddTask({placeholder, defaultValue}: {placeholder: string, defaultValue: string}) {
  
  const ref = useRef<HTMLFormElement>(null)
  const [state, formAction] = useFormState(add_todo, {status: "", message: ""})
  const {status, message} = state

  useEffect(()=>{
    if(status == "Success")
    {
      ref.current?.reset()
      toast.success(message)
    }
    else if(status == 'Error'){
      toast.error(message)
    }
  }, [state])
  return (
    <form ref={ref} className='flex flex-col justify-between items-center gap-x-3 w-full' action={formAction}>
        <input type="text" placeholder={placeholder} required name='add_task' defaultValue={defaultValue}
        className='w-full px-2 py-1 border border-gray-100 rounded-md'
        />
        <SubmitButton/>
    </form>
  )
}
