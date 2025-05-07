import { Navigate } from "react-router-dom";

export default function RedirectToZeroZero() {
  return <Navigate to={`/lesson/0/0`} replace />;
}