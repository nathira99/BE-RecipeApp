const express = require('express');
const { registerUser, loginUser } = require('../controllers/authcontroller');
const authRouter = express.Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser)

module.exports = authRouter;