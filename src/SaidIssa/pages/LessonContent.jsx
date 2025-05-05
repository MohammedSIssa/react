import { Routes, Route } from "react-router-dom";
import Lesson from "../Lesson";

import { useParams } from "react-router-dom";

export default function LessonContent({ data }) {
  const { id } = useParams();
  return (
    <div className="flex flex-col w-full gap-5 py-5 px-10">
      <h1 className="text-4xl">{data[id].title}</h1>
      {data[id].videoID && (
        <iframe
          width="560"
          height="315"
          src={
            "https://www.youtube.com/embed/-" +
            data[id].videoID +
            "?si=cuJm1y0NrzUmwoXo"
          }
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
}
