import { useParams, Navigate } from "react-router-dom";

export default function GetFirstLesson() {
  const { id } = useParams();
  return <Navigate to={`/lesson/${id}/0`} replace />;
}