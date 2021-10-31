import { useEffect, useState } from "react";
import initializeAuthentication from "./initializeFirebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useHistory, useLocation } from "react-router-dom";

initializeAuthentication();
const useFirebase = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  // firebase auth
  const auth = getAuth();

  // sign in with google
  const signInWithGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setCurrentUser(user);
        setIsLoading(false);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // observer or get currentUser
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setCurrentUser(user);
        setIsLoading(false);
      } else {
        setCurrentUser(null);
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  // const logOut
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
        history.push("/");
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    currentUser,
    isLoading,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
