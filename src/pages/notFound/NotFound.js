import React from "react";

const NotFound = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "80vh" }}
    >
      <div>
        <h1 className="text-3xl">404 Error!</h1>
        <p className="py-4">Page does not exist</p>
      </div>
    </div>
  );
};

export default NotFound;
