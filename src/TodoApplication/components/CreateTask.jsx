import { NavLink } from "react-router-dom";

export default function CreateTask() {
  return (
    <NavLink
      className="bg-yellow-700 text-yellow-100 text-center m-2 p-2 rounded-2xl"
      to="/create"
    >
      Create a Task
    </NavLink>
  );
}
