const ENV = process.env.NODE_ENV || 'development';

export const IS_PROD = ENV === 'production';
export const IS_CANARY = ENV === 'canary';
export const IS_DEV = ENV === 'development';
export const IS_LOCAL = ENV !== 'production' && ENV !== 'canary' && ENV !== 'development';