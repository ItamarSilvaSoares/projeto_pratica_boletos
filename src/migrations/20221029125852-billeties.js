/* eslint-disable camelcase */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('boletos', {
      id_boleto: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      vencimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      id_status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 2,
        references: {
          model: 'status_boleto',
          key: 'id_status',
        },
      },
      id_descricao: {
        type: Sequelize.INTEGER,
        references: {
          model: 'descricoes_boletos',
          key: 'id_descricao',
        },
      },
      id_linha: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'linhas_digitaveis',
          key: 'id_linha',
        },
      },
      valor: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },


    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('boletos');
  },
};
