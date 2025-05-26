import { TodosContext } from "../TodosContext";
import { useContext, useState } from "react";

export default function TodoForm({ handleCancel }) {
  const { setTodos } = useContext(TodosContext);

  const [error, setError] = useState(null);

  const [todoDetails, setTodoDetails] = useState({ text: "", priority: "Low" });

  function handleSubmit(e) {
    e.preventDefault();
    if (todoDetails.text.trim() !== "") {
      setTodos((prev) => [...prev, todoDetails]);
      setTodoDetails({ text: "", priority: "Low" });
      handleCancel();
    } else {
      setError("Insufficient Info.");
    }
  }

  return (
    <form
      className="absolute form-div px-10 py-20 bg-zinc-50 border-1 rounded-xl border-zinc-400 shadow-xl top-1/2 left-1/2 flex flex-col gap-5"
      onSubmit={handleSubmit}
    >
      <input
        className="border-2 border-zinc-400 outline-0 rounded-xl px-5 py-2"
        type="text"
        placeholder="Enter your new todo"
        value={todoDetails.text}
        onChange={(e) =>
          setTodoDetails({ ...todoDetails, text: e.target.value })
        }
      />
      <select
        className="px-5 py-2 outline-0 bg-zinc-200 rounded-xl"
        value={todoDetails.priority}
        onChange={(e) =>
          setTodoDetails({ ...todoDetails, priority: e.target.value })
        }
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <div className="flex gap-10 items-center justify-center relative">
        <button
          className="bg-zinc-900 text-zinc-50 p-3 px-5 rounded-lg"
          type="submit"
        >
          Add
        </button>
        <button
          className="bg-zinc-200 p-3 px-5 rounded-lg"
          onClick={handleCancel}
        >
          Cancel
        </button>

        {error && <p className="absolute bottom-[-35px] left-0 text-red-400">{"❌ "+error}</p>}
      </div>
    </form>
  );
}
