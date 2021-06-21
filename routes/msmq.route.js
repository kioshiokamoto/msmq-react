const express = require('express');
const router = express.Router();

const controller = require('../controllers/msmq.controller');
router.post('/sendMessage', controller.sendMessage);

router.get('/viewAllMessages', controller.viewAllMessages);

router.get('/viewAllSavedMessages', controller.viewAllSavedMessages);

router.get('/closeQueue', controller.closeQueue);

router.get('/clearQueue', controller.clearQueue);

module.exports = router;
