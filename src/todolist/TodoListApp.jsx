import { useState } from "react";
import { TodosContext } from "./TodosContext";
import List from "./components/List";

import './custom.css'

const TodoListApp = () => {
  const [todos, setTodos] = useState([]);
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <List />
    </TodosContext.Provider>
  );
};

export default TodoListApp;
