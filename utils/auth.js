/* eslint-disable react/prop-types */
import React, { useContext, createContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  getAuth,
  signOut,
  signInWithCustomToken,
} from "@firebase/auth";
import { useRouter } from "next/dist/client/router";
import { app } from "./firebase";
import Loader from "react-loader-spinner";
import { getUser } from "./db";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useAuthProvider() {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  useEffect(() => {
    // Subscribe to user on mount
    const unsubscribe = onAuthStateChanged(auth, async (userCredential) => {
      if (userCredential) {
        const data = await getUser(userCredential.uid);
        setUser({
          uid: userCredential.uid,
          name: userCredential.displayName,
          regno: data.regno,
          isTeacher: data.isteacher,
        });
      } else {
        setUser(false);
      }
    });

    // Unsubscribe on cleanup
    return () => unsubscribe();
  }, []);

  const signin = async (regno, password) => {
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ regno, password }),
    };
    try {
      const response = await fetch("/api/login", config);

      const data = await response.json();
      if (!response.ok) return { type: "error", message: data.message };

      const userCredential = await signInWithCustomToken(
        auth,
        data.customToken
      );
      // Signed in
      setUser({
        uid: userCredential.user.uid,
        name: userCredential.user.displayName,
        regno,
      });
      return {
        type: "success",
        message: `Welcome ${userCredential.user.displayName}!`,
      };
    } catch (error) {
      console.log(error);
      return { type: "error", message: error };
    }
  };

  const signout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const isTeacher = async () => {
    if (auth.currentUser) {
      try {
        const idTokenResult = await auth.currentUser.getIdTokenResult();
        if (!!idTokenResult.claims.isteacher)
          setUser({ ...user, isTeacher: true });
        setUser({ ...user, isTeacher: false });
      } catch (error) {
        console.log(error);
      }
      return false;
    }
    setUser({ ...user, isTeacher: false });
  };

  return {
    user,
    signin,
    signout,
    isTeacher,
    setUser,
  };
}

export const requireAuth = (Component) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
      // Redirect if not signed in
      if (auth.user === false) {
        router.replace(`/auth/login`);
      }
    }, [auth]);

    // Show loading indicator
    if (!auth?.user) {
      return (
        <div className="flex w-full items-center justify-center">
          <Loader
            type="Grid"
            color="#6366F1"
            height={100}
            width={100}
            timeout={30000}
          />
        </div>
      );
    }
    if (checkAccess(auth.user, router.pathname)) router.replace(`/`);

    return <Component {...props} />;
  };
};

const checkAccess = (user, url) => url === "/manage" && !user.isTeacher;

export const withoutAuth = (Component) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
      // Redirect if signed in
      if (auth.user) {
        router.replace(`/`);
      }
    }, [auth]);

    // Show loading indicator
    if (auth.user) {
      return (
        <div className="flex w-full items-center justify-center">
          <Loader
            type="Grid"
            color="#6366F1"
            height={100}
            width={100}
            timeout={3000} // 3 secs
          />
        </div>
      );
    }

    return <Component {...props} />;
  };
};
