import { combineReducers } from "redux";
import {
  adminPortalReducer,
  authenticatedAdminReducer,
  campaignAccountReducer, campaignCommentsReducer, CampaignCommunitiesEventsReducer,
  campaignInformationReducer,
  campaignTestimonialsReducer,
  commentsListReducer,
  doNothingReducer,
  eventsListReducer,
  firebaseAuthObjReducer,
  fullTechnologiesReducer,
  massEnergizeUsersReducer,
  navigationMenuReducer,
  setPortalTestimonialsReducer,
  testimonialsListReducer,
  testimonialsReducer,
  universalModalReducer,
  userObjectReducer
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
  campaignAccount: campaignAccountReducer,
  isAdminPortal: adminPortalReducer,
  massUsers: massEnergizeUsersReducer,
  communitiesEvents:CampaignCommunitiesEventsReducer,
  campaignComments: campaignCommentsReducer, 
  campaignTestimonials:campaignTestimonialsReducer, 
  portalTestimonials: setPortalTestimonialsReducer
});
