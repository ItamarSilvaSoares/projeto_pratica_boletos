'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('celulares', {
      id_celular: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,

      },
      celular: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('celulares');
  },
};
