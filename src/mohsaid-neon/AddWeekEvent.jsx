import { useState } from "react";

export default function AddWeekEventForm() {
  const [tag, setTag] = useState("p");
  const [event, setEvent] = useState("");
  const [weekId, setWeekId] = useState("");
  const [meta, setMeta] = useState("");
  const [loading, setLoading] = useState(false);

  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setFeedback("Adding to database..");
      setLoading(true);
      const res = await fetch("http://localhost:3000/weeks/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tag, event, week_id: weekId, meta }),
      });

      if (!res.ok) {
        throw new Error("Error saving data..");
      }

      // setTag("p");
      setEvent("");
      setMeta("");
      setLoading(false);
      setFeedback("Saved Data.");
    } catch (error) {
      console.error(error);
      setFeedback("Error saving data");
    }
  }

  return (
    <form
      method="POST"
      className="flex flex-col gap-4 p-10 min-w-[300px] border-1 border-zinc-700 bg-zinc-900 rounded-xl"
      onSubmit={handleSubmit}
    >
      <p className="text-xl text-green-200">Add week events form:</p>
      <hr className="border-zinc-800" />
      <label htmlFor="tag">Tag:</label>
      <select
        name="tag"
        id="tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-30"
        dir="ltr"
        required
        disabled={loading}
      >
        <option value={"p"}>p</option>
        <option value={"hr"}>hr</option>
        <option value={"h1"}>h1</option>
        <option value={"h2"}>h2</option>
        <option value={"h3"}>h3</option>
        <option value={"h4"}>h4</option>
        <option value={"h5"}>h5</option>
        <option value={"h6"}>h6</option>
        <option value={"img"}>img</option>
        <option value={"video:shorts"}>video:shorts</option>
        <option value={"video:desktop"}>video:desktop</option>
        <option value={"a"}>a</option>
      </select>
      <label htmlFor="event">Event:</label>
      <textarea
        name="event"
        id="event"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-30"
        disabled={loading}
      />
      <label htmlFor="week_id">Week ID:</label>
      <input
        name="week_id"
        id="week_id"
        value={weekId}
        onChange={(e) => setWeekId(e.target.value)}
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-30"
        dir="ltr"
        required
        disabled={loading}
      />
      <label htmlFor="meta">Meta:</label>
      <input
        name="meta"
        id="meta"
        value={meta}
        onChange={(e) => setMeta(e.target.value)}
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-30"
        dir="ltr"
        disabled={loading}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={loading}
        className="bg-zinc-950 p-2 px-5 rounded-lg hover:bg-zinc-800 border-1 border-zinc-950 hover:border-1 hover:border-zinc-700 hover:cursor-pointer transition-all duration-100 disabled:opacity-30"
      >
        Add Event
      </button>
      <p
        className={
          feedback === "Saved Data."
            ? "text-green-500"
            : feedback === "Adding to database.."
              ? "text-zinc-100"
              : "text-red-500"
        }
      >
        {feedback}
      </p>
    </form>
  );
}
