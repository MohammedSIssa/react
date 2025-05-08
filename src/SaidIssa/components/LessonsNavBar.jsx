import Lesson from "./Lesson";

export default function LessonsNavBar({ data, classId, classTitle }) {
  return (
    <div className="h-full flex p-5 flex-col w-80 min-w-80 max-w-80 bg-emerald-900 text-emerald-100">
      <h1 className="text-3xl font-bold mb-5">{classTitle}</h1>
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
