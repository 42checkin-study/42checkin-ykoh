import dotenv from 'dotenv';
import { logger } from './logger';

export const STAGE: string = process.env.NODE_ENV
  ? process.env.NODE_ENV
  : 'development';

STAGE === 'production'
  ? dotenv.config({ path: '.env.stage.prod' })
  : dotenv.config({ path: '.env.stage.dev' });

export const DB_HOST = process.env.DB_HOST;
export const DB_PORT =
  typeof process.env.DB_PORT === 'string'
    ? parseInt(process.env.DB_PORT)
    : process.env.DB_PORT;
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_DATABASE = process.env.DB_DATABASE;

if (!(DB_HOST && DB_PORT && DB_USERNAME && DB_PASSWORD && DB_DATABASE)) {
  logger.error('Missing database env variable!');
  process.exit(1);
}
