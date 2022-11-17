import express from 'express';

import UserController from '../controllers/user.controller';
import MiddlewareValidations from '../middlewares/validations.middleware';
import UserService from '../services/user.service';
import UserModel from '../models/User';

const userController = new UserController(new UserService(UserModel));
const validate = new MiddlewareValidations();

const router = express.Router();

router.get('/', async (req, res) => await userController.getAllUser(req, res));

router.post('/', validate.validateBodyNewUser,
  async (req, res) => await userController.createNewUser(req, res));

export default router;
