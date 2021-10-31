import React from "react";
import GoogleSignin from "./GoogleSignin";

const Signup = () => {
  return (
    <div
      className="md:w-9/12 w-11/12 mx-auto flex items-center justify-center"
      style={{ height: "80vh" }}
    >
      <div className="bg-green-100 py-20 px-16 rounded">
        <h1 className="text-center md:text-3xl text-xl font-serif mb-16">
          Sign in
        </h1>
        <GoogleSignin />
      </div>
    </div>
  );
};

export default Signup;
