import { useState } from "react";

export default function Todo({ todo }) {
  const [isDone, setIsDone] = useState(false);
  return (
    <div className="flex gap-5 px-5 w-full bg-zinc-200">
      <input
        type="checkbox"
        value={isDone}
        onChange={(e) => setIsDone(e.target.checked)}
      />
      {isDone ? <del>{todo.text}</del> : <b>{todo.text}</b>}
    </div>
  );
}
