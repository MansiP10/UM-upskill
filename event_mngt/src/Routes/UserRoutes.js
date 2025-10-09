const express = require('express');
const router = express.Router();

// Mock Signup
router.post('/signup', (req, res) => {
  res.status(201).json({ message: 'Mock user registered successfully' });
});

// Mock Login
router.post('/login', (req, res) => {
  res.status(200).json({ token: 'mock-token' });
});

module.exports = router;