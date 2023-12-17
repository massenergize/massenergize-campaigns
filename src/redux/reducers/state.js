import { combineReducers } from "redux";
import {
  authenticatedAdminReducer,
  campaignInformationReducer,
  doNothingReducer,
  eventsListReducer,
  firebaseAuthObjReducer,
  fullTechnologiesReducer,
  testimonialsListReducer,
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
  events: eventsListReducer,
  testimonials: testimonialsListReducer,
  fireAuth: firebaseAuthObjReducer,
  authAdmin: authenticatedAdminReducer,
});
