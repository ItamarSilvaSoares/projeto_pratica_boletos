'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('status_boleto', {
      id_status: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('status_boleto');
  },
};
