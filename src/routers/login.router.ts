import express from 'express';

import UserLoginController from '../controllers/login.controller';
import MiddlewareValidations from '../middlewares/validations.middleware';

const login = new UserLoginController();
const validations = new MiddlewareValidations();

const router = express.Router();

router.post('/', validations.validateBodyLogin, login.login);

export default router;
