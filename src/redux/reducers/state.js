import { combineReducers } from "redux";
import {
  authenticatedAdminReducer,
  campaignInformationReducer,
  commentsListReducer,
  doNothingReducer,
  eventsListReducer,
  firebaseAuthObjReducer,
  fullTechnologiesReducer,
  navigationMenuReducer,
  testimonialsListReducer,
  testimonialsReducer,
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
  navigation: navigationMenuReducer,
  comments: commentsListReducer,
});
