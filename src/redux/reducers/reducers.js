import { CAMPAIGN_DATA, ONE_TECH_DATA } from "../../user-portal/data/user-portal-dummy-data";
import { LOADING } from "../../utils/Constants";
import { LANGUAGES } from "../../utils/internationalization/languages";
import { getPreferredLanguageISO, portalIsAdmin } from "../../utils/utils";

import {
  DO_NOTHING,
  LOAD_CAMPAIGN_INFORMATION,
  LOAD_OFFERED_LANGUAGES,
  SET_ACTIVE_LANGUAGE,
  SET_AUTH_USER,
  SET_CAMPAIGN_ACCOUNT,
  SET_CAMPAIGN_COMMENTS,
  SET_CAMPAIGN_COMMUNITIES_EVENTS,
  SET_CAMPAIGN_TESTIMONIALS,
  SET_FIRE_AUTH,
  SET_FULL_TECH_OBJ,
  SET_IS_ADMIN_PORTAL,
  SET_MASSENERGISE_USERS,
  SET_NAVIGATION_MENU,
  SET_PORTAL_TESTIMONIALS,
  SET_STATIC_TEXT_HEAP,
  SET_TESTIMONIALS,
  SET_USER_OBJ,
  TOGGLE_UNIVERSAL_MODAL,
  UPDATE_EVENT_OBJ,
  UPDATE_TESTIMONIALS_OBJ,
} from "../redux-action-types";

// import defaultStaticText from "./../../utils/default-static-text.json";
import {
  CHINESE,
  ENGLISH,
  FRENCH,
  ITALIAN,
  PORTUGUESE,
  SPANISH,
} from "./../../utils/internationalization/json-statics";

const DEFAULT_STATIC_TEXT = {
  en_US: ENGLISH,
  es_ES: SPANISH,
  fr_FR: FRENCH,
  zh_TW: CHINESE,
  pt_BR: PORTUGUESE,
  it_IT: ITALIAN,
};

export const doNothingReducer = (state = [], action = {}) => {
  if (action.type === DO_NOTHING) {
    return action.payload;
  }
  return state;
};
export const universalModalReducer = (state = { show: false, component: <></> }, action = {}) => {
  if (action.type === TOGGLE_UNIVERSAL_MODAL) {
    return action.payload;
  }
  return state;
};
export const setActiveLanguageReducer = (state = undefined, action = {}) => {
  if (state == undefined) {
    state = getPreferredLanguageISO();
    state = state || LANGUAGES.en_US;
  }
  if (action.type === SET_ACTIVE_LANGUAGE) {
    return action.payload;
  }
  return state;
};
export const staticTextHeapReducer = (state = DEFAULT_STATIC_TEXT, action = {}) => {
  if (action.type === SET_STATIC_TEXT_HEAP) {
    return action.payload;
  }
  return state;
};
export const offeredLanguagesReducer = (state = LANGUAGES, action = {}) => {
  if (action.type === LOAD_OFFERED_LANGUAGES) {
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
export const massEnergizeUsersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_MASSENERGISE_USERS:
      return action.payload; // return new state
    default:
      return state; // return current state if action is not handled
  }
};
export const CampaignCommunitiesEventsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CAMPAIGN_COMMUNITIES_EVENTS:
      return action.payload; // return new state
    default:
      return state; // return current state if action is not handled
  }
};
export const campaignCommentsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CAMPAIGN_COMMENTS:
      return action.payload; // return new state
    default:
      return state; // return current state if action is not handled
  }
};
export const campaignTestimonialsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CAMPAIGN_TESTIMONIALS:
      return action.payload; // return new state
    default:
      return state; // return current state if action is not handled
  }
};
export const setPortalTestimonialsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PORTAL_TESTIMONIALS:
      return action.payload; // return new state
    default:
      return state; // return current state if action is not handled
  }
};
