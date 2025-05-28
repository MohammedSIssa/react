import { dataCenter } from "../model/center";
import Story from "./Story";

const Stories = ({ type }) => {
  const { weeks, goals } = dataCenter;
  return (
    <div className="stories border-0 border-b-1 h-30 flex gap-8 items-center p-5">
      {type === "weeks"
        ? weeks.reverse().map((week, i) => <Story data={week} key={i} />)
        : goals.reverse().map((goal, i) => <Story data={goal} key={i} />)}
    </div>
  );
};

export default Stories;
