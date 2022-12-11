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

  newEmailSchema = Joi.object({
    email: Joi.object({
      email: Joi.string().email().required()
    }).required(),

    user: Joi.object().optional()
  });

  userUpdateSchema = Joi.object({
    userUpdate: Joi.object({
      name: Joi.string().min(5).optional(),
      lastname: Joi.string().min(5).optional(),
      username: Joi.string().min(3).optional(),
      password: Joi.string().min(8).optional()
    }).required(),

    user: Joi.object().optional()
  });

  cellUpdateSchema = Joi.object({
    cell: Joi.object({
      cell: Joi.string().min(11).required(),
      idCell: Joi.number().min(1).required()
    }).required(),
    user: Joi.object().optional()
  });

  emailUpdateSchema = Joi.object({
    email: Joi.object({
      email: Joi.string().email().required(),
      idEmail: Joi.number().min(1).required()
    }).required(),
    user: Joi.object().optional()
  });

  cellDeleteSchema = Joi.object({
    cell: Joi.object({
      idCell: Joi.number().min(1).required()
    }).required(),
    user: Joi.object().optional()
  });

  emailDeleteSchema = Joi.object({
    email: Joi.object({
      idEmail: Joi.number().min(1).required()
    }).required(),
    user: Joi.object().optional()
  });
}
