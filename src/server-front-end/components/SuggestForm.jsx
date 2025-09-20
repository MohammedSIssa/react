import { useState } from "react";

export const SuggestForm = () => {
  const [message, setMessage] = useState("");
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-10 bg-zinc-200 m-10 gap-5 rounded-3xl border-1 border-zinc-400"
    >
      <input
        className="bg-zinc-300 border-1 border-zinc-400 text-zinc-600 p-5 px-10 focus:outline-0 rounded-2xl"
        value={message}
        name="message"
        onChange={handleChange}
        placeholder="Message.."
        autoComplete="off"
        type="text"
      />
      <button
        className="bg-zinc-900 text-zinc-50 p-5 rounded-2xl hover:cursor-pointer transition-all hover:brightness-90"
        type="submit"
        onClick={handleSubmit}
      >
        Send
      </button>
    </form>
  );

  function handleChange(e) {
    setMessage(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("http://localhost:3000/suggest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    setMessage("");
  }
};
