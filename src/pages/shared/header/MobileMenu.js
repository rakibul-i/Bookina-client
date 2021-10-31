import React from "react";
import { NavLink } from "react-router-dom";
import UseContext from "../../../context/useContext";
import { CgProfile } from "react-icons/cg";

const MobileMenu = () => {
  const activeStyle = {
    color: "#7c3aed",
  };

  const { currentUser } = UseContext();
  return (
    <div className="w-11/12 mx-auto md:hidden block font-semibold">
      <NavLink
        activeStyle={activeStyle}
        className="pt-4 hover:text-purple-600 block"
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        activeStyle={activeStyle}
        className="py-2 hover:text-purple-600 block"
        to="/services"
      >
        Services
      </NavLink>

      <NavLink
        activeStyle={activeStyle}
        className="pt-2 pb-4 hover:text-purple-600 block"
        to="/dashboard"
      >
        Dashboard
      </NavLink>

      {currentUser ? (
        <NavLink
          activeStyle={activeStyle}
          className="py-2 hover:text-purple-600 flex items-center "
          to="/profile"
        >
          <CgProfile className="text-xl  mr-1" /> Profile
        </NavLink>
      ) : (
        <NavLink
          activeStyle={activeStyle}
          className="px-4 py-1 router bg-purple-600  text-gray-200 hover:text-white"
          to="/signup"
        >
          Signup
        </NavLink>
      )}
    </div>
  );
};

export default MobileMenu;
