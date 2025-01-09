'use strict';
const {
  Model,
  UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Written_task}) {
      // define association here
      this.hasMany(Written_task, {
        foreignKey: 'user_id',
        as: 'written_task'
      })
    }
  }
  User.init({
    user_id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
  },
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};