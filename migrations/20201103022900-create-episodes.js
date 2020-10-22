'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('episodes', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING(225),
        allowNull: false
      },
      movie_id: {
        type: Sequelize.UUID,
        allowNull: false
      },
      seasion_id: {
        type: Sequelize.UUID,
        allowNull: false
      },
      rate: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      like: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('episodes');
  }
};