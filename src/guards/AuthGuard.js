import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useIdle } from "react-use";
import { isJwtExpired } from 'jwt-check-expiration';
import { getSession, } from "../helpers/utils/session";
import { useUser } from "../hooks/useUser";
import { logout, renewAccessToken } from "../helpers/utils/session";

export default function AuthGuard ({ children }) {
  let { setUser } = useUser();

  const MINUTE = 60 * 1000;

  // const AUTO_LOGOUT_TIME = 2.7e+6;
  const AUTO_LOGOUT_TIME = 56 * MINUTE;
  // const TOKEN_REFRESH_TIME = 2.5e+6;

  const isIdle = useIdle(AUTO_LOGOUT_TIME, false);
  isIdle && logout(null, null, true);

  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  function authenticate () {
    let token = getSession();

    if (token) {
      try {
        token = JSON.parse(token);
        // there's a user logged in
        let { idToken, accessToken, refreshToken } = token;
        let user = jwt_decode(idToken);

        setUser({
          accessToken,
          idToken,
          refreshToken,
          token,
          ...user
        });

        setIsAuthenticated(true);
      } catch (error) {
        if (error.message === "Invalid token specified") {
          logout(null, null, true);
        }
      }
    } else {
      logout(null, null, true);
    }
  }

  // on mount
  useEffect(() => {
    authenticate();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      let token = getSession();
      if (token) {
        if (isJwtExpired(token)) {
          logout(null, null, true); // msg
        }
      }

      const timer = setInterval(() => {
        renewAccessToken();
      }, AUTO_LOGOUT_TIME); // clearing interval

      return () => clearInterval(timer);
    } catch (e) {
      logout(null, null, true); // msg
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isAuthenticated) {
    return <>{children}</>
  }

  return <div/>;
}
