import { DO_NOTHING } from "../redux-action-types";

export const testReduxAction = (someValue = []) => {
  return { type: DO_NOTHING, payload: someValue };
};
