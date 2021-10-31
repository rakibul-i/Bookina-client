import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import MobileMenu from "./MobileMenu";
import UseContext from "../../../context/useContext";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const activeStyle = {
    color: "#7c3aed",
  };

  const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuShow(!isMobileMenuShow);
  };

  const { currentUser } = UseContext();

  return (
    <div className="py-3 bg-gray-100">
      <div className="md:w-9/12 w-11/12 mx-auto flex items-center justify-between">
        <NavLink to="/">
          <span className="text-3xl font-semibold text-gray-400">
            <span className="text-4xl text-purple-600">B</span>ookina
          </span>
        </NavLink>
        {/* mobile menu */}
        <div onClick={toggleMobileMenu} className="md:hidden block ">
          <GrMenu className="text-3xl cursor-pointer" />
        </div>

        {/* desktop and tablet menu items */}
        <div className=" md:flex items-center hidden uppercase font-medium">
          <NavLink
            activeStyle={activeStyle}
            className="px-5 hover:text-purple-600 "
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            activeStyle={activeStyle}
            className="px-4 hover:text-purple-600 "
            to="/services"
          >
            Services
          </NavLink>

          {currentUser ? (
            <>
              <NavLink
                activeStyle={activeStyle}
                className="px-4 hover:text-purple-600 "
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                activeStyle={activeStyle}
                className="pl-4 hover:text-purple-600 flex items-center"
                to="/profile"
              >
                <CgProfile className="text-xl  mr-1" /> Profile
              </NavLink>
            </>
          ) : (
            <NavLink
              className="px-4 py-1 router bg-purple-600  text-gray-200 hover:text-white"
              to="/signup"
            >
              Signup
            </NavLink>
          )}
        </div>
      </div>
      {/* mobile menu items */}
      <div className={isMobileMenuShow ? "block" : "hidden"}>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
