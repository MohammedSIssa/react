import { useState } from "react";

export default function UpdateWeekForm() {
  const [period, setPeriod] = useState("");
  const [summary, setSummary] = useState("");
  const [year, setYear] = useState("");
  const [special, setSpecial] = useState(false);
  const [weekCount, setWeekCount] = useState(1);
  const [loading, setLoading] = useState(true);

  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/weeks/${weekCount}/edit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ period, summary, year, special }),
      });
      if (!res.ok) {
        setFeedback("Failed to Update");
        throw new Error("Failed to Update");
      }

      setFeedback("Updated Successfully");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleFetchingWeekData(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        "http://localhost:3000/weeks/" + weekCount + "/edit",
      );
      const data = await res.json();
      setPeriod(data.period);
      setSummary(data.summary);
      setYear(data.year);
      setSpecial(data.special);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-10 min-w-[300px] border-1 border-zinc-700 bg-zinc-900 rounded-xl"
    >
      <p className="text-xl text-green-200">Update week brief form:</p>
      <hr className="border-zinc-800" />
      <label htmlFor="week_count">Week Count:</label>
      <div className="flex gap-4">
        <input
          type="number"
          id="week_count"
          name="week_count"
          value={weekCount}
          dir="ltr"
          className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-20"
          onChange={(e) => setWeekCount(e.target.value)}
        />
        <button
          onClick={handleFetchingWeekData}
          className="bg-zinc-950 p-2 px-5 rounded-lg hover:bg-zinc-800 border-1 border-zinc-950 hover:border-1 hover:border-zinc-700 hover:cursor-pointer transition-all duration-100"
        >
          Get Data
        </button>
      </div>
      <label htmlFor="period">Period:</label>
      <input
        id="period"
        value={loading ? "..." : period}
        name="period"
        onChange={(e) => setPeriod(e.target.value)}
        disabled={loading}
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-20"
      />
      <label htmlFor="summary">Summary:</label>
      <input
        id="summary"
        value={loading ? "..." : summary}
        name="summary"
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-20"
        onChange={(e) => setSummary(e.target.value)}
        disabled={loading}
      />
      <label htmlFor="year">Year:</label>
      <input
        id="year"
        value={loading ? "..." : year}
        name="year"
        disabled={loading}
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-20 disabled:opacity-20"
        onChange={(e) => setYear(e.target.value)}
      />
      <div className="flex gap-4 items-center justify-center">
        <input
          type="checkbox"
          id="isSpecial"
          name="special"
          value={special}
          disabled={loading}
          className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 disabled:opacity-20"
          onChange={(e) => setSpecial(e.target.checked)}
        />
        <label htmlFor="isSpecial">Golden Week?</label>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-zinc-950 p-2 px-5 rounded-lg hover:bg-zinc-800 border-1 border-zinc-950 hover:border-1 hover:border-zinc-700 hover:cursor-pointer transition-all duration-100"
      >
        Update Week
      </button>
      <p
        className={
          feedback === "Updated Successfully"
            ? "text-green-500"
            : feedback === "Failed to Update"
              ? "text-red-500"
              : ""
        }
      >
        {feedback}
      </p>
    </form>
  );
}
