const isDev = process.env.NODE_ENV === 'development';

export const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
export const FIREBASE_AUTH_DOMAIN = process.env.FIREBASE_AUTH_DOMAIN;
export const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
export const FIREBASE_STORAGE_BUCKET = process.env.FIREBASE_STORAGE_BUCKET;
export const FIREBASE_MESSAGING_SENDER_ID =
  process.env.FIREBASE_MESSAGING_SENDER_ID;
export const FIREBASE_APP_ID = process.env.FIREBASE_APP_ID;
export const FIREBASE_MEASUREMENT_ID = process.env.FIREBASE_MEASUREMENT_ID;

export const SERVER_URL = isDev
  ? process.env.SERVER_DEV_URL
  : process.env.SERVER_PROD_URL;

export const CLIENT_PORT = process.env.CLIENT_PORT;
