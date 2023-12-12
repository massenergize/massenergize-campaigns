import {useDebugValue, useState} from "react";
import {formatDebugValue} from "../helpers/utils";

/**
 * This hook is used to create a state with a label for debugging purposes.
 * The label and value are displayed in the React DevTools.
 * @param label
 * @param initialState
 * @returns {[unknown, React.Dispatch<React.SetStateAction<unknown>>]}
 */
export const useNamedState = (label, initialState) => {
  const states = useState(initialState);
  useDebugValue({ label, value: states[0] }, formatDebugValue);
  return states;
};
