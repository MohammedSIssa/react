import { useState } from "react";

export default function Todo({ todo }) {
  const [isDone, setIsDone] = useState(false);
  return (
    <div
      className={`flex gap-10 p-5 border-2 items-center ${
        isDone ? "bg-green-300" : "bg-slate-200"
      }`}
    >
      <input
        type="checkbox"
        name="isDone"
        id="isDone"
        checked={isDone}
        onChange={(e) => setIsDone(e.target.checked)}
      />
      <p>{isDone ? <del>{todo.name}</del> : todo.name}</p>
      <small>{todo.details}</small>
    </div>
  );
}
