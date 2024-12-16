const express = require('express');
const { createBooking, getBookings } = require('../controllers/bookingController');
const router = express.Router();

router.post('/', createBooking);
router.get('/:userId', getBookings);

module.exports = router;
