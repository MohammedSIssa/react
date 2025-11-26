import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function HCFSID() {
  const { id } = useParams();
  return (
    <div>
      <h1>HCFS with ID: {id}</h1>
    </div>
  );
}
