'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('emails', {
      id_email: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,

      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('emails');
  },
};
