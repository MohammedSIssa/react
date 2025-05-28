import { NavLink } from "react-router-dom";

export default function Story({ data, id, type }) {
  const defaultClassName =
    "w-[250px] min-w-[250px] h-full border-1 rounded-xl p-3 px-4 relative";
  const activeClassName = "border-1 brightness-140 border-dashed border-2";
  return (
    <NavLink
      to={`/${type}/${id}`}
      className={({ isActive }) =>
        isActive ? defaultClassName + " " + activeClassName : defaultClassName
      }
      style={{
        backgroundColor: "var(--story-bg-color)",
        borderColor: "var(--story-border-color)",
      }}
    >
      <p className="font-bold text-xl mb-1">{data.duration}</p>
      <p className="font-light text-sm">{data.summary}</p>
      <p className="italic absolute bottom-1 left-3 story-count font-bold">
        #{id}
      </p>
      <p className="italic absolute top-[-20px] left-3 story-year bg-rose-700 text-zinc-100 font-bold p-[1px] px-[10px] rounded-sm">
        {data.year}
      </p>
    </NavLink>
  );
}
