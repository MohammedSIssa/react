import { useState } from "react";

export default function AddWeekForm() {
  const [period, setPeriod] = useState("");
  const [year, setYear] = useState("");
  const [summary, setSummary] = useState("");
  const [weekCount, setWeekCount] = useState("");
  const [isSpecial, setIsSpecial] = useState(false);

  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/weeks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          period,
          year,
          summary,
          weekCount,
          special: isSpecial,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to save data.");
      }

      console.log("Saved data.");
      setPeriod("");
      setYear("");
      setSummary("");
      setWeekCount("");
      setIsSpecial(false);
      setFeedback("Saved Data.");
    } catch (err) {
      console.error(err);
      setFeedback("Error saving data..");
    }
  }

  return (
    <form
      method="POST"
      className="flex flex-col gap-4 p-10 min-w-[300px] border-1 border-zinc-700 bg-zinc-900 rounded-xl"
      onSubmit={handleSubmit}
    >
      <p className="text-xl text-green-200">Add week form:</p>
      <hr className="border-zinc-800" />
      <label htmlFor="count">Week Counter:</label>
      <input
        name="week_count"
        id="count"
        value={weekCount}
        onChange={(e) => setWeekCount(e.target.value)}
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 focus:border-zinc-600 focus:border-1"
        autoComplete="off"
        dir="ltr"
        required
      />
      <label htmlFor="period">Period:</label>
      <input
        name="period"
        id="period"
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 focus:border-zinc-600 focus:border-1"
        autoComplete="off"
        required
      />
      <label htmlFor="year">Year:</label>
      <input
        name="year"
        id="year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 focus:border-zinc-600 focus:border-1"
        autoComplete="off"
        dir="ltr"
        required
      />
      <label htmlFor="summary">Summary:</label>
      <input
        name="summary"
        id="summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="bg-zinc-800 text-zinc-50 p-2 px-5 rounded-lg focus:outline-0 focus:border-zinc-600 focus:border-1"
        autoComplete="off"
      />
      <div className="flex gap-4 items-center justify-center">
        <input
          type="checkbox"
          id="isSpecial"
          name="special"
          value={isSpecial}
          onChange={(e) => setIsSpecial(e.target.checked)}
        />
        <label htmlFor="isSpecial">Golden Week?</label>
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-zinc-950 p-2 px-5 rounded-lg hover:bg-zinc-800 border-1 border-zinc-950 hover:border-1 hover:border-zinc-700 hover:cursor-pointer transition-all duration-100"
      >
        Add Week
      </button>
      <p
        className={
          feedback === "Saved Data." ? "text-green-500" : "text-red-500"
        }
      >
        {feedback}
      </p>
    </form>
  );
}
