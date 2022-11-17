import Joi from 'joi';

export default class JoiSchemas {
  loginSchema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(8).required()
  });

  newUserSchema = Joi.object({
    newUser: Joi.object({
      name: Joi.string().min(5).required(),
      lastname: Joi.string().min(5).required(),
      username: Joi.string().min(3).required(),
      password: Joi.string().min(8).required()
    }).required(),

    email: Joi.object({
      email: Joi.string().email().required()
    }).optional(),

    cell: Joi.object({
      cell: Joi.string().min(11).required()
    }).optional()
  });

  newCellSchema = Joi.object({
    cell: Joi.object({
      cell: Joi.string().min(11).required()
    }).required(),
    user: Joi.object().optional()
  });
}
