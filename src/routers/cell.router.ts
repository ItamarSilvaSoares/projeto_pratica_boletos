import express from 'express';

import CellController from '../controllers/cell.controller';
import MiddlewareValidations from '../middlewares/validations.middleware';

import CellService from '../services/cell.service';
import CellModel from '../models/Cell';

const cellController = new CellController(new CellService(CellModel));
const validate = new MiddlewareValidations();

const router = express.Router();

router.post('/', validate.tokenValidate, validate.validateBodyNewCell,
  async (req, res) => await cellController.newCell(req, res));

router.get('/', validate.tokenValidate,
  async (req, res) => await cellController.getAllCellById(req, res));

export default router;
