import { useState } from "react";
import NavBar from "./components/NavBar";
import { weeksData } from "./data/weeksData";
import { goals } from "./data/goals";
import Story from "./components/Story";

export default function MohSaid() {
  const [activeNavButton, setActiveNavButton] = useState("weeks");
  const [activeWeekIdx, setActiveWeekIdx] = useState(weeksData.length - 1);
  const [activeGoalsIdx, setActiveGoalsIdx] = useState(goals.length - 1);

  let content;

  switch (activeNavButton) {
    case "weeks":
      content = weeksData[activeWeekIdx];
      break;
    case "goals":
      content = goals[activeGoalsIdx];
      break;
  }

  console.log(content);

  function handleWeekClick(i) {
    setActiveWeekIdx(i);
  }

  function handleGoalClick(i) {
    setActiveGoalsIdx(i);
  }

  return (
    <div className="container">
      <NavBar
        activeNavButton={activeNavButton}
        setActiveNavButton={setActiveNavButton}
      />
      <h1>{activeNavButton} stories here..</h1>
      <div id="stories">
        {activeNavButton === "weeks"
          ? weeksData.map((weekData) => {
              return (
                <Story
                  key={weekData.id}
                  data={weekData}
                  onClick={() => handleWeekClick(weekData.id - 1)}
                />
              );
            })
          : goals.map((goal) => {
              return (
                <Story
                  key={goal.id}
                  data={goal}
                  onClick={() => handleGoalClick(goal.id - 1)}
                />
              );
            })}
      </div>
      <div className="content-container">
        {content.type === "weeks"
          ? content?.events.map((eventsItem, i) => {
              return <section key={eventsItem?.event?.id+" "+i}>
                {eventsItem?.event.map((eventItem, idx) => { return (
                  eventItem.tag === "h1" ? <h1 key={idx}>{eventItem.text}</h1> :
                  eventItem.tag === "h2" ? <h2 key={idx}>{eventItem.text}</h2> :
                  eventItem.tag === "h3" ? <h3 key={idx}>{eventItem.text}</h3> : 
                  eventItem.tag === "h4" ? <h4 key={idx}>{eventItem.text}</h4> : 
                  eventItem.tag === "h5" ? <h5 key={idx}>{eventItem.text}</h5> : 
                  eventItem.tag === "h6" ? <h6 key={idx}>{eventItem.text}</h6> : 
                  eventItem.tag === "p" ? <p key={idx}>{eventItem.text}</p> : ""
                )})}
                {eventsItem?.images && eventsItem?.images.map((image) => { return (
                  <img src={image.src} className={image?.className} />
                )})}
              </section>; // Implement Lazy Loader here..
            })
          : ""
          // content.goals.map((goal) => {
          //     return <section>

          //     </section>;
          //   })
            }
      </div>
    </div>
  );
}
