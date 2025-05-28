import { NavLink, useLocation } from "react-router-dom";

import { BsCalendar2MinusFill } from "react-icons/bs"; // active ver
import { BsCalendar2Minus } from "react-icons/bs"; // inactive ver

import { FiTarget } from "react-icons/fi"; // inactive ver
import { TbTargetArrow } from "react-icons/tb"; // active ver

import { latestGoal } from "../model/goals";
import { latestWeek } from "../model/weeks";

import Logo from "./Logo";

const Navbar = () => {
  const location = useLocation();
  const isWeeksActive = location.pathname.startsWith("/weeks");
  const isGoalsActive = location.pathname.startsWith("/goals");
  return (
    <div className="flex h-15 gap-10 w-full border-0 border-b-1 md:border-0 md:px-15 py-5 md:py-10 items-center justify-between">
      <div className="flex gap-10 px-10 md:px-0">
        <NavLink to={`/weeks/${latestWeek}`}>
          {isWeeksActive ? (
            <BsCalendar2MinusFill size={24} />
          ) : (
            <BsCalendar2Minus size={24} />
          )}
        </NavLink>
        <NavLink to={"/goals/" + latestGoal}>
          {isGoalsActive ? <TbTargetArrow size={26} /> : <FiTarget size={24} />}
        </NavLink>
      </div>
      <Logo />
    </div>
  );
};

export default Navbar;
