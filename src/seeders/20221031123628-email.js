'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('email_usuario', [
      {
        id_usuario: 1,
        email: 'test@test.com',
      },
      {
        id_usuario: 1,
        email: 'test2@test2.com',
      },
      {
        id_usuario: 2,
        email: 'test3@test3.com',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('email_usuario', null, {});
  },
};
