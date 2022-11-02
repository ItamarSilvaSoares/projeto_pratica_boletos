const userService = require('../services/user.service');

const getAllUsersController = async (req, res) => {
  const users = await userService.getAllUsers();

  res.status(200).json(users);
};

module.exports = {
  getAllUsersController,
};
