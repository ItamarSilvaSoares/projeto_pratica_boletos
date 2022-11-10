import Joi from 'joi';

export default class JoiSchemas {
  loginSchema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(8).required()
  });
}
