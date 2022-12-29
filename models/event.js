'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Activity)
    }
  }
  Event.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING(2048),
    thumbnail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
    underscored: true
  });
  return Event;
};