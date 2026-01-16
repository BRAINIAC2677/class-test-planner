require('dotenv').config();
const oracledb = require('oracledb');

oracledb.autoCommit = true;
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function getConnection() {
  try {
    return await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECTION_STRING
    });
  } catch (err) {
    console.error('Database connection error:', err);
    throw err;
  }
}

module.exports = { getConnection };
