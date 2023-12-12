import {useReducer, useContext} from "react";

const initialState = {
  dialogs: [],
  currentDialog: null
}

const DialogContext = React.createContext(initialState);


const dialogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DIALOG":
      return {
        ...state,
        dialogs: [...state.dialogs, action.payload]
      }
    case "REMOVE_DIALOG":
      return {
        ...state,
        dialogs: state.dialogs.filter(dialog => dialog.id !== action.payload)
      }
    case "SET_CURRENT_DIALOG":
      return {
        ...state,
        currentDialog: action.payload
      }
    default:
      return state;
  }
}

const DialogProvider = ({children}) => {
  const [state, dispatch] = useReducer(dialogReducer, initialState);
  return (
    <DialogContext.Provider value={{state, dispatch}}>
      {children}
    </DialogContext.Provider>
  )
}
