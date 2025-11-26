import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function HCFSID() {
  const { id } = useParams();
  return (
    <div>
      <h1>HCFS with ID: {id}</h1>
      <NavLink
        to={`edit`}
        className="font-bold bg-slate-700 px-5 w-full h-full rounded"
      >
        Edit
      </NavLink>
    </div>
  );
}
