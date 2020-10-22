'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movies', {

      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      author: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      link: {
        type: Sequelize.STRING(225),
        allowNull: false
      },
      image: {
        type: Sequelize.STRING(225),
        allowNull: false
      },
      category: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      pre_view_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      character_movie_id: {
        type: Sequelize.STRING(80),
        allowNull: false
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
    await queryInterface.dropTable('movies');
  }
};