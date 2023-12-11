import { IS_DEV, IS_PROD } from "./config";

export var API_HOST = "http://localhost:8000/api";
// export var API_HOST = "http://2606-154-160-22-219.ngrok-free.app";

if (IS_PROD) API_HOST = "...";
if (IS_DEV) API_HOST = "...";




export const CAMPAIGN_INFORMATION_URL = "campaigns.info"