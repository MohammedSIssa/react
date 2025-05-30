import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LessonContent({ data }) {
  const { id, chapterId } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(data[id].sections[chapterId].sectionLesson);
  }, [data, id, chapterId]);

  return (
    <div className="flex flex-col w-full gap-5 p-10 bg-emerald-100 text-emerald-950">
      <h1 className="font-bold text-xl md:text-2xl xl:text-3xl">{content}</h1>
    </div>
  );
}
