const keys = require('./keys');
const common = require('../src/modules/common');

const { Pool } = require('pg');

const pool = new Pool({
  host: keys.pg.host,
  user: keys.pg.user,
  password: keys.pg.password,
  database: keys.pg.database,
  port: keys.pg.port,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = {
  query: async function (text, values) {
    return new Promise((resolve, reject) => {
      pool.connect(function (err, client, done) {
        console.log('DB ERR', err);
        client.query(text, values, function (err, result) {
          done();
          if (err) return reject(err);
          return resolve(result.rows);
        });
      });
    });
  },
};
