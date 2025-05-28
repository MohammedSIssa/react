import { NavLink } from "react-router-dom";

export default function Story({ data, id, type }) {
  return (
    <NavLink
      to={`/${type}/${id}`}
      className="w-[250px] min-w-[250px] h-full border-1 rounded-xl p-2 px-4"
      style={{
        backgroundColor: "var(--story-bg-color)",
        borderColor: "var(--story-border-color)",
      }}
    >
      <p className="font-bold text-xl mb-1">{data.duration}</p>
      <p className="font-light text-sm">{data.summary}</p>
    </NavLink>
  );
}
