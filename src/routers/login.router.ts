import express from 'express';

import UserLoginController from '../controllers/login.controller';
import MiddlewareValidations from '../middlewares/validations.middleware';
import UserLogin from '../services/login.service';
import UserModel from '../models/User';

const login = new UserLoginController(new UserLogin(UserModel));

const validations = new MiddlewareValidations();

const router = express.Router();

router.post('/', validations.validateBodyLogin, login.login);

export default router;
