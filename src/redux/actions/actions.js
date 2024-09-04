import { apiCall } from "../../api/messenger";
import { auth } from "../../config/firebase/admin/fire-config";
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
  SET_MASSENERGISE_USERS,
  SET_CAMPAIGN_COMMUNITIES_EVENTS,
  SET_CAMPAIGN_COMMENTS,
  SET_CAMPAIGN_TESTIMONIALS,
  SET_PORTAL_TESTIMONIALS,
  SET_STATIC_TEXT_HEAP,
  LOAD_OFFERED_LANGUAGES,
  SET_ACTIVE_LANGUAGE,
  ADMIN_UPDATE_OFFERED_LANGUAGES,
  DEFAULT_ENGLISH_CODE,
  PREFERRED_LANGUAGE_STORAGE_KEY,
  USER_NOTIFICATION,
  SET_USERS_LIST_OF_LANGUAGES,
} from "../redux-action-types";
import { signOut } from "firebase/auth";
import store from "./../store";

export const USER_STORAGE_KEY = "LOOSE_USER_TEMP_PROFILE";

export const getPreferredLanguageISO = () => {
  const code = localStorage.getItem(PREFERRED_LANGUAGE_STORAGE_KEY);
  return findInLanguageList(code)?.code || DEFAULT_ENGLISH_CODE;
};
export const findInLanguageList = (code, list) => {
  const state = store.getState();
  const languages = list?.length ? list : state?.campaign?.languages || [];
  return languages.find((l) => l?.code === code);
};
export const getStaticText = () => {
  const state = store.getState();
  let activeLanguage = state?.activeLanguage;
  const isNotInList = !findInLanguageList(activeLanguage);
  if (isNotInList) activeLanguage = DEFAULT_ENGLISH_CODE;
  const staticTextHeap = state?.staticTextHeap || {};
  return staticTextHeap[activeLanguage] || staticTextHeap[DEFAULT_ENGLISH_CODE] || {};
};
export const setActiveLanguageInStorage = (isoCode) => {
  localStorage.setItem(PREFERRED_LANGUAGE_STORAGE_KEY, isoCode);
};

export const setUsersListOfLanguages = (data) => {
  return { type: SET_USERS_LIST_OF_LANGUAGES, payload: data };
};
export const setNotificationBlanket = (data) => {
  return { type: USER_NOTIFICATION, payload: data };
};
export const updateOfferedLanguageAction = (data) => {
  return { type: ADMIN_UPDATE_OFFERED_LANGUAGES, payload: data };
};
export const loadActiveLanguageAction = (isoCode) => {
  return { type: SET_ACTIVE_LANGUAGE, payload: isoCode };
};
export const loadStaticTextHeapAction = (data = {}) => {
  return { type: SET_STATIC_TEXT_HEAP, payload: data };
};
export const loadLanguagesAction = (data = []) => {
  return { type: LOAD_OFFERED_LANGUAGES, payload: data };
};
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

const fetchStartupContent = (params) => {
  const { campaignId, userContent, dispatch, cb, languageCode } = params || {};
  const languageParams = { __user_language: languageCode };
  Promise.all([
    apiCall(CAMPAIGN_INFORMATION_URL, { id: campaignId, ...userContent, ...languageParams }),
    apiCall(CAMPAIGN_VIEW_URL, {
      campaign_id: campaignId,
      url: window.location.href,
      ...languageParams,
    }),
  ])
    .then((response) => {
      const [campaignInformation] = response;
      const data = campaignInformation.data;
      dispatch(loadCampaignInformation(data));
      if (data) {
        dispatch(setNavigationMenuAction(data?.navigation || []));
        dispatch(setTestimonialsActions(data?.my_testimonials || []));
        cb && cb(data, campaignInformation?.success);
      }
    })
    .catch((e) => console.log("ERROR_IN_INNIT:", e?.toString()));
};

export const appInnitAction = (campaignId, cb) => {
  let savedUser = localStorage.getItem(USER_STORAGE_KEY);
  savedUser = JSON.parse(savedUser);
  const { user } = savedUser || {};

  return (dispatch) => {
    dispatch(loadUserObjAction(savedUser)); // use saved user to run a request to bring in the most recent changes to the user
    const userContent = user?.email ? { email: user.email } : {};

    apiCall("/campaigns.supported_languages.list", { campaign_id: campaignId }).then((response) => {
      const languages = response?.data || [];
      dispatch(setUsersListOfLanguages(languages?.filter((l) => l?.is_active)));
      const prefLang = localStorage.getItem(PREFERRED_LANGUAGE_STORAGE_KEY);
      const startUpObj = { campaignId, userContent, dispatch, cb, languageCode: DEFAULT_ENGLISH_CODE };
      if (!prefLang) return fetchStartupContent(startUpObj);
      const found = findInLanguageList(prefLang, languages);
      const notActive = !found?.is_active;
      const languageCode = found ? found?.code : DEFAULT_ENGLISH_CODE;
      dispatch(loadActiveLanguageAction(languageCode));

      if (notActive) {
        setActiveLanguageInStorage(DEFAULT_ENGLISH_CODE);
        return dispatch(
          setNotificationBlanket({
            title: "Please Note (Unsupported Language)",
            durationToReload: 3,
            message: (
              <span className="body-font">
                Your preferred language <b>{found?.name}</b> is no longer supported by this campaign. We have set your
                language to English. In 3 seconds, this page will reload with all features in English...
              </span>
            ),
          }),
        );
      }

      fetchStartupContent({ ...startUpObj, languageCode });
    });
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
export const setAdminPortalBooleanAction = (payload = false) => {
  return { type: SET_IS_ADMIN_PORTAL, payload };
};
export const setMassEnergizeUsersAction = (payload = []) => {
  return { type: SET_MASSENERGISE_USERS, payload };
};

export const setCampaignCommunityEventsAction = (payload = []) => {
  return { type: SET_CAMPAIGN_COMMUNITIES_EVENTS, payload };
};
export const setCampaignCommentsAction = (payload = []) => {
  return { type: SET_CAMPAIGN_COMMENTS, payload };
};
export const setCampaignTestimonialsAction = (payload = []) => {
  return { type: SET_CAMPAIGN_TESTIMONIALS, payload };
};
export const setPortalTestimonialsAction = (payload = []) => {
  return { type: SET_PORTAL_TESTIMONIALS, payload };
};
