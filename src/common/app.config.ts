/** @format */

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export default () => ({
  appSecret: process.env.SECRET,
  appExpiration: process.env.EXPIRATION,
  appDatabaseUrl: process.env.DATABASE_URL,
});
