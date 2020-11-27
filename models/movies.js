'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  const attributes = {
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
   
  }
  movies.init({
    attributes
  }, {
    sequelize,
    modelName: 'movies',
  });
  return movies;
};