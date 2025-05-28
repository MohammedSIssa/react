import WeekList from "./WeekList";

const WeekSection = ({ event }) => {
  return (
    <>
      {event.tag === "h1" && (
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          {event.content}
        </h1>
      )}
      {event.tag === "h2" && (
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
          {event.content}
        </h2>
      )}

      {event.tag === "h3" && (
        <h3 className="font-bold text-lg md:text-xl lg:text-2xl">
          {event.content}
        </h3>
      )}
      {event.tag === "h4" && (
        <h4 className="text-md md:text-lg lg:text-xl">{event.content}</h4>
      )}
      {event.tag === "h5" && (
        <h5 className="text-sm md:text-md lg:text-lg">{event.content}</h5>
      )}

      {event.tag === "h6" && (
        <h6 className="text-xs md:text-sm lg:text-md">{event.content}</h6>
      )}

      {event.tag === "p" && (
        <p className="text-lg md:text-xl">{event.content}</p>
      )}
      {event.tag === "img" && (
        <div
          className="thumbnail"
          style={{
            backgroundImage: `url(${event.thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img src={event.content} alt="" loading="lazy" />
        </div>
      )}

      {event.tag === "ul" && <WeekList list={event.content} />}
    </>
  );
};

export default WeekSection;
