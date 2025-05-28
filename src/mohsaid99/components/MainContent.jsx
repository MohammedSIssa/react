import { useParams } from "react-router-dom";
import Stories from "./Stories";
import Week from "./Week";
import Goal from "./Goal";
import ErrorPage from "./ErrorPage";

// import { weeks, latestWeek } from "../model/weeks";
// import { goals, latestGoal } from "../model/goals";

import { dataCenter } from "../model/center";

const MainContent = () => {
  const { weeks, latestWeek, goals, latestGoal } = dataCenter;
  const { type, id } = useParams();
  const data = type === "weeks" ? weeks[+id -1] : type === "goals" ? goals[+id -1]: null;

  if (type === "weeks" && +id > latestWeek) {
    return <ErrorPage />;
  } else if (type === "goals" && +id > latestGoal) {
    return <ErrorPage />;
  }
  return (
    <div>
      <Stories type={type} />
      {type === "weeks" ? (
        <Week data={data} />
      ) : type === "goals" ? (
        <Goal data={data} />
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default MainContent;
