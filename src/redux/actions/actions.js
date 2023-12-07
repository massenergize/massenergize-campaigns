import { DO_NOTHING, TOGGLE_UNIVERSAL_MODAL } from "../redux-action-types";

export const testReduxAction = (someValue = []) => {
  return { type: DO_NOTHING, payload: someValue };
};
export const toggleUniversalModal = (payload) => {
  return { type: TOGGLE_UNIVERSAL_MODAL, payload };
};
