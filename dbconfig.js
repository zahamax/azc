herrequire('dotenv').config()
const db = require('knex')({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  }
});


module.exports = db




CREATE TABLE users
  (
    name character varying(100),
    email text UNIQUE PRIMARY KEY NOT NULL,
    joined timestamp NOT NULL,

    admin boolean,
    password text,
    deposit integer,



    phone text,
    profits integer,

    withdrwal integer,
    referral integer,
    address text,
  )