const dotenv = require('dotenv');

process.env.NODE_ENV === 'production'
  ? dotenv.config({ path: '.env.stage.prod' })
  : dotenv.config({ path: '.env.stage.dev' });

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  timezone: '+09:00',
};
