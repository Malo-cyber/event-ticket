const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets.js');

router.post('/ticketCreate', ticketsCtrl.createTicket);
router.post('/mutlipleticketCreate', ticketsCtrl.createMultipleTicket)

module.exports = router;