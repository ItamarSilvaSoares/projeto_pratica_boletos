require('dotenv').config();

const config = {
  username: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  host: process.env.SQL_HOST,
  dialect: process.env.DIALECT,
  database: process.env.DB_NAME,
};

module.exports = {
  development: {
    ...config,

  },
  test: {
    ...config,

  },
  production: {
    ...config,

  },
};
