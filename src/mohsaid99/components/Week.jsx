import WeekSection from "./WeekSection";

export default function Week({ data }) {
  return (
    <div className="flex flex-col items-center min-h-dvh gap-5 py-15 md:p-20">
      {data.events.map((event, index) => (
        <WeekSection event={event} key={index} />
      ))}
    </div>
  );
}
