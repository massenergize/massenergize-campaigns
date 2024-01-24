const ENV = process.env.REACT_APP_TARGET_ENV || 'development';

console.log('ENV', ENV);

export const IS_PROD = ENV === 'production';
export const IS_CANARY = ENV === 'canary';
export const IS_DEV = ENV === 'development';
export const IS_LOCAL = ENV !== 'production' && ENV !== 'canary' && ENV !== 'development';
