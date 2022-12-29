const express = require('express');
const maincontroller = require('../controllers/maincontroller');
const eventRouter = require('../routes/eventRoutes');
const db = require('../models');
const User = db.User;

const router = express.Router();

router.get('/', (req, res, next) => {
  maincontroller(req, res);
});

router.use('/events',eventRouter);

module.exports = router