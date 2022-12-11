import express from 'express';
import EmailController from '../controllers/email.controller';
import MiddlewareValidations from '../middlewares/validations.middleware';

const router = express.Router();

const validate = MiddlewareValidations;

const email = EmailController;

router.use(validate.tokenValidate);

router.post('/', validate.validateBodyNewEmail,
  async (req, res) => await email.create(req, res));

router.get('/',
  async (req, res) => await email.find(req, res));

router.put('/', validate.validateBodyEmailUpdate,
  async (req, res) => await email.update(req, res));

router.delete('/', validate.validateBodyEmailDelete,
  async (req, res) => await email.delete(req, res));

export default router;
