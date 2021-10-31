import React from "react";
import UseContext from "../../context/useContext";
import { FaGooglePlus } from "react-icons/fa";

const GoogleSignin = () => {
  const { currentUser, signInWithGoogle } = UseContext();
  console.log(currentUser);
  return (
    <div>
      <button
        onClick={signInWithGoogle}
        className="bg-purple-600 text-white py-2 px-4 rounded flex items-center"
      >
        <FaGooglePlus className="text-2xl mr-2" />
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleSignin;
