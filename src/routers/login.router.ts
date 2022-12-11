import express from 'express';

import UserLoginController from '../controllers/login.controller';
import MiddlewareValidations from '../middlewares/validations.middleware';

const login = UserLoginController;

const validations = MiddlewareValidations;

const router = express.Router();

router.post('/', validations.validateBodyLogin, login.login);

export default router;
