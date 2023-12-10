import { combineReducers } from "redux";
import {
  campaignInformationReducer,
  doNothingReducer,
  fullTechnologiesReducer,
  universalModalReducer,
  userObjectReducer,
} from "./reducers";
import { loadCampaignInformation } from "../actions/actions";

export default combineReducers({
  testStore: doNothingReducer,
  modalOptions: universalModalReducer,
  campaign: campaignInformationReducer,
  techs: fullTechnologiesReducer,
  user: userObjectReducer,
});
