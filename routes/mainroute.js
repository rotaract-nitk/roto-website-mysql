const express = require('express');
const maincontroller = require('../controllers/maincontroller');
const db = require('../models');
const User = db.User;

const router = express.Router();

router.get('/', (req, res, next) => {
  maincontroller(req, res);
});

module.exports = router