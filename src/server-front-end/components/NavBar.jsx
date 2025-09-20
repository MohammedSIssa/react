import { NavLink } from "react-router-dom";

import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { MdLocalMovies } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

export const NavBar = () => {
  return (
    <div className="flex gap-4 p-5 px-10 border-1 w-fit m-10 rounded-2xl bg-zinc-100 border-zinc-400">
      <NavLink to={"/movies"}>
        <RiNetflixFill size={40} color="#e50914" />
      </NavLink>
      <NavLink to={"/pdf"}>
        <FaFilePdf size={40} color="darkred" />
      </NavLink>
      <NavLink to={"/spotify"}>
        <FaSpotify size={40} color="#1ed760" />
      </NavLink>
      <NavLink to={"/youtube"}>
        <FaYoutube size={40} color="red" />
      </NavLink>
      <NavLink to={"/suggest"}>
        <FaTelegram size={40} color="#17212b" />
      </NavLink>
    </div>
  );
};
