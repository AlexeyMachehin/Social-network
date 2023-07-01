import dotenv from 'dotenv';

dotenv.config();

export const isDev = process.env.NODE_ENV === 'development';

export const CLIENT_URL = isDev
  ? process.env.CLIENT_DEV_URL
  : process.env.CLIENT_PROD_URL;

export const SERVER_PORT = process.env.SERVER_PORT;

export const MONGO_PATH = process.env.MONGO_PATH;
