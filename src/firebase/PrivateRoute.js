import React from "react";
import { Route, Redirect } from "react-router-dom";
import UseContext from "../context/useContext";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser, isLoading } = UseContext();

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ height: "80vh" }}
      >
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signup",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
