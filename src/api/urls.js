import { IS_DEV, IS_PROD } from "./config";

// export var API_HOST = "https://api.massenergize.dev";
export var API_HOST = "http://localhost:8000/api";

if (IS_PROD) API_HOST = "...";
// if (IS_DEV) API_HOST = "https://api.massenergize.dev";

export const CAMPAIGN_INFORMATION_URL = "campaigns.info";
