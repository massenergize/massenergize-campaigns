import {
  CAMPAIGN_DATA,
  ONE_TECH_DATA,
} from "../../user-portal/data/user-portal-dummy-data";
import {
  DO_NOTHING,
  LOAD_CAMPAIGN_INFORMATION,
  SET_FULL_TECH_OBJ,
  TOGGLE_UNIVERSAL_MODAL,
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
export const campaignInformationReducer = (
  state = CAMPAIGN_DATA.data,
  action = {}
) => {
  if (action.type === LOAD_CAMPAIGN_INFORMATION) {
    return action.payload;
  }
  return state;
};
export const fullTechnologiesReducer = (
  state = { "4c74b279-45c4-435a-b05d-11f5f3dcd69d": ONE_TECH_DATA.data },
  action = {}
) => {
  if (action.type === SET_FULL_TECH_OBJ) {
    return action.payload;
  }
  return state;
};
