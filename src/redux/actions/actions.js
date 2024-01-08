import { apiCall } from "../../api/messenger";
import { auth } from "../../firebase/admin/fire-config";
import { CAMPAIGN_INFORMATION_URL, CAMPAIGN_VIEW_URL } from "../../api/urls";
import JoinUsForm from "../../user-portal/pages/forms/JoinUsForm";
import {
  DO_NOTHING,
  LOAD_CAMPAIGN_INFORMATION,
  SET_AUTH_USER,
  SET_FIRE_AUTH,
  SET_COMMENTS,
  SET_FULL_TECH_OBJ,
  SET_NAVIGATION_MENU,
  SET_TESTIMONIALS,
  SET_USER_OBJ,
  TOGGLE_UNIVERSAL_MODAL,
  UPDATE_EVENT_OBJ,
  UPDATE_TESTIMONIALS_OBJ,
  SET_CAMPAIGN_ACCOUNT,
  SET_IS_ADMIN_PORTAL,
} from "../redux-action-types";
import { signOut } from "firebase/auth";

export const USER_STORAGE_KEY = "LOOSE_USER_TEMP_PROFILE";
export const testReduxAction = (someValue = []) => {
  return { type: DO_NOTHING, payload: someValue };
};
export const setTestimonialsActions = (payload) => {
  return { type: SET_TESTIMONIALS, payload };
};
export const toggleUniversalModal = (payload) => {
  return { type: TOGGLE_UNIVERSAL_MODAL, payload };
};
export const loadCampaignInformation = (payload) => {
  return { type: LOAD_CAMPAIGN_INFORMATION, payload };
};
export const updateTechnologiesAction = (payload) => {
  return { type: SET_FULL_TECH_OBJ, payload };
};
export const loadUserObjAction = (payload) => {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(payload));
  return { type: SET_USER_OBJ, payload };
};
export const updateEventsObj = (payload) => {
  return { type: UPDATE_EVENT_OBJ, payload };
};
export const updateTestimonialsObjAction = (payload) => {
  return { type: UPDATE_TESTIMONIALS_OBJ, payload };
};
export const setAuthAdminAction = (payload) => {
  return { type: SET_AUTH_USER, payload };
};
export const setFirebaseAuthAction = (payload) => {
  return { type: SET_FIRE_AUTH, payload };
};
export const setNavigationMenuAction = (payload) => {
  return { type: SET_NAVIGATION_MENU, payload };
};
export const setCommentsAction = (payload) => {
  return { type: SET_COMMENTS, payload };
};

// ------ Admin Redux------
export const setCampaignAccountAction = (payload) => {
  return { type: SET_CAMPAIGN_ACCOUNT, payload };
};
// export const recorderAView = () => {
//   apiCall("/campaigns.technology.view", {
//     campaign_technology_id: technology?.campaign_technology_id,
//     link: window.location.href,

//   }).then((response) => {
//     if (!response || !response.success)
//       return console.log("ERROR_RECORDING_A_VIEW: ", response.error);
//   });
// };

// export const toggleUserInfoModal = (props, cb) => (dispatch) => {
//   // const component = props?.component;
//   const componentProps = props?.componentProps || {};
//   // return (dispatch) =>
//   // dispatch(
//   toggleUniversalModal({
//     fullControl: true,
//     ...props,
//     component: (_props) => <JoinUsForm {..._props} {...componentProps} />,
//   });
//   // );
// };

export const trackActivity = (payload, cb) => {
  return () => {
    apiCall("/campaigns.activities.track", payload).then((response) => {
      if (!response || !response.success) {
        console.log("ERROR_UPDATING_USER:", response.data);
      }
      // dispatch(loadUserObjAction(response.data));
      // console.log("RESPONSE AFTER TRACKING", response);
      cb && cb(response.data);
    });
  };
};
export const updateUserAction = (payload, cb) => {
  return (dispatch) => {
    apiCall("/users.update.loosedUser", payload).then((response) => {
      if (!response || !response.success) {
        cb && cb(null, false, response.error);
        return console.log("ERROR_UPDATING_USER:", response.data);
      }

      dispatch(loadUserObjAction(response.data));
      cb && cb(response.data, response.success, response.error);
    });
  };
};

export const appInnitAction = (campaignId, cb) => {
  let savedUser = localStorage.getItem(USER_STORAGE_KEY);
  savedUser = JSON.parse(savedUser);
  const { user } = savedUser || {};

  return (dispatch) => {
    dispatch(loadUserObjAction(savedUser)); // use saved user to run a request to bring in the most recent changes to the user
    const userContent = user?.email ? { email: user.email } : {};
    Promise.all([
      apiCall(CAMPAIGN_INFORMATION_URL, { id: campaignId, ...userContent }),
      apiCall(CAMPAIGN_VIEW_URL, {
        campaign_id: campaignId,
        url: window.location.href,
      }),
    ])
      .then((response) => {
        const [campaignInformation, campaignViewResponse] = response;
        const data = campaignInformation.data;
        // console.log("INSIDE INNIT", data, campaignId);
        dispatch(loadCampaignInformation(data));
        if (data) {
          dispatch(setNavigationMenuAction(data?.navigation || []));
          dispatch(setTestimonialsActions(data?.my_testimonials || []));
          cb && cb(data, campaignInformation?.success);
        }
      })
      .catch((e) => console.log("ERROR_IN_INNIT:", e?.toString()));
  };
};

export const fetchMeUser = (payload, cb) => {
  return (dispatch) =>
    apiCall("/auth.login", payload).then((response) => {
      const { data, error, success } = response || {};

      if (!success) {
        cb && cb(data, error);
        return console.log("ERROR_FETCHING_ME_USER: ", error?.toString());
      }

      cb && cb(data, null);
      dispatch(setAuthAdminAction(data));
    });
};

export const logUserOut = () => {
  return (dispatch) =>
    signOut(auth).then(() => {
      console.log("You are successfully signed out!");
      // Redirect to login page or something
      dispatch(setAuthAdminAction(null));
      dispatch(setFirebaseAuthAction(null));
      // dispatch(s(null))
    });
};
export const setAdminPortalBooleanAction = (payload =false) => {
  return { type: SET_IS_ADMIN_PORTAL, payload };
};
