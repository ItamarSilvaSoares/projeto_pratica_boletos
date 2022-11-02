'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('boletos', {
      id_boleto: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
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
      id_usuario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'id_usuario',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },


    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('boletos');
  },
};
