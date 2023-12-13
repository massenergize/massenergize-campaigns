import { combineReducers } from "redux";
import {
  campaignInformationReducer,
  commentsListReducer,
  doNothingReducer,
  eventsListReducer,
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
  navigation: navigationMenuReducer,
  comments: commentsListReducer,
  testimonials: testimonialsReducer,
});
