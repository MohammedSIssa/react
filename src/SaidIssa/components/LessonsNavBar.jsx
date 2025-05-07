import Lesson from "./Lesson";

export default function LessonsNavBar({ data, classId }) {
  return (
    <div className="h-full flex p-5 flex-col w-80 min-w-80 max-w-80 bg-zinc-900 text-zinc-100">
      {data.map((dataItem, id) => (
        <Lesson
          key={id}
          id={id}
          chapter={dataItem.chapter}
          sections={dataItem.sections}
          classId={classId}
        />
      ))}
    </div>
  );
}
