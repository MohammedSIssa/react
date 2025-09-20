import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setTodos([...todos, { id: id, name: "New Todo" }]);
          setId(id + 1);
        }}
      >
        Add a task
      </button>
      {todos.length > 0 &&
        todos.map((todo) => <h1 key={todo.id}>{todo.name}</h1>)}
    </div>
  );
};

export default App;
