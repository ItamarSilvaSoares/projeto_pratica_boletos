const {User, Cell, Email} = require('../models');

const getAllUsers = async () => User.findAll({
  include: [{
    model: Cell, as: 'celulares',
    attributes: {exclude: ['id_celular', 'id_usuario']},
  }, {model: Email, as: 'emails',
    attributes: {exclude: ['id_email', 'id_usuario']}}],
  attributes: {exclude: ['senha']},
});

module.exports = {
  getAllUsers,
};
