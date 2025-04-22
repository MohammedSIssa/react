import {  useState } from "react";
import "./clock.css";

export default function Clock() {
  const [time, setTime] = useState(0);

  return <BeautifyTime seconds={time} />

  function BeautifyTime({ seconds }) {
    let hours = 0;
    let minutes = 0;
    switch (seconds) {
      case seconds > 59 && minutes === 59:
        hours += 1;
        setTime(0);
        break;
      case seconds > 59:
        minutes += 1;
        setTime(0);
        break;
    }
    return <h1>Time:- {hours} : {minutes} : {seconds} </h1>
  }
}


