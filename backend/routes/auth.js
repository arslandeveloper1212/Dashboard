const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const auth = require('../middlewares/auth');

// Public routes (login and signup)
router.post('/login', authController.handleLogin);
router.post('/signup', authController.handleRegister);
router.post('/forgot-password', authController.forgotPassword);
router.get('/reset-password',auth,  authController.resetPassword);

module.exports = router;
