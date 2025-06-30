const { Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const query = async (queryString) => {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    password: process.env.POSTGRES_PASSWORD,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
  });

  client.connect();
  const result = await client.query(queryString);
  await client.end();

  return result;
};

module.exports = { query };
