export default function WeekList({ list }) {
  return (
    <ul className="week-list">
      {list.map((listItem, index) => {
        return (
          <li key={index}>
            <a href={listItem.link} target="_blank">
              {listItem.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
