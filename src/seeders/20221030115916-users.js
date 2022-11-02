'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [{
      nome: 'test',
      sobreNome: 'test',
      senha: '1234',
    },
    {
      nome: 'test2',
      sobreNome: 'test2',
      senha: '1234',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  },
};
