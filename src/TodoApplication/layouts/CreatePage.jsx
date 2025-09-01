import { TodosContext } from "../TodosContext";
import { useContext } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CreatePage() {
  const { setTodos } = useContext(TodosContext);
  const navigate = useNavigate();
  const [newTodo, setNewTodo] = useState({
    name: "",
    details: "",
    date: new Date(),
    priority: "Low",
  });
  return (
    <div className="flex items-center justify-center h-dvh">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Todo Name"
          value={newTodo.name}
          className="bg-slate-300 p-2"
          onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Todo Details"
          value={newTodo.details}
          className="bg-slate-300 p-2"
          onChange={(e) => setNewTodo({ ...newTodo, details: e.target.value })}
        />
        <input
          type="date"
          placeholder="Todo Date"
          value={newTodo.date}
          className="bg-slate-300 p-2"
          onChange={(e) => setNewTodo({ ...newTodo, date: e.target.value })}
        />
        <select
          name="priority"
          id="priority"
          value={newTodo.priority}
          onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value })}
          className="bg-slate-300 p-2"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <div className="flex gap-2 items-center w-full">
          <button type="submit" className="bg-green-500 p-2 w-1/2 text-center">
            Add Task
          </button>
          <NavLink
            onClick={() =>
              setNewTodo({
                name: "",
                details: "",
                date: new Date(),
                priority: "Low",
              })
            }
            to="/"
            className="bg-red-300 p-2 w-1/2 text-center"
          >
            Cancel
          </NavLink>
        </div>
      </form>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (newTodo.name.trim() !== "" && newTodo.details.trim() !== "") {
      setTodos((prev) => [...prev, newTodo]);
      navigate('/')
    }
  }
}
