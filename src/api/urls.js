import { IS_DEV, IS_PROD } from "./config";

// export var API_HOST = "localhost:8000/";
export var API_HOST = "http://2606-154-160-22-219.ngrok-free.app";

if (IS_PROD) API_HOST = "...";
if (IS_DEV) API_HOST = "...";



