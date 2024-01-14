import React, { useReducer, createContext } from "react"
import initialStoreData from "../../../store/data"

let StoreContext = createContext(initialStoreData);
const StoreConsumer = StoreContext.Consumer

/**
 *
 * @param children
 * @param reducer
 * @param data The initialState
 * @returns {JSX.Element}
 * @constructor
 */
const Store = ({ children, reducer, namespaced = true, data : initialState }) => {
  const [ state, dispatch ] = useReducer(reducer,  initialState);

  return (
    <StoreContext.Provider value={[ state, dispatch ]}>
      { children }
    </StoreContext.Provider>
  )
}

export {StoreContext, StoreConsumer}

export default Store;
