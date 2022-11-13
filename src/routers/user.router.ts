import express from 'express';

import UserController from '../controllers/user.controller';
import MiddlewareValidations from '../middlewares/validations.middleware';

const userController = new UserController();
const validate = new MiddlewareValidations();

const router = express.Router();

router.get('/', async (req, res) => await userController.getAllUser(req, res));

router.post('/', validate.validateBodyNewUser, async (req, res) => await userController.createNewUser(req, res));

export default router;
