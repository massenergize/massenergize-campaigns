import { apiCall } from "../../api/messenger";
import { CAMPAIGN_INFORMATION_URL } from "../../api/urls";
import { auth } from "../../firebase/admin/fire-config";
import {
  DO_NOTHING,
  LOAD_CAMPAIGN_INFORMATION,
  SET_AUTH_USER,
  SET_FIRE_AUTH,
  SET_FULL_TECH_OBJ,
  SET_USER_OBJ,
  TOGGLE_UNIVERSAL_MODAL,
  UPDATE_EVENT_OBJ,
  UPDATE_TESTIMONIALS_OBJ,
} from "../redux-action-types";
import { signOut } from "firebase/auth";

export const testReduxAction = (someValue = []) => {
  return { type: DO_NOTHING, payload: someValue };
};
export const toggleUniversalModal = (payload) => {
  return { type: TOGGLE_UNIVERSAL_MODAL, payload };
};

export const loadCampaignInformation = (payload) => {
  return { type: LOAD_CAMPAIGN_INFORMATION, payload };
};
export const updateTechnologiesAction = (payload) => {
  return { type: SET_FULL_TECH_OBJ, payload };
};
export const loadUserObjAction = (payload) => {
  return { type: SET_USER_OBJ, payload };
};
export const updateEventsObj = (payload) => {
  return { type: UPDATE_EVENT_OBJ, payload };
};
export const updateTestimonialsObjAction = (payload) => {
  return { type: UPDATE_TESTIMONIALS_OBJ, payload };
};
export const setAuthAdminAction = (payload) => {
  return { type: SET_AUTH_USER, payload };
};
export const setFirebaseAuthAction = (payload) => {
  return { type: SET_FIRE_AUTH, payload };
};

export const appInnitAction = (campaignId) => {
  return (dispatch) => {
    Promise.all([apiCall(CAMPAIGN_INFORMATION_URL, { id: campaignId })])
      .then((response) => {
        const [campaignInformation] = response;
        dispatch(loadCampaignInformation(campaignInformation.data));
      })
      .catch((e) => console.log("ERROR_IN_INNIT:", e?.toString()));
  };
};

export const fetchMeUser = (payload, cb) => {
  return (dispatch) =>
    apiCall("/auth.login", payload).then((response) => {
      const { data, error, success } = response || {};

      if (!success) {
        cb && cb(data, error);
        return console.log("ERROR_FETCHING_ME_USER: ", error?.toString());
      }

      console.log("THIS IS THE ME USER", data);
      cb && cb(data, null);
      console.log("THIS IS THE ME USER", data);
      dispatch(setAuthAdminAction(data));

    });
};

export const logUserOut = () => {
  return (dispatch) =>
    signOut(auth).then(() => {
      console.log("You are successfully signed out!");
      // Redirect to login page or something
      dispatch(setAuthAdminAction(null));
      dispatch(setFirebaseAuthAction(null));
      // dispatch(s(null))
    });
};
