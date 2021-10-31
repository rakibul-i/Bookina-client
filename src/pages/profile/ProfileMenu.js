import React from "react";
import UseContext from "../../context/useContext";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";

const ProfileMenu = () => {
  const { logOut } = UseContext();

  const activeStyle = {
    backgroundColor: "#7c3aed",
    color: "#FFFFFF",
  };
  return (
    <div className="bg-purple-100 px-3 py-5">
      <NavLink
        activeStyle={activeStyle}
        to="/profile"
        className="border border-gray-300 py-2 w-full block text-center my-3 hover:bg-purple-600 hover:text-white rounded-sm"
      >
        Profile
      </NavLink>
      <NavLink
        activeStyle={activeStyle}
        to="/myBookings"
        className="border border-gray-300 py-2 w-full block text-center my-3 hover:bg-purple-600 hover:text-white rounded-sm"
      >
        My Bookings
      </NavLink>
      <button
        onClick={logOut}
        className="bg-red-400 text-white px-2 text-center py-2 mt-52 rounded-sm w-full flex items-center"
      >
        <IoIosLogOut className="mr-1 text-2xl " />
        Sign out
      </button>
    </div>
  );
};

export default ProfileMenu;
