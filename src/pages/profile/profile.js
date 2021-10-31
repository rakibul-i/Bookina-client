import React from "react";
import UseContext from "../../context/useContext";

import ProfileMenu from "./ProfileMenu";

const Profile = () => {
  const { currentUser } = UseContext();
  return (
    <div className="md:w-9/12 w-11/12 mx-auto py-5">
      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1">
        <ProfileMenu />
        <div className="lg:col-span-4 md:col-span-3 px-5">
          <h1 className="lg:text-4xl my-5 text-green-900 font-serif">
            {currentUser?.displayName}'s Dashboard
          </h1>
          <p>You can check here your all bookings and update or refund</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
