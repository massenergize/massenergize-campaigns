import {
  CAMPAIGN_DATA,
  ONE_TECH_DATA,
} from "../../user-portal/data/user-portal-dummy-data";
import { LOADING } from "../../utils/Constants";
import { portalIsAdmin } from "../../utils/utils";
import {
  DO_NOTHING,
  LOAD_CAMPAIGN_INFORMATION,
  SET_AUTH_USER,
  SET_CAMPAIGN_ACCOUNT, SET_CAMPAIGN_COMMUNITIES_EVENTS,
  SET_FIRE_AUTH,
  SET_FULL_TECH_OBJ,
  SET_IS_ADMIN_PORTAL,
  SET_MASSENERGISE_USERS,
  SET_NAVIGATION_MENU,
  SET_TESTIMONIALS,
  SET_USER_OBJ,
  TOGGLE_UNIVERSAL_MODAL,
  UPDATE_EVENT_OBJ,
  UPDATE_TESTIMONIALS_OBJ
} from "../redux-action-types";

export const doNothingReducer = (state = [], action = {}) => {
  if (action.type === DO_NOTHING) {
    return action.payload;
  }
  return state;
};
export const universalModalReducer = (
  state = { show: false, component: <></> },
  action = {}
) => {
  if (action.type === TOGGLE_UNIVERSAL_MODAL) {
    return action.payload;
  }
  return state;
};
export const campaignInformationReducer = (state = LOADING, action = {}) => {
  if (action.type === LOAD_CAMPAIGN_INFORMATION) {
    return action.payload;
  }
  return state;
};
export const fullTechnologiesReducer = (state = {}, action = {}) => {
  if (action.type === SET_FULL_TECH_OBJ) {
    return action.payload;
  }
  return state;
};
export const userObjectReducer = (state = null, action = {}) => {
  if (action.type === SET_USER_OBJ) {
    return action.payload;
  }
  return state;
};
export const eventsListReducer = (state = {}, action = {}) => {
  if (action.type === UPDATE_EVENT_OBJ) {
    return action.payload;
  }
  return state;
};
export const testimonialsListReducer = (state = {}, action = {}) => {
  if (action.type === UPDATE_TESTIMONIALS_OBJ) {
    return action.payload;
  }
  return state;
};
export const firebaseAuthObjReducer = (state = LOADING, action = {}) => {
  if (action.type === SET_FIRE_AUTH) {
    return action.payload;
  }
  return state;
};
export const authenticatedAdminReducer = (state = LOADING, action = {}) => {
  if (action.type === SET_AUTH_USER) {
    return action.payload;
  }
  return state;
};
export const navigationMenuReducer = (state = [], action = {}) => {
  if (action.type === SET_NAVIGATION_MENU) {
    return action.payload;
  }
  return state;
};
export const commentsListReducer = (state = {}, action = {}) => {
  if (action.type === SET_NAVIGATION_MENU) {
    return action.payload;
  }
  return state;
};
export const testimonialsReducer = (state = [], action = {}) => {
  if (action.type === SET_TESTIMONIALS) {
    return action.payload;
  }
  return state;
};

export const campaignAccountReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CAMPAIGN_ACCOUNT:
      return action.payload; // return new state
    default:
      return state; // return current state if action is not handled
  }
};
export const adminPortalReducer = (state = portalIsAdmin(), action) => {
  switch (action.type) {
    case SET_IS_ADMIN_PORTAL:
      return action.payload; // return new state
    default:
      return state; // return current state if action is not handled
  }
};
export const massEnergizeUsersReducer = (state =[], action) => {
  switch (action.type) {
    case SET_MASSENERGISE_USERS:
      return action.payload; // return new state
    default:
      return state; // return current state if action is not handled
  }
};
export const CampaignCommunitiesEventsReducer = (state =[], action) => {
  switch (action.type) {
    case SET_CAMPAIGN_COMMUNITIES_EVENTS:
      return action.payload; // return new state
    default:
      return state; // return current state if action is not handled
  }
};
