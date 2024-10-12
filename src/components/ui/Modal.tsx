import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AddTask from "./AddTask"
import EditTask from "./EditTask";
interface Task {
  id: number;
  content: string;
  is_completed: boolean; // Optional prop
}
export function Modal({edit, task, children, title, hint}: {edit: boolean, task: Task, children: React.ReactNode, title: string, hint: string}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {edit?<EditTask task={task} placeholder="Edit Task" />:<AddTask placeholder={hint} defaultValue={task.content}/>}
          
        </DialogHeader>
        
      </DialogContent>
    </Dialog>
  )
}
