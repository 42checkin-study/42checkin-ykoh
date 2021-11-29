'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'Cluster',
      [
        { name: '서초', max: 150 },
        { name: '개포', max: 150 },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Cluster', null, {});
  },
};
