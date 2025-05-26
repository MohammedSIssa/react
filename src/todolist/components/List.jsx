import AddTodo from "./AddTodoButton"
import { useContext } from "react"
import { TodosContext } from "../TodosContext"
import Todo from "./Todo"

export default function List() {
  const { todos } = useContext(TodosContext)
  return (
    <div className="todos">
      <AddTodo />
      {todos.length === 0 && <p>You have no todos.</p>}
      {todos.map(todo => <Todo todo={todo} key={todo.text + "-" + todo.priority + "-" + Math.floor(Math.random() * 1000)} />)}
    </div>
  )
}