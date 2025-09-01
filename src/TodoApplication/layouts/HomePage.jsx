import { NavLink } from "react-router-dom";
import Todos from "../components/Todos";
import Controls from "../components/Controls";

export default function Homepage() {
  return (
    <div className="flex">
      <div className="controls-section fixed left-0 top-0 h-dvh flex flex-col w-50 bg-slate-300">
        <Controls />
      </div>
      <div className="todos-section ml-50 w-full bg-slate-100 min-h-dvh p-5">
        <Todos />
      </div>
    </div>
  );
}
