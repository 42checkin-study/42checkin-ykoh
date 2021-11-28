'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cards = [];

    for (let i = 1; i <= 200; i++) {
      const cardForGaepo = { id: i, clusterName: '개포' };
      cards.push(cardForGaepo);

      const cardForSeocho = { id: 1000 + i, clusterName: '서초' };
      cards.push(cardForSeocho);
    }

    await queryInterface.bulkInsert('Card', cards, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Card', null, {});
  },
};
