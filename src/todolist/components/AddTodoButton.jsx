import { useState } from "react";
import TodoForm from "./TodoForm";

export default function AddTodo() {
  const [isOpen, setIsOpen] = useState(false);

  function handleCancel() {
    setIsOpen(false)
  }

  return (
    <>
      <button
        className="p-5 px-12 bg-zinc-900 text-zinc-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        Add Todo
      </button>
      {isOpen && <TodoForm handleCancel={handleCancel} />}
    </>
  );
}
