import { combineReducers } from "redux";
import { doNothingReducer, universalModalReducer } from "./reducers";

export default combineReducers({
  testStore: doNothingReducer,
  modalOptions: universalModalReducer,
});
