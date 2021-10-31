import React, { createContext } from "react";
import useFirebase from "../firebase/useFirebase";
import useServices from "../hooks/useServices";

export const bookinaContext = createContext();

const BookinaProvider = ({ children }) => {
  const { currentUser, isLoading, signInWithGoogle, logOut } = useFirebase();
  const { services, setServices } = useServices();

  return (
    <bookinaContext.Provider
      value={{
        currentUser,
        isLoading,
        signInWithGoogle,
        logOut,
        services,
        setServices,
      }}
    >
      {children}
    </bookinaContext.Provider>
  );
};

export default BookinaProvider;
