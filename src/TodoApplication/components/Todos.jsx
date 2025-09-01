import Todo from "./Todo";
import { TodosContext } from "../TodosContext";
import { useContext } from "react";

export default function Todos() {
  const { todos } = useContext(TodosContext);
  const title = todos.length > 1 ? "Todos" : "Todo"
  return (
    <div>
      {todos.length === 0 && <h1>Your Todolist is Empty!</h1>}
      {todos && todos.length > 0 && <h1>{todos.length} {title}</h1>}
    </div>
  );
}
