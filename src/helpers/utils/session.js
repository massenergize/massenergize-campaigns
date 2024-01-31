import jwtDecode from "jwt-decode";
import axios from "axios";
import { isJwtExpired } from 'jwt-check-expiration';
import { isEmpty } from "./string";
import log from "../../lib/log";

import { removeAllPathTrailingSlashes } from "./string";
import { createQueryString, handleNetworkError } from "./http";
import { IS_DEV, IS_BROWSER } from "../../config";

let OA_AUTH_PATH = "";

if (IS_DEV) {
  if (process.env.NODE_ENV === "production") {
    OA_AUTH_PATH = process.env.NEXT_PUBLIC_OA_AUTH_PATH;
  } else if (IS_BROWSER) {
    OA_AUTH_PATH = "http://" + window.location.hostname + ":3000";
  } else {
    OA_AUTH_PATH = "http://localhost:3000";
  }
} else {
  OA_AUTH_PATH = process.env.NEXT_PUBLIC_OA_AUTH_PATH;
}

export const isValidTokenOl = (token) => {
  if (!token) {
    return false;
  }

  const decoded = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

export const isValidToken = (token) => {
  try {
    if (!token) {
      return false;
    }

    return !isJwtExpired(token);
  } catch (e) {
    return false;
  }
};

export const getSession = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(process.env.NEXT_PUBLIC_X_AUTH_LABEL);
  }
  return false;
};

export const removeSession = () => {
  localStorage.removeItem(process.env.NEXT_PUBLIC_X_AUTH_LABEL);
  delete axios.defaults.headers.common.Authorization;
  delete axios.defaults.headers.common["x-auth-token"];
};

export const getAccessToken = function (jwt) {
  let token = jwt || getSession();
  if (token) {
    return JSON.parse(token)["accessToken"];
  }
  return false;
};

export const getIdToken = function (jwt) {
  let token = jwt || getSession();
  if (token) {
    return JSON.parse(token)["idToken"];
  }
  return false;
};

export const setAuthorizationHeader = (accessToken, axios) => {
  axios.defaults.headers.common.Authorization = `${process.env.NEXT_PUBLIC_X_AUTH_PREFIX}${accessToken}`;
  axios.defaults.headers.common["x-auth-token"] = accessToken;
};

/**
 *
 * @param {Object|String} [token]
 * @param {String} [tokenJSON]
 */
export const setSession = (token, tokenJSON) => {
  try {
    if (token) {
      if (typeof token === "string") {
        tokenJSON = token;
        token = JSON.parse(token);
      } else if (!tokenJSON || typeof tokenJSON !== "string") {
        tokenJSON = JSON.stringify(token);
      }

      localStorage.setItem(process.env.NEXT_PUBLIC_X_AUTH_LABEL, tokenJSON);

      let { accessToken } = token;
      setAuthorizationHeader(accessToken, axios);

      // This function below will handle when token is expired Bearer
      // const { exp } = jwtDecode(token);
      // handleTokenExpired(exp);

      return { token, tokenJSON };
    } else {
      let token = getSession();
      if (!isEmpty(token)) {
        setAuthorizationHeader(getAccessToken(token), axios);
        return { token : JSON.parse(token), tokenJSON : token };
      } else {
        removeSession();
        return false;
      }
    }
  } catch (e) {
    // log("#SET_SESSION_ERROR", "error", e);
  }
};

export const getNewTokenByInterval = function (refreshInterval) {
  // TODO make sure this is not done when the app is in idle mode
  let interval;
  interval = setInterval(async () => {
    try {
      // await renewSession();
    } catch (error) {
      clearInterval(interval);
    }
  }, refreshInterval);
};

// const decodeUserDetails = (token) => {
//   try {
//     return jwtDecode(token);
//   } catch (e) {
//     console.log(e);
//   }
// };

export const getUserFromSession = function () {
  try {
    let userToken = getIdToken();
    if (userToken) {
      return jwtDecode(userToken);
    }
    return false;
  } catch (e) {
    // log("#GET_USER_FROM_SESSION_ERROR", "error", e);
  }
};

/**
 *
 * @returns {Promise<void>}
 */
export const logout = function (currentPath = "", router, sessionTimeout = false) {
  if (isEmpty(currentPath) && !isEmpty(router)) {
    currentPath = router.basePath + router.pathname;
  } else {
    currentPath = window.encodeURI(window.location.href);
  }

  let queryParams = createQueryString({
    ...(sessionTimeout && { se : 1 }),
    a_redirect_url : currentPath,
    app : process.env.NEXT_PUBLIC_APP_ID,
    source : process.env.NEXT_PUBLIC_APP_ID
  });

  queryParams = !isEmpty(queryParams) ? "?" + queryParams : "";

  let logoutUrl = removeAllPathTrailingSlashes(window.encodeURI(`${OA_AUTH_PATH}/login${queryParams}`));
  try {
    localStorage.removeItem(process.env.NEXT_PUBLIC_X_AUTH_LABEL);
    window.location.replace(logoutUrl);
  } catch (e) {
    window.location.replace(logoutUrl);
  }
};

export const renewAccessToken = async function () {
  try {
    let token = JSON.parse(getSession());
    let { refreshToken } = token;

    let response = await axios.post(`${process.env.NEXT_PUBLIC_AXIOS_OA_AUTH_URL}/login/renew-token`, {
      refreshToken
    });

    if (response) {
      let {
        data : {
          data : { accessToken, idToken }
        }
      } = response;
      if (response.status === 200) {
        let token = JSON.stringify({
          refreshToken,
          accessToken,
          idToken
        });
        axios.defaults.headers.common["x-auth-token"] = accessToken;
        localStorage.setItem(process.env.NEXT_PUBLIC_X_AUTH_LABEL, token);
      }
    }
  } catch (error) {
    handleNetworkError(
      error,
      {
        404 : function (error) {
          console.log(error);
        },
        401 : () => {}
      },
      "#RENEW_TOKEN_ERROR"
    );
  }
};
