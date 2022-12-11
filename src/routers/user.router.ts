import express from 'express';

import UserController from '../controllers/user.controller';
import MiddlewareValidations from '../middlewares/validations.middleware';

const userController = UserController;
const validate = MiddlewareValidations;

const router = express.Router();

router.get('/search',
  async (req, res) => await userController.search(req, res));

router.get('/:username',
  async (req, res) => await userController.findOne(req, res));

router.get('/', async (req, res) => await userController.getAllUser(req, res));

router.post('/', validate.validateBodyNewUser,
  async (req, res) => await userController.createNewUser(req, res));

router.use(validate.tokenValidate);

router.delete('/me', async (req, res) => await userController.delete(req, res));

router.put('/', validate.validateBodyUserUpdate,
  async (req, res) => await userController.update(req, res));

export default router;
