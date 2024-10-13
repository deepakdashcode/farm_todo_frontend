'use server'
import { revalidatePath } from "next/cache"
// add_todo

export async function add_todo(state: {status: string, message: string}, formData: FormData){
    const new_todo = formData.get('add_task') as string
    try{
        const response = await fetch('http://localhost:8000/todos/', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({content: new_todo})
        
        })
        revalidatePath('/todos')

        const data = await response.json()
        if(data.content){
            revalidatePath('/todos')
        }
        return {status: "Success", message: "Todo Added Successfully"}
    }
    catch(error){
        console.log(error);
        return {status: "Error", message: "Something went wrong"}
    }
}



export async function edit_todo(state: {status: string, message: string}, {id, content, is_completed}: {id: number, content:string, is_completed: boolean}){
   // const new_todo = formData.get('add_task') as string
    try{
        const response = await fetch(`http://localhost:8000/todos/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json",
            },
        body: JSON.stringify({id: id, content: content, is_completed: is_completed})
        
        })

        const res = await response.json()
        console.log(res);
        revalidatePath('/todos')
        return {status: "Success", message: "Todo UPDATED Successfully"}
    }
    catch(error){
        console.log(error);
        return {status: "Error", message: "Something went wrong"}
    }
}


export async function edit_status(id:number, content:string, is_completed:boolean){
    try{
        const response = await fetch(`http://localhost:8000/todos/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json",
            },
        body: JSON.stringify({id: id, content: content, is_completed: !is_completed})
        
        })

        const res = await response.json()
        console.log(res);
        revalidatePath('/todos')
        return {status: "Success", message: "Todo Status UPDATED Successfully"}
    }
    catch(error){
        console.log(error);
        return {status: "Error", message: "Something went wrong"}
    }
}



export async function delete_todo(id:number){
    try{
        const response = await fetch(`http://localhost:8000/todos/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json",
            },
        
        
        });

        const res = await response.json()
        console.log(res);
        revalidatePath('/todos')
        return {status: "Success", message: "Todo Deleted Successfully"}
    }
    catch(error){
        console.log(error);
        return {status: "Error", message: "Something went wrong"}
    }
}