import {createContext, useReducer} from "react";

const technologyReducer = function technologyReducer (state, action) {
  const {type, payload} = action;
  switch (type) {
    case "SET_FIELD_VALUE":
      return { ...state, [payload.field]: payload.value };
    case "SET_TECHNOLOGY":
      return { ...state, ...payload };
    case "SET_OVERVIEW":
      return { ...state, overview: [...state.overview, ...[payload] ] };
    case "ADD_OVERVIEW":
      console.log("payload", payload)
      return { ...state, overview: [...state.overview, payload ] };
    case "REMOVE_OVERVIEW":
      return { ...state, overview: state.overview.filter((item) => item.id !== payload.id) };
    case "UPDATE_OVERVIEW":
      return { ...state, overview: state.overview.map((item) => item.id === payload.id ? payload : item) };
    case "NEW_TECHNOLOGY":
      return { ...state, ...payload };
    default:
      throw new Error(`Unsupported action type: ${type}`);
  }
};

const initialState = {
  overview: [],
};

const TechnologyContext = createContext(null);

export function TechnologyContextProvider ({children}) {
  const [state, dispatch] = useReducer(technologyReducer, initialState);

  return (
    <TechnologyContext.Provider value={[state, dispatch]}>
      {children}
    </TechnologyContext.Provider>
  );
}

export {
  TechnologyContext,
};

export const TechnologyContextConsumer = TechnologyContext.Consumer;
