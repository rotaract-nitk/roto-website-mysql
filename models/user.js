'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {notEmpty: true}
    },
    role: DataTypes.STRING,
    image_url: DataTypes.STRING,
    instagram: DataTypes.STRING,
    gmail: {
      type: DataTypes.STRING,
      validate: {isEmail: true}
    },
    linkedin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    underscored: true
  });
  return User;
};