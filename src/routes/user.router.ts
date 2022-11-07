import express from 'express';

import UserController from '../controllers/user.controller';

const userController = new UserController()

const router = express.Router();

router.get('/', (req, res) => userController.getAllUser(req, res));

export default router;
