const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const { register, login, profile } = require('../controllers/authController');
const validate = require('../middlewares/validateMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register',
  [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
  ],
  validate,
  register
);

router.post('/login',
  [
    body('email').isEmail(),
    body('password').exists(),
  ],
  validate,
  login
);

router.get('/profile', authMiddleware, profile);

module.exports = router;