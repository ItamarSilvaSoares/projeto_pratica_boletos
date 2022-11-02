'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('email_usuario', {
      id_email: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
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
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('email_usuario');
  },
};
