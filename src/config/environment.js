export const IS_LOCAL = false;
export const IS_PROD = false;
export const IS_CANARY = true;
export const IS_DEV = !IS_LOCAL && !IS_PROD && !IS_CANARY;
