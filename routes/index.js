var express = require('express');
var router = express.Router();
const locker = require('../src/modules/locker');
const db = require('../config/db');

/* GET home page. */
router.get('/', async function (req, res, next) {
  // let users = await db.query('select * from users where id = $1', [1]);
  let users = await db.query(
    `insert into users(name, email, dob, inserted_at, updated_at) VALUES ($1, $2, $3, $4, $5) RETURNING id`,
    [
      'fahad',
      'fahad',
      'fahad',
      '2020-04-09T19:54:14.000Z',
      '2020-04-09T19:54:14.000Z',
    ]
  );
  res.reply({
    data: users,
  });
});

module.exports = router;
