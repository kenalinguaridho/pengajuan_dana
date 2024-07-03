'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Budi Soejatmiko',
        divisionId: 1
      },
      {
        name: 'Joko Anwar',
        divisionId: 2
      },
      {
        name: 'Budiono Siregar',
        divisionId: 1
      },
      {
        name: 'Ebel Cobra',
        divisionId: 4
      },
      {
        name: 'Radit',
        divisionId: 5
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
