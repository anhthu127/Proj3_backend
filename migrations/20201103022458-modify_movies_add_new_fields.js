'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'movies', // table name
        'name', // new field name
        {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'movies',
        'description',
        {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'movies',
        'author',
        {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'movies',
        'link',
        {
          type: Sequelize.STRING(225),
          allowNull: true,
        },
      )
    ]);
  },
  down: async (queryInterface, Sequelize) => {

  }
};
