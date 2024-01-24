export const IS_LOCAL = true;
export const IS_PROD = false;
export const IS_CANARY = false;
export const IS_DEV = !IS_LOCAL && !IS_PROD && !IS_CANARY;
