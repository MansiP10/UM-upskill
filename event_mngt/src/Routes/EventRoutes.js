const express = require('express');
const { events } = require('../Models/StaticData');
const router = express.Router();

// Fetch Events
router.get('/', (req, res) => {
  const { category } = req.query;
  const filteredEvents = category
    ? events.filter((event) => event.category === category)
    : events;
  res.status(200).json(filteredEvents);
});

// Fetch Single Event
router.get('/:id', (req, res) => {
  const event = events.find((event) => event._id === req.params.id);
  if (event) {
    res.status(200).json(event);
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
});

// Mock Create Event
router.post('/', (req, res) => {
  res.status(201).json({ message: 'Mock event created successfully' });
});

module.exports = router;