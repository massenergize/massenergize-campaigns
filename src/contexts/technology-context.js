import {createContext, useReducer} from "react";

const technologyReducer = function technologyReducer (state, action) {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return { ...state, [action.field]: action.value };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const initialState = {};

export const TechnologyContext = createContext(null);

export function TechnologyContextProvider ({children}) {
  const [state, dispatch] = useReducer(technologyReducer, initialState);

  return (
    <TechnologyContext.Provider value={[state, dispatch]}>
      {children}
    </TechnologyContext.Provider>
  );
}
