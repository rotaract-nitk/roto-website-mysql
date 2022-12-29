const express = require('express');
const eventController = require('../controllers/eventController');


const router = express.Router();

router.get('/:id',eventController.showEvent);

module.exports = router;