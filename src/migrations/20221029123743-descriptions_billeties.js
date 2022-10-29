'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('descricoes_boletos', {
      id_descricao: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      descricao: Sequelize.TEXT,
      adicionado_em: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('descricoes_boletos');
  },
};
