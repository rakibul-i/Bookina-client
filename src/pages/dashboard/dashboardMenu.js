import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const DashboardMenu = () => {
  const activeStyle = {
    backgroundColor: "#7c3aed",
    color: "#FFFFFF",
  };
  return (
    <div className=" lg:px-5 px-3">
      <NavLink
        activeStyle={activeStyle}
        className="border px-5 py-2 border-purple-700 rounded flex items-center justify-center"
        to="/dashboard"
      >
        Manage All Bookings
      </NavLink>
      <NavLink
        activeStyle={activeStyle}
        className="border px-5 mt-5 py-2 border-purple-700 rounded flex items-center justify-center"
        to="/manageAllServices"
      >
        Manage All Services
      </NavLink>

      <NavLink
        activeStyle={activeStyle}
        className="border px-5 mt-5 py-2 border-purple-700 rounded flex items-center justify-center"
        to="/addService"
      >
        <AiOutlinePlus className="mr-1 text-2xl" /> add a service
      </NavLink>
    </div>
  );
};

export default DashboardMenu;
