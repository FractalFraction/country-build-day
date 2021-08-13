'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
     * 
    */

      await queryInterface.bulkInsert('Countries', [{
      name: 'France',
      isoname: 'fr',
      population: 68200000,
      landarea: 643427,
      createdAt: new Date(),
      updatedAt: new Date()
    },
        {
      name: 'Japan',
      isoname: 'jp',
      population: 125960000,
      landarea: 377975,
       createdAt: new Date(),
      updatedAt: new Date()
    },
        {
      name: 'United States',
      isoname: 'us',
      population: 328239523,
      landarea: 9147590,
       createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        name: 'United Kingdom',
        isoname: 'gb',
        population: 67886004, 
        landarea: 248532,
         createdAt: new Date(),
      updatedAt: new Date()
    }])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Countries', null, {});
  }
};
