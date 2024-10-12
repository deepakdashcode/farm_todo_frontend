import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal";
import TodoTable from "@/components/ui/TodoTable";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto mt-8">
      <section>
        <Modal edit={false} title="Create Todo" hint="Add Task" task={{id:-1, is_completed:true, content:""}}>
        <Button variant="default" className="w-full bg-teal-600 px-2 py-1 text-lg text-white uppercase">ADD Task</Button>
        </Modal>
      </section>

      {/* TODO TABLE */}
      <section className="mt-4">
        <TodoTable/>     
      </section>
    </main>
  );
}
