const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  const { email, password, name } = req.body;
  // Registration logic
  res.json({ message: 'User registered', email });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Login logic
  res.json({ token: 'jwt_token_here' });
});

module.exports = router;