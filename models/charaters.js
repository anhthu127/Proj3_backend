'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class charaters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  charaters.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    dOb: DataTypes.DATE,
    born_in: DataTypes.STRING,
    gender: DataTypes.INTEGER,
    height: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'charaters',
  });
  return charaters;
};