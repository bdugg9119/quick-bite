const Pool = require('pg').Pool;
const { PSQL_USER, PSQL_USER_PASS } = require('./static');

const pool = new Pool({
  database: 'restaurant_list',
  host: 'localhost',
  password: PSQL_USER_PASS,
  port: 5432,
  user: PSQL_USER
});

module.exports = pool;