'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('celular_usuario', [
      {
        id_usuario: 1,
        celular: '13456789',
      },
      {
        id_usuario: 1,
        celular: '987654321',
      },
      {
        id_usuario: 2,
        celular: '147258369',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('celular_usuario', null, {});
  },
};
