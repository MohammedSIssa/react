import { useState } from "react";
import { TodosContext } from "./TodosContext";
import { Route, Routes, HashRouter } from "react-router-dom";

import Homepage from "./layouts/HomePage";
import CreatePage from "./layouts/CreatePage";

import "./custom.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  return (
    <HashRouter>
      <TodosContext.Provider value={{ todos, setTodos }}>
        <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="/create" index element={<CreatePage />} />
        </Routes>
      </TodosContext.Provider>
    </HashRouter>
  );
}

export default TodoApp;
