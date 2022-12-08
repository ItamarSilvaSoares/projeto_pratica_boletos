import express from 'express';

import CellController from '../controllers/cell.controller';
import MiddlewareValidations from '../middlewares/validations.middleware';

import CellService from '../services/cell.service';
import CellModel from '../models/Cell';

const cellController = new CellController(new CellService(CellModel));
const validate = new MiddlewareValidations();

const router = express.Router();

router.use(validate.tokenValidate);

router.post('/', validate.validateBodyNewCell,
  async (req, res) => await cellController.newCell(req, res));

router.get('/',
  async (req, res) => await cellController.getAllCellById(req, res));

router.put('/', validate.validateBodyCellUpdate,
  async (req, res) => await cellController.update(req, res));

router.delete('/', validate.validateBodyCellDelete,
  async (req, res) => await cellController.delete(req, res));

export default router;
