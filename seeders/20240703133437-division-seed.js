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

    await queryInterface.bulkInsert('Divisions', [
      {
        divisionName: 'Marketing & Sales',
      },
      {
        divisionName: 'HC & GA',
      },
      {
        divisionName: 'Operational & Procurement',
      },
      {
        divisionName: 'Finance Accounting & Tax',
      },
      {
        divisionName: 'Others',
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

    await queryInterface.bulkDelete('Divisions', null, {});
  }
};
