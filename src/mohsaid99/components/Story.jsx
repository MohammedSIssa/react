import { NavLink } from "react-router-dom";

export default function Story({ data }) {
  return (
    <div
      className="w-[200px] min-w-[200px] h-full border-1 rounded-xl"
      style={{
        backgroundColor: "var(--story-bg-color)",
        borderColor: "var(--story-border-color)",
      }}
    >
      {data}
    </div>
  );
}
