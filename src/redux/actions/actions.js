import { apiCall } from "../../api/messenger";
import { CAMPAIGN_INFORMATION_URL } from "../../api/urls";
import {
  DO_NOTHING,
  LOAD_CAMPAIGN_INFORMATION,
  SET_FULL_TECH_OBJ,
  SET_NAVIGATION_MENU,
  SET_USER_OBJ,
  TOGGLE_UNIVERSAL_MODAL,
  UPDATE_EVENT_OBJ,
  UPDATE_TESTIMONIALS_OBJ,
} from "../redux-action-types";

const USER_STORAGE_KEY = "LOOSE_USER_TEMP_PROFILE";
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
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(payload));
  return { type: SET_USER_OBJ, payload };
};
export const updateEventsObj = (payload) => {
  return { type: UPDATE_EVENT_OBJ, payload };
};
export const updateTestimonialsObjAction = (payload) => {
  return { type: UPDATE_TESTIMONIALS_OBJ, payload };
};
export const setNavigationMenuAction = (payload) => {
  return { type: SET_NAVIGATION_MENU, payload };
};

export const appInnitAction = (campaignId) => {
  let savedUser = localStorage.getItem(USER_STORAGE_KEY);
  savedUser = JSON.parse(savedUser);

  return (dispatch) => {
    dispatch(loadUserObjAction(savedUser)); // use saved user to run a request to bring in the most recent changes to the user

    Promise.all([apiCall(CAMPAIGN_INFORMATION_URL, { id: campaignId })])
      .then((response) => {
        const [campaignInformation] = response;
        const data = campaignInformation.data;
        // console.log("INSIDE INNIT", data, campaignId);
        dispatch(loadCampaignInformation(data));
        if (data) {
          dispatch(setNavigationMenuAction(data?.navigation || []));
        }
      })
      .catch((e) => console.log("ERROR_IN_INNIT:", e?.toString()));
  };
};
