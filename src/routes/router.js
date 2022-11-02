const express = require('express');

const userRouter = require('./user.router');

const routers = express.Router();

routers.use('/user', userRouter);

module.exports = routers;
