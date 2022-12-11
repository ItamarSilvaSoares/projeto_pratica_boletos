import express from 'express';

import CellController from '../controllers/cell.controller';
import MiddlewareValidations from '../middlewares/validations.middleware';

const cellController = CellController;
const validate = MiddlewareValidations;

const router = express.Router();

router.use(validate.tokenValidate);

router.post('/', validate.validateBodyNewCell,
  async (req, res) => await cellController.create(req, res));

router.get('/',
  async (req, res) => await cellController.find(req, res));

router.put('/', validate.validateBodyCellUpdate,
  async (req, res) => await cellController.update(req, res));

router.delete('/', validate.validateBodyCellDelete,
  async (req, res) => await cellController.delete(req, res));

export default router;
