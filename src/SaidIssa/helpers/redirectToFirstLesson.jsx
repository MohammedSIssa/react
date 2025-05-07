import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function RedirectToZeroZero() {
  const { classId } = useParams();
  return <Navigate to={`/${classId}/lesson/0/0`} replace />;
}
