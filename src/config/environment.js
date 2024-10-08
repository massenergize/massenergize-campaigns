const NODE_ENV = process.env.NODE_ENV || 'local';
const TARGET_ENV = process.env.REACT_APP_TARGET_ENV || 'development';

console.log('TARGET_ENV, NODE_ENV', TARGET_ENV, NODE_ENV);

export const IS_DEV = NODE_ENV === "development" && TARGET_ENV === 'development';
export const IS_PROD = NODE_ENV === "production" && TARGET_ENV === 'production';
export const IS_CANARY = NODE_ENV === "canary" && TARGET_ENV === 'canary';
export const IS_LOCAL = NODE_ENV === "development";
