import { NavLink } from "react-router-dom";
import Lesson from "./Lesson";

export default function Lessons({ data }) {
  return (
    <div className="h-full flex p-5 gap-2 flex-col w-1/4 bg-zinc-900 text-zinc-100">
      {data.map((dataItem, id) => (
        <Lesson id={id} title={dataItem.title} />
      ))}
    </div>
  );
}
