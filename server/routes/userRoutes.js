// const express = require('express');
// const router = express.Router();
// const userController = require('../Controllers/userController');
// // Register route
// router.post('/signup', userController.signup);

// // Login route
// router.post('/login', userController.login);


// module.exports = router;

// routes/farmerRoutes.js
// const express = require('express');
// const router = express.Router();
// const authMiddleware = require('../Middleware/authMiddleware');
// const userController = require('../Controllers/userController');

// // Signup route for farmers
// router.post('/signup', userController.signup);
// router.post('/login', userController.login);
// router.get('/me', authMiddleware, userController.getUserProfile);

// module.exports = router;

import express from 'express';
import autMiddleware from '../Middleware/autMiddleware.js';
import userController from '../controllers/userController.js';
const { signup, login, getUserProfile } = userController;
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', autMiddleware, getUserProfile);

export default router;
