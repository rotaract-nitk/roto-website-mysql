const express = require('express');
const db = require('../models/index');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    // let results = await db.sequelize.Users.all();
    console.log(db);
    // let results = await db.User.all();
    // res.render('home', {siteData: { teams: results}});
    res.render('home', {siteData: { teams: {} }});
  } catch(e) {
    console.log(e);
  }
});

module.exports = router