import { useParams } from "react-router-dom";

export default function HCFSEdit() {
  const { id } = useParams();
  return <div>Edit HCFS with ID: {id}</div>;
}
