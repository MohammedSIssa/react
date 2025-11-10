import { NavLink } from "react-router-dom";

const EditProfileButton = ({ id }) => {
  return (
    <NavLink
      className="bg-neutral-800 text-white p-2 hover:brightness-105 transition-all duration-200 hover:cursor-pointer rounded-lg text-center"
      to={`/edit/users/${id}`}
    >
      Edit Profile
    </NavLink>
  );
};

export default EditProfileButton;
