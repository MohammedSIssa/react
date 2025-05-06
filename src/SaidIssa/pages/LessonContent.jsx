import { useParams } from "react-router-dom";

export default function LessonContent({ data }) {
  const { id, chapterId } = useParams();

  return (
    <div className="flex flex-col w-full gap-5 py-5 px-10">
      {data[id].chapters[chapterId].lesson}
    </div>
  );
}
