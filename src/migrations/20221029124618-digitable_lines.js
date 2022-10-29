'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('linhas_digitaveis', {
      id_linha: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      linha_digitavel: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('linhas_digitaveis');
  },
};
