import { IS_DEV, IS_LOCAL, IS_PROD,  IS_CANARY} from "./config";

export var API_HOST = "http://localhost:8000/api";
// export var API_HOST = "http://2606-154-160-22-219.ngrok-free.app";

if (IS_PROD) API_HOST = "https://api.massenergize.org/";
// else if(IS_LOCAL) API_HOST = `${API_HOST}/api`
else if (IS_DEV) API_HOST = "https://api.massenergize.dev";

const URLS = {};
if (IS_LOCAL) {
  URLS["ROOT"] = "http://massenergize.test:8000";
  URLS["COMMUNITIES"] = "http://communities.massenergize.test:8000";
  URLS["SHARE"] = "http://share.massenergize.test:8000";
} else if (IS_CANARY) {
  URLS["ROOT"] = "https://api-canary.massenergize.org";
  URLS["COMMUNITIES"] = "https://communities-canary.massenergize.org";
  URLS["SHARE"] = "https://share-canary.massenergize.org";
} else if (IS_PROD) {
  URLS["ROOT"] = "https://api.massenergize.org";
  URLS["COMMUNITIES"] = "https://communities.massenergize.org";
  URLS["SHARE"] = "https://share.massenergize.org";
} else {
  URLS["ROOT"] = "https://api.massenergize.dev";
  URLS["COMMUNITIES"] = "https://community.massenergize.dev";
  URLS["SHARE"] = "https://share.massenergize.dev";
}


export const CAMPAIGN_INFORMATION_URL = "campaigns.info";
export const CAMPAIGN_VIEW_URL = "campaigns.view";


export default URLS;
