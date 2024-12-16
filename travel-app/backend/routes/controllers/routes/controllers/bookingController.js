const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  const { userId, busId, seats, date } = req.body;
  try {
    const booking = new Booking({ userId, busId, seats, date });
    await booking.save();
    res.status(201).json({ message: 'Booking successful', booking });
  } catch (err) {
    res.status(500).json({ error: 'Booking failed' });
  }
};

exports.getBookings = async (req, res) => {
  const { userId } = req.params;
  try {
    const bookings = await Booking.find({ userId });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};
