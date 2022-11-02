'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('celular_usuario', {
      id_celular: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
      celular: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('celular_usuario');
  },
};
