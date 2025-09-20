import { useState } from "react";

const TodoItem = () => {
  const [isEdit, setIsEdit] = useState(false);
  if (isEdit) {
    return (
      <input type="text" />
    )
  }
}

export default TodoItem