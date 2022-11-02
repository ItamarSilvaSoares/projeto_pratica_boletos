const express = require('express');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/', userController.getAllUsersController);

module.exports = router;
