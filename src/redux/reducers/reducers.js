import { DO_NOTHING, TOGGLE_UNIVERSAL_MODAL } from "../redux-action-types";

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
