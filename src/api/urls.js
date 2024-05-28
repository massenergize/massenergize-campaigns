import { IS_DEV, IS_LOCAL, IS_PROD, IS_CANARY } from "../config/environment";

let apiHost = "http://localhost:8000/api";
// export var apiHost = "http://2606-154-160-22-219.ngrok-free.app";

if (IS_PROD) apiHost = "https://api.massenergize.org/";
else if (IS_DEV) apiHost = "https://api.massenergize.dev";
else if (IS_CANARY) apiHost = "https://api-canary.massenergize.org";
// else if (IS_DEV) apiHost = "https://0fe9-197-251-151-181.ngrok-free.app";
// else apiHost = "http://localhost:8000/api";
// else apiHost = "https://api.massenergize.dev";

export const API_HOST = apiHost;
// export const API_HOST = "https://api.massenergize.dev";


let platform = "";
const URLS = {};
if (IS_LOCAL) {
  URLS["ROOT"] = "http://massenergize.test:8000";
  URLS["COMMUNITIES"] = "http://communities.massenergize.test:8000";
  URLS["SHARE"] = "http://share.massenergize.test:8000";
  platform = "LOCAL";
} else if (IS_CANARY) {
  URLS["ROOT"] = "https://api-canary.massenergize.org";
  URLS["COMMUNITIES"] = "https://communities-canary.massenergize.org";
  URLS["SHARE"] = "https://share-canary.massenergize.org";
  platform = "CANARY";
} else if (IS_PROD) {
  URLS["ROOT"] = "https://api.massenergize.org";
  URLS["COMMUNITIES"] = "https://communities.massenergize.org";
  URLS["SHARE"] = "https://share.massenergize.org";
  platform = "PRODUCTION";
} else {
  URLS["ROOT"] = "https://api.massenergize.dev";
  URLS["COMMUNITIES"] = "https://community.massenergize.dev";
  URLS["SHARE"] = "https://share.massenergize.dev";
  platform = "DEVELOPMENT";
}

console.log("API_HOST", { API_HOST, IS_LOCAL });

export const PLATFORM = platform;
export const CAMPAIGN_INFORMATION_URL = "campaigns.infoForUser";
export const CAMPAIGN_VIEW_URL = "campaigns.view";

export default URLS;
