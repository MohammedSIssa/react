import { useParams, Navigate } from "react-router-dom";

export default function GetFirstLesson() {
  const { id, classId } = useParams();
  return <Navigate to={`/${classId}/lesson/${id}/0`} replace />;
}